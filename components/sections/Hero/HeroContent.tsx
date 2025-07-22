export default function HeroContent() {
  return (
    <>
      <h1
        id="hero-title"
        className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight text-wrap-balance no-orphans"
        data-macaly="hero-title"
      >
        Dagmar Drbálková
      </h1>

      <div className="text-2xl md:text-3xl text-indigo-600 font-light mb-8 space-y-2 text-wrap-balance no-orphans">
        <div data-macaly="hero-subtitle-1">Full Stack Developer</div>
        <div data-macaly="hero-subtitle-2">& 3D Printing Enthusiast</div>
      </div>

      <div className="space-y-6 mb-12">
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          Fascinuje mě schopnost kódu vytvořit velkou přidanou hodnotu prakticky
          z&nbsp;ničeho. Zaměřuju se na Typescript, Node a React stack. Na
          frontendu Next.js, Tailwind, Shadcn. Na backendu PostgreSQL, Prisma
          nebo Directus.
        </p>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          Jsem orientovaná na profesní růst - ráda a hodně se vzdělávám. Kromě
          běžících projektů teď jedu kurz na Coursera s IBM coby jeho garantem a
          mám (možná až moc) rozečtených knížek&nbsp;z&nbsp;O'Railly.
        </p>
      </div>
    </>
  );
}
