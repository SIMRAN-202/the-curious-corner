
import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";

function AllArticles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      articles
        .map((article) => article.category)
        .filter(Boolean)
    ),
  ];

  // Search by title, category and description
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" ||
      article.category === selectedCategory;

    const query = searchTerm.trim().toLowerCase();

    const title = String(article.title || "").toLowerCase();
    const category = String(article.category || "").toLowerCase();
    const description = String(article.description || "").toLowerCase();

    const matchesSearch =
      query === "" ||
      title.includes(query) ||
      category.includes(query) ||
      description.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#faf8f4] px-6 pt-6 pb-16 text-[#29231f] md:px-[8%] md:pt-8 md:pb-20">

      <div className="mx-auto max-w-7xl">

        {/* SEARCH BAR */}
        <div className="mb-8">
          <div className="flex items-center gap-4 border-b border-[#cbb9a7] py-4">

            <span className="text-xl text-[#a77b58]">⌕</span>

            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a69a8e]"
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs text-[#98765b] hover:text-[#29231f]"
              >
                Clear
              </button>
            )}

          </div>
        </div>

        {/* SIDEBAR + ARTICLES */}
        <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-14">

          {/* CATEGORY SIDEBAR */}
          <aside>

            <p className="mb-6 text-[11px] uppercase tracking-[2.5px] text-[#98765b]">
              Browse by category
            </p>

            <div className="flex flex-wrap gap-3 md:flex-col md:gap-0">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border px-4 py-2 text-left text-sm transition-all md:border-0 md:border-b md:px-0 md:py-4 ${
                    selectedCategory === category
                      ? "border-[#a77b58] bg-[#eee7dd] text-[#76563f] md:bg-transparent md:font-medium"
                      : "border-[#e8e0d6] text-[#766d65] hover:text-[#a77b58]"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    {category}

                    {selectedCategory === category && (
                      <span className="hidden text-[#a77b58] md:inline">
                        →
                      </span>
                    )}
                  </span>
                </button>
              ))}

            </div>
          </aside>

          {/* ARTICLE RESULTS */}
          <div>

            <div className="mb-8 flex items-center justify-between pb-2">

              <p className="text-sm text-[#766d65]">
                Showing{" "}
                <span className="font-medium text-[#29231f]">
                  {filteredArticles.length}
                </span>{" "}
                {filteredArticles.length === 1 ? "article" : "articles"}
              </p>

              <p className="text-[10px] uppercase tracking-[2px] text-[#a69a8e]">
                {selectedCategory}
              </p>

            </div>

            {filteredArticles.length > 0 ? (

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3">

                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                  />
                ))}

              </div>

            ) : (

              <div className="py-24 text-center">

                <p className="font-serif text-3xl italic text-[#a77b58]">
                  Nothing found.
                </p>

                <p className="mt-4 text-sm text-[#766d65]">
                  Try another title or category.
                </p>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-7 border-b border-[#a77b58] pb-1 text-sm text-[#76563f]"
                >
                  Clear filters →
                </button>

              </div>

            )}

          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-[#e8e0d6] pt-6 sm:flex-row">

          <p className="text-[10px] uppercase tracking-[2px] text-[#a69a8e]">
            Every question is worth exploring.
          </p>

          <Link
            to="/"
            className="text-sm text-[#76563f] hover:text-[#a77b58]"
          >
            ← Back to home
          </Link>

        </div>

      </div>
    </main>
  );
}

export default AllArticles;
