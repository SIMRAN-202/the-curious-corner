

import { Link } from "react-router-dom";
function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col border-t border-[#d9cbbd] pt-6 transition-all duration-300">

      {/* Article metadata */}
      <div className="mb-8 flex items-center justify-between gap-2">
        <span className="text-[10px] font-medium tracking-[1.5px] text-[#98765b]">
          {article.category}
        </span>

        <span className="whitespace-nowrap text-xs text-[#a69a8e]">
          {article.readTime}
        </span>
      </div>

      {/* Article number */}
      <span className="mb-5 font-serif text-4xl text-[#d4c3b1] transition-colors duration-300 group-hover:text-[#a77b58]">
        {article.number}
      </span>

      {/* Title */}
      <h3 className="mb-4 font-serif text-2xl leading-snug text-[#29231f] transition-colors duration-300 group-hover:text-[#a77b58]">
        {article.title}
      </h3>

      {/* Description */}
      <p className="mb-8 grow text-sm leading-7 text-[#766d65]">
        {article.description}
      </p>

      {/* Read link */}
      <Link
  to={`/articles/${article.slug}`}
  className="flex items-center gap-3 border-t border-[#e8e0d6] pt-5 text-sm text-[#76563f] transition-all duration-300 group-hover:gap-5"
>
  Read article
  <span>→</span>
</Link>

    </article>
  );
}

export default ArticleCard;
