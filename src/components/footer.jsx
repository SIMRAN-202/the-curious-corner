
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#29231f] px-6 pb-8 pt-16 text-[#faf8f4] md:px-[8%] md:pt-20">
      <div className="mx-auto max-w-7xl">

        {/* TOP SECTION */}
        <div className="grid gap-12 border-b border-[#ffffff]/15 pb-14 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-tight md:text-4xl"
            >
              The Curious Corner
              <span className="text-[#c49a76]">.</span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-[#c2b7ac]">
              A little corner of the internet for big ideas,
              interesting questions and the joy of understanding
              how things work.
            </p>

            <p className="mt-8 font-serif text-xl italic text-[#c49a76]">
              Stay curious. Always.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-7 text-[11px] uppercase tracking-[2.5px] text-[#c49a76]">
              Explore
            </h3>

            <div className="flex flex-col gap-5 text-sm text-[#c2b7ac]">
              <Link to="/" className="transition-colors hover:text-white">
                Discover
              </Link>

              <Link to="/articles" className="transition-colors hover:text-white">
                Articles
              </Link>

              <Link to="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </div>
          </div>

          {/* TOPICS */}
          <div>
            <h3 className="mb-7 text-[11px] uppercase tracking-[2.5px] text-[#c49a76]">
              The little things
            </h3>

            <div className="flex flex-col gap-5 text-sm text-[#c2b7ac]">
              <p>Internet & Networks</p>
              <p>Computer Science</p>
              <p>Artificial Intelligence</p>
              <p>Everyday Technology</p>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-[#a99b8e] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} The Curious Corner. All rights reserved.
          </p>

          <p className="font-serif text-sm italic tracking-wide">
            Made for the endlessly curious.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
