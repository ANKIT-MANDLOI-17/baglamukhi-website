
import { motion } from "framer-motion";
import { CheckCircle, Award, Home, Heart } from "lucide-react";

function About() {
  const points = [
    {
      icon: Award,
      title: "Traditional Rituals",
      text: "Maa Baglamukhi puja and hawan ceremonies",
    },
    {
      icon: Home,
      title: "Hawan Services",
      text: "Information about available rituals and bookings",
    },
    {
      icon: Heart,
      title: "Devotion",
      text: "Every ceremony performed with श्रद्धा",
    },
    {
      icon: CheckCircle,
      title: "Tantrik Traditions",
      text: "Rituals following traditional procedures",
    },
  ];

  return (
    <section id="about" className="section-padding bg-amber-50/60">
      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Pandit Trilok Joshi Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:justify-start pb-6"
        >
          <div className="absolute inset-5 bg-amber-200/60 rounded-[35px] rotate-3" />

          <img
            src="/images/Trilok_DP.webp"
            alt="Pandit Trilok Joshi"
            loading="lazy"
            decoding="async"
            width={1023}
            height={946}
            className="relative w-full max-w-md h-105 md:h-130 object-cover object-center rounded-[30px] border-4 border-white shadow-xl"
          />

          {/* Pandit Name Card */}
          <div className="absolute bottom-0 left-4 md:left-8 bg-white shadow-xl rounded-2xl p-5">
            <p className="text-sm text-amber-700 font-semibold">
              YOUR PANDIT
            </p>

            <p className="text-xl font-bold text-stone-900 mt-1">
              Pandit Trilok Joshi
            </p>

            <p className="text-sm text-stone-500 mt-1">
              बगलामुखी हवन अनुष्ठान एवं तंत्र प्रयोग विशेषज्ञ
            </p>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber-700 font-bold tracking-[3px] text-sm">
            ABOUT THE PANDIT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-[#3b2414]">
            Pandit Trilok Joshi
            <span className="block gold-text mt-2">
              Maa Baglamukhi Ki Seva & Sadhana
            </span>
          </h2>

          <p className="mt-6 text-stone-600 leading-8">
            पंडित त्रिलोक जोशी जी माँ बगलामुखी की आराधना से संबंधित
            पारंपरिक हवन, पूजा एवं धार्मिक अनुष्ठानों के लिए भक्तों
            को मार्गदर्शन प्रदान करते हैं।
          </p>

          <p className="mt-4 text-stone-600 leading-8">
            भक्त अपनी आवश्यकता एवं धार्मिक मान्यताओं के अनुसार
            उपलब्ध अनुष्ठानों की जानकारी और बुकिंग के लिए
            पंडित त्रिलोक जोशी जी से संपर्क कर सकते हैं।
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Icon size={19} className="text-amber-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#3b2414]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-stone-500 mt-1 leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
