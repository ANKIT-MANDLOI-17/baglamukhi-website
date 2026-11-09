import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Gallery", "#gallery"],
    ["Videos", "#videos"],

    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffaf2]/90 backdrop-blur-lg border-b border-amber-100">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
            🕉️
          </div>

          <div>
            <span className="block font-bold text-lg">Baglamukhi Mata Mandir</span>

            <p className="text-xs text-amber-700">Hawan & Anushthan</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm font-medium hover:text-amber-700 transition"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop Social Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/Bagla_marg_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="flex items-center gap-2 px-3 py-2.5 rounded-full border border-pink-200 text-pink-600 font-semibold hover:bg-pink-50 transition"
          >
            <span className="text-lg">📸</span>
            Instagram
          </a>

          {/* WhatsApp */}
          <button
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            <MessageCircle size={17} />
            WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-[#fffaf2] border-t border-amber-100">
          <nav className="container-custom py-5 flex flex-col gap-4">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="font-medium py-1 hover:text-amber-700 transition"
              >
                {name}
              </a>
            ))}

            {/* Instagram Mobile Link */}
            <a
              href="https://www.instagram.com/Bagla_marg_official/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-2 text-pink-600 font-semibold"
            >
              <span className="text-xl">📸</span>
              @Bagla_marg_official
            </a>

            {/* WhatsApp Mobile Button */}
            <button
              onClick={() => {
                setOpen(false);
                openWhatsApp();
              }}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              <MessageCircle size={19} />
              Book on WhatsApp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
