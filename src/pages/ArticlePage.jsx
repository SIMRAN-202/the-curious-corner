
import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";

function ArticlePage() {
  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-[#faf8f4] px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-[#29231f]">
          Article not found.
        </h1>

        <Link
          to="/"
          className="mt-8 inline-block text-[#a77b58]"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f4] px-6 py-20 md:px-8 md:py-28">

      <article className="mx-auto max-w-3xl">

        <Link
          to="/"
          className="text-sm text-[#98765b] hover:text-[#76563f]"
        >
          ← Back to Discover
        </Link>

        <div className="mt-16">
          <p className="text-[11px] uppercase tracking-[3px] text-[#98765b]">
            {article.category}
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-tight text-[#29231f] sm:text-5xl md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-7 text-lg leading-8 text-[#766d65]">
            {article.description}
          </p>

          <div className="mt-8 border-y border-[#e8e0d6] py-5 text-xs text-[#98765b]">
            THE CURIOUS CORNER
            <span className="mx-3">·</span>
            {article.readTime}
          </div>
        </div>

        <div className="mt-12 space-y-7">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-9 text-[#514840] md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 border-t border-[#e8e0d6] pt-8">
          <p className="font-serif text-2xl italic text-[#a77b58]">
            Stay curious. Keep exploring.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-3 text-sm text-[#76563f] hover:gap-5 transition-all"
          >
            ← Explore more articles
          </Link>
        </div>

      </article>
    </main>
  );
}

export default ArticlePage;
