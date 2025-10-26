import * as THREE from 'three';

// ============================================================================
// Configuration (Centralized Constants)
// ============================================================================

/**
 * Scene configuration with all magic numbers centralized
 * Following the Configuration Pattern for maintainability
 */
export interface SceneConfig {
  camera: {
    fov: number;
    near: number;
    far: number;
    positionZ: number;
  };
  renderer: {
    alpha: boolean;
    antialias: boolean;
    clearColor: number;
    clearAlpha: number;
  };
  shapes: {
    count: number;
    positionRange: { x: number; y: number; z: number };
    velocityRange: { x: number; y: number; z: number };
  };
  animation: {
    baseRotationSpeed: number;
    rotationSpeedIncrement: number;
    floatingSpeed: number;
    floatingAmplitude: number;
  };
  boundaries: {
    x: number;
    y: number;
    z: number;
  };
}

const DEFAULT_CONFIG: SceneConfig = {
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    positionZ: 10,
  },
  renderer: {
    alpha: true,
    antialias: true,
    clearColor: 0x000000,
    clearAlpha: 0,
  },
  shapes: {
    count: 8,
    positionRange: { x: 12, y: 8, z: 6 },
    velocityRange: { x: 0.01, y: 0.008, z: 0.006 },
  },
  animation: {
    baseRotationSpeed: 0.005,
    rotationSpeedIncrement: 0.001,
    floatingSpeed: 0.001,
    floatingAmplitude: 0.001,
  },
  boundaries: { x: 8, y: 6, z: 4 },
};

// ============================================================================
// Value Objects
// ============================================================================

/**
 * Value object representing 3D velocity
 */
class Velocity {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  public static random(range: { x: number; y: number; z: number }): Velocity {
    return new Velocity(
      (Math.random() - 0.5) * range.x,
      (Math.random() - 0.5) * range.y,
      (Math.random() - 0.5) * range.z,
    );
  }

  public reverse(axis: 'x' | 'y' | 'z'): void {
    this[axis] *= -1;
  }
}

/**
 * Value object representing boundaries in 3D space
 */
class Boundaries {
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  public isOutOfBounds(position: THREE.Vector3, axis: 'x' | 'y' | 'z'): boolean {
    const limit = this[axis];
    return position[axis] > limit || position[axis] < -limit;
  }
}

// ============================================================================
// Shape Factory (Factory Pattern)
// ============================================================================

/**
 * Factory for creating Three.js geometries
 * Encapsulates shape creation logic
 */
const GeometryFactory = {
  GEOMETRIES: [
    () => new THREE.BoxGeometry(2.5, 2.5, 2.5),
    () => new THREE.SphereGeometry(1.5, 32, 32),
    () => new THREE.ConeGeometry(1.6, 2.8, 8),
    () => new THREE.OctahedronGeometry(1.5),
  ] as const,

  create(index: number): THREE.BufferGeometry {
    const factoryFn = this.GEOMETRIES[index % this.GEOMETRIES.length];
    return factoryFn();
  },

  getVarietyCount(): number {
    return this.GEOMETRIES.length;
  },
} as const;

/**
 * Factory for creating Three.js materials
 * Encapsulates material creation logic
 */
const MaterialFactory = {
  MATERIALS: [
    () => new THREE.MeshNormalMaterial({ wireframe: true }),
    () => new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.7 }),
    () => new THREE.MeshNormalMaterial({ wireframe: true }),
    () => new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 }),
  ] as const,

  create(index: number): THREE.Material {
    const factoryFn = this.MATERIALS[index % this.MATERIALS.length];
    return factoryFn();
  },
} as const;

// ============================================================================
// Animated Shape (Entity Pattern)
// ============================================================================

/**
 * Encapsulates a mesh with its animation properties
 * Follows Single Responsibility Principle - manages one animated shape
 */
class AnimatedShape {
  private readonly velocity: Velocity;

  constructor(
    public readonly mesh: THREE.Mesh,
    velocity: Velocity,
    public readonly index: number,
  ) {
    this.velocity = velocity;
  }

  public static create(
    index: number,
    positionRange: { x: number; y: number; z: number },
    velocityRange: { x: number; y: number; z: number },
  ): AnimatedShape {
    const geometry = GeometryFactory.create(index);
    const material = MaterialFactory.create(index);
    const mesh = new THREE.Mesh(geometry, material);

    // Set random initial position
    mesh.position.set(
      (Math.random() - 0.5) * positionRange.x,
      (Math.random() - 0.5) * positionRange.y,
      (Math.random() - 0.5) * positionRange.z,
    );

    // Set random initial rotation
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

    const velocity = Velocity.random(velocityRange);

    return new AnimatedShape(mesh, velocity, index);
  }

  public updateAnimation(config: SceneConfig['animation'], boundaries: Boundaries): void {
    // Update rotation
    this.mesh.rotation.x += config.baseRotationSpeed + this.index * config.rotationSpeedIncrement;
    this.mesh.rotation.y += config.baseRotationSpeed + this.index * config.rotationSpeedIncrement;

    // Update position with velocity
    this.mesh.position.x += this.velocity.x;
    this.mesh.position.y += this.velocity.y;
    this.mesh.position.z += this.velocity.z;

    // Boundary collision detection and velocity reversal
    this.handleBoundaryCollision(boundaries);

    // Add subtle floating motion
    this.mesh.position.y +=
      Math.sin(Date.now() * config.floatingSpeed + this.index) * config.floatingAmplitude;
  }

