
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const photos = [
  {
    src: "/images/trilokpandit4.webp",
    title: "Hawan Ceremony",
  },
  {
    src: "/images/trilokpandit3.webp",
    title: "Shatru Stambhan",
  },
  {
    src: "/images/trilokpandit9.webp",
    title: "Vyapar Vriddhi Hawan",
  },
  {
    src: "/images/trilokpandit6.jpg",
    title: "Negative Energy Nivaran",
  },
  {
    src: "/images/trilokpandit2.webp",
    title: "Baglamukhi Mahalaxmi Trimadhu Hawan",
  },
  {
    src: "/images/trilokpandit1.webp",
    title: "Puja Ceremony",
  },
  {
    src: "/images/trilokpandit8.webp",
    title: "Hawan and Anushthan",
  },
  {
    src: "/images/trilokpandit10.webp",
    title: "Religious Ceremony",
  },
];

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-amber-700 font-bold tracking-[3px] text-sm">
            GALLERY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Moments of
            <span className="gold-text"> Devotion</span>
          </h2>

          <p className="text-stone-600 mt-5 max-w-2xl mx-auto">
            Explore glimpses of Maa Baglamukhi's hawan, puja and
            traditional religious ceremonies.
          </p>
        </div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {visiblePhotos.map((photo, index) => (
              <motion.button
                layout
                key={photo.src}
                onClick={() => setSelected(photo)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 0 ? "md:row-span-2 md:col-span-2" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full min-h-55 object-cover
                   group-hover:scale-110 transition duration-700"
                />

                {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                  <p className="text-white font-bold p-5">
                    {photo.title}
                  </p>
                </div> */}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less */}
        {photos.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 text-white font-semibold shadow-md hover:bg-amber-700 hover:shadow-lg transition-all"
            >
              {showAll ? "Show Less" : "View More Photos"}

              <ArrowRight
                size={18}
                className={showAll ? "-rotate-90" : "rotate-0"}
              />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-5"
            onClick={() => setSelected(null)}
          >
            <button
              aria-label="Close image"
              className="absolute top-5 right-5 text-white"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selected.src}
              alt={selected.title}
              className="max-h-[90vh] max-w-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
