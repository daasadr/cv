import * as THREE from 'three';

export interface ThreeJSSceneOptions {
  onSceneReady?: () => void;
}

export class ThreeJSScene {
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private meshes: THREE.Mesh[] = [];
  private meshMovement: Array<{
    velocityX: number;
    velocityY: number;
    velocityZ: number;
  }> = [];
  private animationId: number | null = null;
  private isVisible = true;
  private isFirstRender = true;
  private onSceneReady?: () => void;

  constructor(options?: ThreeJSSceneOptions) {
    this.onSceneReady = options?.onSceneReady;
  }

  public initialize(container: HTMLDivElement): void {
    if (!container) return;

    // Scene setup
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    this.createFloatingShapes();
    this.camera.position.z = 10;
    this.startAnimation();
  }

  private createFloatingShapes(): void {
    if (!this.scene) return;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(2.5, 2.5, 2.5),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.ConeGeometry(1.6, 2.8, 8),
      new THREE.OctahedronGeometry(1.5),
    ];

    const materials = [
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.7 }),
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 }),
    ];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 12;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Random slow movement velocities
      this.meshMovement.push({
        velocityX: (Math.random() - 0.5) * 0.01,
        velocityY: (Math.random() - 0.5) * 0.008,
        velocityZ: (Math.random() - 0.5) * 0.006,
      });

      this.scene.add(mesh);
      this.meshes.push(mesh);
    }
  }

  private startAnimation(): void {
    const animate = () => {
      if (this.isVisible && this.renderer && this.scene && this.camera) {
        this.meshes.forEach((mesh, index) => {
          // Rotation animation
          mesh.rotation.x += 0.005 + index * 0.001;
          mesh.rotation.y += 0.005 + index * 0.001;

          // Slow random movement
          const movement = this.meshMovement[index];
          mesh.position.x += movement.velocityX;
          mesh.position.y += movement.velocityY;
          mesh.position.z += movement.velocityZ;

          // Boundary checking and velocity reversal to keep shapes visible
          if (mesh.position.x > 8 || mesh.position.x < -8) {
            movement.velocityX *= -1;
          }
          if (mesh.position.y > 6 || mesh.position.y < -6) {
            movement.velocityY *= -1;
          }
          if (mesh.position.z > 4 || mesh.position.z < -4) {
            movement.velocityZ *= -1;
          }

          // Add subtle floating motion
          mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });

        this.renderer.render(this.scene, this.camera);
      }

      // Set scene as ready after first render
      if (this.isFirstRender) {
        setTimeout(() => {
          this.onSceneReady?.();
        }, 100);
        this.isFirstRender = false;
      }

      this.animationId = requestAnimationFrame(animate);
    };

    animate();
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
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
    }

    // Clean up geometries and materials
    this.meshes.forEach((mesh) => {
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => material.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    });

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.meshes = [];
    this.meshMovement = [];
    this.isFirstRender = true;
  }

  public getRendererElement(): HTMLCanvasElement | null {
    return this.renderer?.domElement || null;
  }
}
