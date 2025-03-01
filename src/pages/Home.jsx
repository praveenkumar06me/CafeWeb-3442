import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] 
          bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="h-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="font-playfair text-5xl text-white mb-4">Welcome to Café Delight</h1>
                <p className="font-lato text-xl text-cafe-cream">Experience the perfect blend of comfort and taste</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="font-playfair text-3xl text-cafe-brown mb-4">Our Story</h2>
              <p className="font-lato text-gray-700">
                Founded with a passion for exceptional coffee and a warm atmosphere, 
                Café Delight has been serving the community with carefully crafted beverages 
                and delicious treats. Our commitment to quality and service makes every visit special.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl text-cafe-brown mb-4">Why Choose Us</h2>
              <ul className="font-lato text-gray-700 space-y-2">
                <li>✓ Premium quality coffee beans</li>
                <li>✓ Skilled baristas</li>
                <li>✓ Cozy atmosphere</li>
                <li>✓ Fresh pastries daily</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;