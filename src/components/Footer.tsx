import { motion } from 'framer-motion';
import image1 from "../../img/address.png"

const Footer = () => {
  const handleLocationClick = () => {
    // Google Maps URL for Dinara, Rohtas, Bihar
    const locationUrl = "https://www.google.com/maps/search/?api=1&query=Dinara,Rohtas,Bihar";
    window.open(locationUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              {/* Logo Image */}
              <div className="w-14 h-14 mr-3">
                <img
                  src={image1}
                  alt="Starway International School Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">Starway</h3>
                <h3 className="text-xl font-bold leading-tight">International</h3>
                <h3 className="text-xl font-bold leading-tight">School</h3>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Established in 2008 | Affiliated to CBSE
              <br />
              Providing quality education and empowering students for a bright future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-lg border-b-2 border-accent-raspberry inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> About Us
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Admissions
                </a>
              </li>
              <li>
                <a href="/academics" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Academics
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Facilities
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info with Cropped Map Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-semibold mb-4 text-lg border-b-2 border-accent-raspberry inline-block pb-2">
              Find Us Here
            </h4>

            {/* Contact Details - Compact */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-gray-400 text-sm">
              <div className="flex items-center">
                <span className="mr-2 text-accent-papaya">📍</span>
                <span>Dinara, Rohtas, Bihar</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-accent-papaya">📞</span>
                <span>+91 8809617265</span>
              </div>
              <div className="flex items-center col-span-2">
                <span className="mr-2 text-accent-papaya">✉️</span>
                <a href="mailto:rajeshkumarverma95818@gmail.com" className="hover:text-white transition-colors truncate">
                  rajeshkumarverma95818@gmail.com
                </a>
              </div>
            </div>

            {/* Professional Cropped Location Map Image */}
            <button
              onClick={handleLocationClick}
              className="relative w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer"
            >
              {/* Cropped Image Container */}
              <div className="relative w-full h-96 md:h-[450px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src="../../img/Screenshot 2026-06-05 at 9.42.30 PM copy.png"
                  alt="Starway International School Location Map - Dinara, Rohtas, Bihar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{
                    objectPosition: 'center 50%', /* Adjust this to crop/focus on the right area */
                  }}
                />

                {/* Gradient Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Location Pin Overlay - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-md rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
                    <svg className="w-10 h-10 text-accent-raspberry" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Info Bar with School Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-4">
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm md:text-base mb-1">
                      📍 Starway International School, Dinara
                    </p>
                    <p className="text-accent-papaya text-xs md:text-sm font-medium">
                      Prakhand: Dinara | District: Rohtas | Sasaram, Bihar
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-white text-xs">Click to open in Google Maps</span>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner Accents for Professional Look */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent-raspberry opacity-60 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent-raspberry opacity-60 rounded-br-xl" />
              </div>
            </button>

            {/* Additional Location Info */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                {/* 🚗 Easily accessible location • 🅿️ Parking available • 📍 PIN: 802213 */}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Starway International School. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;