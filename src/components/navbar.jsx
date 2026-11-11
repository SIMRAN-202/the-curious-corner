
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Discover", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative z-50 border-b border-[#e8e0d6] bg-[#faf8f4] px-6 py-5 md:px-[8%] md:py-6">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="whitespace-nowrap font-serif text-2xl tracking-tight text-[#29231f] md:text-[27px]"
        >
          The Curious Corner
          <span className="text-[#a77b58]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[13px] text-[#766d65] transition-colors duration-300 hover:text-[#a77b58]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-[#76563f] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-[#e8e0d6] bg-[#faf8f4] px-6 py-7 shadow-sm md:hidden">

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#766d65] transition-colors hover:text-[#a77b58]"
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
}

export default Navbar;
