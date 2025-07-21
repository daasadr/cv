export default function Footer() {
  return (
    <footer 
      className="text-center pt-10 pb-10 border-t border-gray-200"
      role="contentinfo"
      aria-label="Informace o webu"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-600 mb-4">
          © 2025 Dagmar Drbálková
        </p>
        <p className="text-sm text-gray-500">
          Vytvořeno pomocí{' '}
          <span className="inline-flex items-center gap-1 font-medium">
            <abbr title="Next.js - React framework">Next.js</abbr>,{' '}
            <abbr title="TypeScript - typovaný JavaScript">TypeScript</abbr>{' '}
            a <abbr title="Three.js - 3D grafická knihovna">Three.js</abbr>
          </span>
        </p>
        
        {/* Screen reader only additional info */}
        <div className="sr-only">
          <p>
            Tato stránka je plně přístupná a optimalizovaná pro čtečky obrazovky. 
            Pro navigaci použijte hlavní odkazy v horní části stránky.
          </p>
        </div>
      </div>
    </footer>
  );
} 