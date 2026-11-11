
import articles from "../data/articles";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticleSection() {
  return (
    <section
      id="articles"
      className="bg-[#faf8f4] px-6 py-14 md:px-[8%] md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[3px] text-[#98765b]">
              A collection of curious ideas
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#29231f] md:text-6xl">
              Ideas worth
              <br />
              <span className="italic text-[#a77b58]">
                exploring.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-3 border-b border-[#a77b58] pb-2 text-sm text-[#76563f] transition-colors hover:text-[#a77b58]"
            >
              View all articles
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>

        {/* Show only first 3 articles */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-20 flex items-center justify-between border-t border-[#e8e0d6] pt-6">

          <p className="text-[10px] uppercase tracking-[2px] text-[#a69a8e]">
            Stay curious. Keep learning.
          </p>

          <span className="font-serif text-lg italic text-[#a77b58]">
            The Curious Corner
          </span>

        </div>

      </div>
    </section>
  );
}

export default ArticleSection;