  private handleBoundaryCollision(boundaries: Boundaries): void {
    if (boundaries.isOutOfBounds(this.mesh.position, 'x')) {
      this.velocity.reverse('x');
    }
    if (boundaries.isOutOfBounds(this.mesh.position, 'y')) {
      this.velocity.reverse('y');
    }
    if (boundaries.isOutOfBounds(this.mesh.position, 'z')) {
      this.velocity.reverse('z');
    }
  }

  public dispose(): void {
    this.mesh.geometry.dispose();
    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach((material) => material.dispose());
    } else {
      this.mesh.material.dispose();
    }
  }
}

// ============================================================================
// Shape Manager (Collection Manager Pattern)
// ============================================================================

/**
 * Manages a collection of animated shapes
 * Handles creation, animation, and cleanup of all shapes
 */
class ShapeManager {
  private shapes: AnimatedShape[] = [];

  constructor(
    private readonly scene: THREE.Scene,
    private readonly config: SceneConfig,
  ) {}

  public createShapes(): void {
    const { count, positionRange, velocityRange } = this.config.shapes;

    for (let i = 0; i < count; i++) {
      const shape = AnimatedShape.create(i, positionRange, velocityRange);
      this.scene.add(shape.mesh);
      this.shapes.push(shape);
    }
  }

  public updateShapes(): void {
    const boundaries = new Boundaries(
      this.config.boundaries.x,
      this.config.boundaries.y,
      this.config.boundaries.z,
    );

    for (const shape of this.shapes) {
      shape.updateAnimation(this.config.animation, boundaries);
    }
  }

  public dispose(): void {
    for (const shape of this.shapes) {
      this.scene.remove(shape.mesh);
      shape.dispose();
    }
    this.shapes = [];
  }
}

// ============================================================================
// Animation Loop (Strategy Pattern)
// ============================================================================

/**
 * Handles the animation loop logic
 * Separated from scene management for better testability
 */
class AnimationLoop {
  private animationId: number | null = null;
  private isFirstRender = true;

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly scene: THREE.Scene,
    private readonly camera: THREE.PerspectiveCamera,
    private readonly shapeManager: ShapeManager,
    private readonly onSceneReady?: () => void,
  ) {}

  public start(visibilityCheck: () => boolean): void {
    const animate = () => {
      if (visibilityCheck()) {
        this.shapeManager.updateShapes();
        this.renderer.render(this.scene, this.camera);
      }

      // Notify that scene is ready after first render
      if (this.isFirstRender) {
        this.notifySceneReady();
        this.isFirstRender = false;
      }

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
  }

  private notifySceneReady(): void {
    if (this.onSceneReady) {
      setTimeout(this.onSceneReady, 100);
    }
  }

  public stop(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.isFirstRender = true;
  }
}

// ============================================================================
// Main Scene Class (Facade Pattern)
// ============================================================================

export interface ThreeJSSceneOptions {
  onSceneReady?: () => void;
  config?: Partial<SceneConfig>;
}

/**
 * Main Three.js scene orchestrator
 * Acts as a Facade, coordinating all components
 * Simplified and focused on high-level scene management
 */
export class ThreeJSScene {
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private shapeManager: ShapeManager | null = null;
  private animationLoop: AnimationLoop | null = null;
  private isVisible = true;
  private readonly config: SceneConfig;
  private readonly onSceneReady?: () => void;

  constructor(options?: ThreeJSSceneOptions) {
    this.onSceneReady = options?.onSceneReady;
    this.config = this.mergeConfig(options?.config);
  }

  private mergeConfig(partial?: Partial<SceneConfig>): SceneConfig {
    if (!partial) return DEFAULT_CONFIG;
    return {
      camera: { ...DEFAULT_CONFIG.camera, ...partial.camera },
      renderer: { ...DEFAULT_CONFIG.renderer, ...partial.renderer },
      shapes: { ...DEFAULT_CONFIG.shapes, ...partial.shapes },
      animation: { ...DEFAULT_CONFIG.animation, ...partial.animation },
      boundaries: { ...DEFAULT_CONFIG.boundaries, ...partial.boundaries },
    };
  }

  public initialize(container: HTMLDivElement): void {
    if (!container) return;

    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer(container);
    this.shapeManager = new ShapeManager(this.scene, this.config);
    
    this.shapeManager.createShapes();
    
    this.animationLoop = new AnimationLoop(
      this.renderer,
      this.scene,
      this.camera,
      this.shapeManager,
      this.onSceneReady,
    );
    
    this.animationLoop.start(() => this.isVisible);
  }

  private createScene(): THREE.Scene {
    return new THREE.Scene();
  }

  private createCamera(): THREE.PerspectiveCamera {
    const { fov, near, far, positionZ } = this.config.camera;
    const camera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      near,
      far,
    );
    camera.position.z = positionZ;
    return camera;
  }

  private createRenderer(container: HTMLDivElement): THREE.WebGLRenderer {
    const { alpha, antialias, clearColor, clearAlpha } = this.config.renderer;
    const renderer = new THREE.WebGLRenderer({ alpha, antialias });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(clearColor, clearAlpha);
    container.appendChild(renderer.domElement);
    
    return renderer;
  }

  public setVisibility(visible: boolean): void {
    this.isVisible = visible;
  }

  public handleResize(): void {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public dispose(): void {
    this.animationLoop?.stop();
    this.shapeManager?.dispose();
    this.renderer?.dispose();

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.shapeManager = null;
    this.animationLoop = null;
  }

  public getRendererElement(): HTMLCanvasElement | null {
    return this.renderer?.domElement || null;
  }
}
