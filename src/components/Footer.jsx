import {  MapPin } from "lucide-react";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Hawan & Anushthan", href: "#services" },
    { label: "About Pandit Ji", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Videos", href: "#videos" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Baglamukhi Mahalaxmi Trimadhu Hawan",
    "Vishesh Aakarshan & Vashikaran Hawan",
    "Shatru Ucchatan & Vidveshan Prayog",
    "Shatru Stambhan",
    "Special Baglamukhi Anushthan",
  ];

  return (
    <footer className="bg-[#24150b] text-white py-10">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                🕉️
              </div>

              <div>
                <h3 className="font-bold text-lg">Pandit Trilok Joshi</h3>

                <p className="text-xs text-amber-400 mt-1">
                  Maa Baglamukhi Hawan & Anushthan
                </p>
              </div>
            </div>

            <p className="text-stone-400 mt-5 leading-7">
              Traditional Maa Baglamukhi puja, hawan and religious anushthan
              services performed with devotion, श्रद्धा and respect for
              tradition.
            </p>

            <a
              href="https://www.instagram.com/Bagla_marg_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-amber-400 hover:text-amber-300 transition"
            >
              <span className="text-lg">📸</span>
              Follow on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-stone-400">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-amber-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services & Location */}
          <div>
            <h3 className="font-bold text-lg mb-5">Hawan & Anushthan</h3>

            <div className="flex flex-col gap-3 text-stone-400">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="hover:text-amber-400 transition"
                >
                  {service}
                </a>
              ))}
            </div>

            <a
              href="https://maps.app.goo.gl/kShgJgBkHRcr7QE46?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-amber-400 hover:text-amber-300 transition"
            >
              <MapPin size={18} />
              Maa Baglamukhi Mandir, Nalkheda
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-stone-500 text-sm">
          © {new Date().getFullYear()} Pandit Trilok Joshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
