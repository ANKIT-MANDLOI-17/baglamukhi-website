import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { openWhatsApp } from "../utils/whatsapp";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-amber-700 font-bold tracking-[3px] text-sm">
            BAGLAMUKHI MATA MANDIR
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Types of Baglamukhi
            <span className="gold-text"> Hawan & Anushthan</span>
          </h2>

          <p className="text-stone-600 mt-5">
            माँ बगलामुखी की आराधना से संबंधित विभिन्न हवन एवं अनुष्ठान पारंपरिक
            धार्मिक विधि एवं श्रद्धा के साथ।
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-amber-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold">{service.title}</h3>

              <p className="text-amber-700 text-sm mt-1 font-medium">
                {service.hindiTitle}
              </p>

              <p className="text-stone-600 leading-7 mt-4">
                {service.description}
              </p>

              <div className="flex justify-between items-center mt-7 pt-5 border-t border-stone-100">
                <span className="font-bold">{service.price}</span>

                <button
                  onClick={() => openWhatsApp(service.title)}
                  className="flex items-center gap-1 text-amber-700 font-bold group-hover:gap-2 transition-all"
                >
                  Book
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / Show Less */}
        {services.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 text-white font-semibold shadow-md hover:bg-amber-700 hover:shadow-lg transition-all"
            >
              {showAll ? "Show Less" : "See More Hawan & Anushthan"}

              <ArrowRight
                size={18}
                className={showAll ? "-rotate-90" : "rotate-0"}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
