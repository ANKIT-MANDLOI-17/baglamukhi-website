import { Phone, MessageCircle, MapPin } from "lucide-react";
import { openWhatsApp, callPandit } from "../utils/whatsapp";

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="bg-[#3b2414] rounded-[35px] overflow-hidden text-white grid lg:grid-cols-2">
          {/* Contact Content */}
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-amber-400 font-bold tracking-[3px] text-sm">
              CONTACT PANDIT JI
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Pandit Trilok Joshi
              <span className="block text-amber-400 mt-2">Book Your Puja</span>
            </h2>

            <p className="text-stone-300 mt-6 leading-8">
              माँ बगलामुखी के हवन, पूजा एवं धार्मिक अनुष्ठानों की जानकारी और
              बुकिंग के लिए पंडित त्रिलोक जोशी जी से WhatsApp या फोन पर संपर्क
              करें।
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mt-8">
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-sm text-stone-400">Phone</p>
                  <p className="font-bold">+917024823197</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm text-stone-400">Service Area</p>
                  <p className="font-bold">Nalkheda, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 mt-10">
              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-600 transition"
              >
                <MessageCircle size={19} />
                WhatsApp
              </button>

              <button
                onClick={callPandit}
                className="flex items-center gap-2 bg-white text-[#3b2414] px-6 py-3 rounded-full font-bold hover:bg-amber-100 transition"
              >
                <Phone size={19} />
                Call Now
              </button>

              <a
                href="https://www.instagram.com/Bagla_marg_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Pandit Trilok Joshi on Instagram"
                className="flex items-center gap-2 bg-linear-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition"
              >
                <span className="text-lg">📸</span>
                Instagram
              </a>
            </div>
          </div>

          {/* Location Map */}

          {/* Location Map */}
          <div className="min-h-87.5 lg:min-h-full bg-[#4a3020] flex flex-col">
            <iframe
              title="Maa Baglamukhi Mandir Nalkheda - Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.359341773344!2d76.23300937439465!3d23.841370385279607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b901c8a0cdbd%3A0x274100159f28e55e!2sMaa%20Baglamukhi%20Mandir%20Nalkheda!5e0!3m2!1sen!2sin!4v1792153456634!5m2!1sen!2sin"
              className="w-full h-87.5 lg:h-full min-h-87.5 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white">
                Maa Baglamukhi Mandir
              </h3>

              <p className="text-stone-300 mt-2">Nalkheda, Madhya Pradesh</p>

              <p className="text-amber-300 font-medium mt-1">
                Pandit Trilok Joshi
              </p>

              <a
                href="https://maps.app.goo.gl/kShgJgBkHRcr7QE46?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 rounded-full bg-amber-500 px-6 py-3 text-[#3b2414] font-bold hover:bg-amber-400 transition"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
