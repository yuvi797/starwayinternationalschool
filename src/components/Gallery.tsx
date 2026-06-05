import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../../img/photo_6107264399530725526_y.jpg';
import image2 from '../../img/photo_6107264399530725531_y.jpg';
import image3 from '../../img/photo_6107264399530725535_y.jpg';
import image4 from '../../img/photo_6107264399530725531_y.jpg';

const images = [
  {
    src: image1,
    alt: 'Students engaged in creative classroom activities'
  },
  {
    src: image2,
    alt: 'Interactive learning session with teachers'
  },
  {
    src: image3,
    alt: 'School event and cultural celebration'
  },
  {
    src: image4,
    alt: 'Students participating in group discussion'
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-neutral-light" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Life at Our School
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-medium">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}