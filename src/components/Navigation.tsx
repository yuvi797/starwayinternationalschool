import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp redirect function
  const handleApplyNow = () => {
    const phoneNumber = "918809617265"; // Added country code 91 for India
    const message = "Hello, I'm interested in applying for admission at Starway International School. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Brand Section */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/img/e99d54cd-6fcb-424f-9042-55047a2e447a copy.jpeg"
              alt="Starway International School Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-accent-raspberry hidden sm:inline-block">
                Starway International School
              </span>
              <span className="text-sm text-gray-600 hidden sm:inline-block">
                Est. 2008 | Affiliated to CBSE, New Delhi
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#key-info">Programs</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyNow}
              className="bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white px-6 py-2 rounded-full hover:from-accent-vermilion hover:to-accent-raspberry transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-accent-raspberry mb-1.5"></div>
            <div className="w-6 h-0.5 bg-accent-raspberry mb-1.5"></div>
            <div className="w-6 h-0.5 bg-accent-raspberry"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
                  Features
                </MobileNavLink>
                <MobileNavLink href="#key-info" onClick={() => setIsOpen(false)}>
                  Programs
                </MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </MobileNavLink>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApplyNow}
                  className="w-full bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white px-6 py-2 rounded-full hover:from-accent-vermilion hover:to-accent-raspberry transition-all duration-300 shadow-md"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Director and Principal Profile Component with Auto-slider
export function LeadershipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Rajesh Kumar Verma",
      title: "Director & Advocate",
      image: "/img/photo_6111579295474978460_y.jpg",
      description: "An esteemed advocate and visionary leader with over 20 years of experience in education. Committed to providing quality education and holistic development for every child."
    },
    {
      id: 2,
      name: "Principal",
      title: "Principal",
      image: "/img/photo_6111579295474978461_y.jpg",
      description: "A dedicated educationist passionate about nurturing young minds and fostering academic excellence. Focused on creating a supportive and innovative learning environment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [leaders.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">

          <div className="w-24 h-1 bg-gradient-to-r from-accent-raspberry to-accent-vermilion mx-auto mt-4 rounded-full"></div>
        </h2>

        {/* School Info Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-accent-raspberry font-semibold">📅 Est. 2008</span>
            <span className="text-gray-300">|</span>
            <span className="text-accent-raspberry font-semibold">🎓 Affiliated to CBSE, New Delhi</span>
            <span className="text-gray-300">|</span>
            <span className="text-accent-raspberry font-semibold">🏆 Excellence in Education</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-raspberry to-accent-vermilion rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={leaders[currentIndex].image}
                      alt={leaders[currentIndex].name}
                      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {leaders[currentIndex].name}
                    </h3>
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-accent-raspberry to-accent-vermilion text-white rounded-full text-sm font-semibold mb-4">
                      {leaders[currentIndex].title}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {leaders[currentIndex].description}
                  </p>

                  <div className="space-y-3 pt-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <svg className="w-5 h-5 text-accent-raspberry" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>contact@starwayinternational.edu</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <svg className="w-5 h-5 text-accent-raspberry" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+91 88096 17265</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {leaders.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${currentIndex === index
                  ? 'w-8 h-2 bg-accent-raspberry rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-primary hover:text-accent-raspberry transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-primary hover:text-accent-raspberry transition-colors font-medium"
    >
      {children}
    </a>
  );
}