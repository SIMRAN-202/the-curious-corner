
import { Link } from "react-router-dom";
import articles from "../data/articles";

function Hero() {
  const featuredArticle = articles.find(
    (article) => article.slug === "how-wifi-works"
  );

  return (
    <section className="bg-[#faf8f4] px-6 py-14 md:px-[8%] md:py-16">

      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT SIDE */}
        <div>

          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a77b58]"></span>

            <p className="text-[11px] uppercase tracking-[3px] text-[#98765b]">
              A little knowledge goes a long way
            </p>
          </div>

          <h1 className="max-w-2xl font-serif text-6xl font-normal leading-[1.08] tracking-tight text-[#29231f] sm:text-7xl md:text-8xl">
            The world is
            <br />
            more interesting
            <br />
            than you <span className="italic text-[#a77b58]">think.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-[#766d65]">
            From the invisible systems behind the internet
            to the intelligence inside your phone, discover
            the ideas that quietly shape everyday life.
          </p>

          <a
            href="#articles"
            className="mt-10 inline-flex items-center gap-4 border-b border-[#76563f] pb-2 text-sm font-medium text-[#76563f] transition-all hover:gap-6"
          >
            Explore the curious side
            <span>→</span>
          </a>

        </div>

        {/* RIGHT SIDE - FEATURED STORY */}
        {featuredArticle && (
          <div className="relative mx-auto w-full max-w-md">

            <Link
              to={`/articles/${featuredArticle.slug}`}
              className="group block"
            >

              <div className="bg-[#eae2d7] p-7  sm:p-10">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[3px] text-[#76563f]">
                    The curious file
                  </span>

                  <span className="font-serif text-sm italic text-[#98765b]">
                    No. {featuredArticle.number}
                  </span>
                </div>

                {/* Abstract signal illustration */}
                <div className="relative my-12 flex h-56 items-center justify-center overflow-hidden bg-[#dcd0c1]">

                  <div className="absolute h-40 w-40 rounded-full border border-[#a77b58]/50"></div>
                  <div className="absolute h-28 w-28 rounded-full border border-[#a77b58]/60"></div>
                  <div className="absolute h-16 w-16 rounded-full border border-[#76563f]/70"></div>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#76563f] text-xl text-white">
                    Wi
                  </div>

                  <span className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-[#a77b58]"></span>

                  <span className="absolute right-[20%] bottom-[24%] h-2 w-2 rounded-full bg-[#76563f]"></span>

                  <span className="absolute right-[25%] top-[18%] text-[10px] tracking-widest text-[#76563f]">
                    SIGNAL
                  </span>

                </div>

                <p className="mb-3 text-[10px] uppercase tracking-[2px] text-[#98765b]">
                  {featuredArticle.category} · {featuredArticle.readTime}
                </p>

                <h2 className="font-serif text-3xl leading-tight text-[#29231f] transition-colors group-hover:text-[#a77b58]">
                  {featuredArticle.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#766d65]">
                  {featuredArticle.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#cbbba9] pt-5">

                  <span className="text-xs text-[#76563f]">
                    FEATURED EXPLORATION
                  </span>

                  <span className="text-lg text-[#76563f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>

                </div>

              </div>

            </Link>

            <p className="mt-4 text-right text-[10px] uppercase tracking-[2px] text-[#a69a8e]">
              Curiosity starts here.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default Hero;
