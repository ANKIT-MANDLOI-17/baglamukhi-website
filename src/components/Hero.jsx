
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { openWhatsApp, callPandit } from "../utils/whatsapp";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-120 pt-7 pb-4 lg:py-5 flex items-center overflow-hidden"
    >
      {/* Soft decorative background */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-12 md:py-16">

        {/* LEFT: Text and Booking Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🛕 जय माँ बगलामुखी • हवन • अनुष्ठान
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-[#3b2414]">
            Maa Baglamukhi
            <span className="block gold-text mt-2">
              Hawan & Anushthan
            </span>
          </h1>

          <p className="mt-5 text-xl md:text-2xl font-bold text-amber-800">
            With Pandit Trilok Joshi
          </p>

          <p className="mt-5 text-base md:text-lg text-stone-600 leading-8 max-w-xl">
            माँ बगलामुखी की आराधना, विशेष हवन एवं धार्मिक
            अनुष्ठानों के लिए पंडित त्रिलोक जोशी जी से संपर्क करें।
          </p>

          {/* Booking Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-green-200 hover:bg-green-600 hover:-translate-y-1 transition"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </button>

            <button
              onClick={callPandit}
              className="inline-flex items-center justify-center gap-2 bg-[#3b2414] text-white px-6 py-4 rounded-full font-bold hover:bg-[#54351f] hover:-translate-y-1 transition"
            >
              <Phone size={20} />
              Call Pandit Ji
            </button>
          </div>

          {/* Trust Information */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm text-stone-600">
            <span>🛕 Maa Baglamukhi Mandir</span>
            <span>🙏 सेवा एवं श्रद्धा</span>
          </div>
        </motion.div>

        {/* RIGHT: Mandir Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* Decorative frame behind photo */}
          <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-amber-300/60 via-orange-100 to-amber-200/60 rotate-2" />

          <div className="relative overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
            <img
              src="/images/baglamukhi-mandir.webp"
              alt="Maa Baglamukhi Mata Mandir, Nalkheda"
              fetchPriority="high"
              decoding="async"
              width={641}
              height={479}
              className="w-full h-75 sm:h-100 lg:h-120 xl:h-130 object-cover object-center"
            />

            {/* Caption over the bottom of the photo */}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent px-5 sm:px-7 pt-20 pb-6">
              <p className="text-amber-300 text-sm font-semibold tracking-wider">
                🛕 जय माँ बगलामुखी
              </p>

              <h2 className="text-white text-xl sm:text-2xl font-bold mt-2">
                Maa Baglamukhi Mata Mandir
              </h2>

              <p className="text-white/90 mt-1">
                Nalkheda, Madhya Pradesh
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Services */}
      {/* <div className="flex justify-center pb-5">
        <a
          href="#services"
          aria-label="Explore hawan and anushthan services"
          className="text-amber-800 animate-bounce"
        >
          <ArrowDown size={26} />
        </a>
      </div> */}
    </section>
  );
}

export default Hero;
