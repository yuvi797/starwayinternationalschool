import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Rajesh Kumar Verma",
      title: "Director & Advocate",
      image: "/img/photo_6111579295474978460_y copy.jpg",
      description: "Leading with vision and excellence"
    },
    {
      id: 2,
      name: "Principal",
      title: "Principal",
      image: "/img/photo_6111579295474978461_y copy.jpg",
      description: "Dedicated to nurturing young minds"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [leaders.length]);

  // WhatsApp redirect function
  const handleApplyNow = () => {
    const phoneNumber = "918809617265";
    const message = "Hello, I'm interested in applying for admission at Starway International School. Can you please provide more information about the admission process?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-auto min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-raspberry/90 via-accent-vermilion/80 to-accent-papaya/70" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
            Welcome to Starway International School
          </h1>

          {/* School Info Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
              📅 Est. 2008
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
              🎓 Affiliated to CBSE
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
              📍 Dinara, Rohtas, Bihar
            </span>
          </div>

          <p className="text-base md:text-lg mb-2 max-w-2xl mx-auto text-white/90 drop-shadow">
            Nurturing minds, building futures, and creating leaders of tomorrow
          </p>

          {/* <p className="text-xs mb-5 text-white/80 drop-shadow">
            📮 PIN Code: 802213
          </p> */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplyNow}
            className="bg-white text-accent-raspberry font-bold py-2 px-6 rounded-full text-sm hover:bg-accent-papaya transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* Leadership Slider Section - Compact Size */}
        <div className="mt-4 pb-6">
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex items-center gap-3 p-3">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={leaders[currentIndex].image}
                      alt={leaders[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent-raspberry shadow-sm"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 text-left">
                    <h3 className="text-sm font-bold text-primary">
                      {leaders[currentIndex].name}
                    </h3>
                    <div className="inline-block px-2 py-0.5 bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white rounded-full text-xs font-semibold mb-1">
                      {leaders[currentIndex].title}
                    </div>
                    <p className="text-gray-700 text-xs">
                      {leaders[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-1.5 mt-3">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${currentIndex === index
                    ? 'w-4 h-1 bg-white rounded-full'
                    : 'w-1 h-1 bg-white/50 rounded-full'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}