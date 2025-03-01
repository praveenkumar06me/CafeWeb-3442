import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl text-cafe-brown text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="font-playfair text-2xl text-cafe-brown mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-cafe-accent mr-4" />
                <span className="font-lato">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-cafe-accent mr-4" />
                <span className="font-lato">info@cafedelight.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-cafe-accent mr-4" />
                <span className="font-lato">123 Coffee Street, Brewville, BW 12345</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-playfair text-xl text-cafe-brown mb-4">Hours</h3>
              <div className="font-lato space-y-2">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="font-playfair text-2xl text-cafe-brown mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block font-lato text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-lato text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-lato text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cafe-brown text-white font-lato py-2 px-6 rounded hover:bg-cafe-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;