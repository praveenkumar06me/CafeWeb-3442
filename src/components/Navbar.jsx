import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FaCoffee className="h-8 w-8 text-cafe-brown" />
            <span className="ml-2 font-playfair text-xl font-bold text-cafe-brown">Café Delight</span>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-lato text-gray-700 hover:text-cafe-brown transition-colors">Home</Link>
            <Link to="/menu" className="font-lato text-gray-700 hover:text-cafe-brown transition-colors">Menu</Link>
            <Link to="/contact" className="font-lato text-gray-700 hover:text-cafe-brown transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;