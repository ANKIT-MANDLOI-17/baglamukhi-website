import { motion } from "framer-motion";

const videos = [
  {
    title: "Baglamukhi Mahalaxmi Trimadhu Hawan",
    id: "d-7qYhQvg9k",
  },
  {
    title: "Vishesh Aakarshan & Vashikaran Hawan Prayog",
    id: "NV3OIsge_us",
  },
  {
    title: "Hawana",
    id: "fsTZEtBhIrk",
  },
];

function VideoSection() {
  return (
    <section id="videos" className="section-padding bg-[#3b2414] text-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          {/* <p className="text-amber-400 font-bold tracking-[3px] text-sm">
            VIDEOS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            See Our
            <span className="text-amber-400">
              {" "}Puja Ceremonies
            </span>
          </h2> */}

          <p className="text-amber-400 font-bold tracking-[3px] text-sm">
            BAGLAMUKHI MATA MANDIR
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Hawan & Anushthan
            <span className="text-amber-400"> Videos</span>
          </h2>

          <p className="text-stone-300 mt-5 max-w-2xl mx-auto">
            माँ बगलामुखी मंदिर में होने वाले हवन, अनुष्ठान एवं धार्मिक
            कार्यक्रमों की झलक।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-2xl overflow-hidden bg-white/10"
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <div className="p-4">
                <h3 className="font-bold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
