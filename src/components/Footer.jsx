import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-playfair text-xl">Café Delight</h3>
            <p className="font-lato">Serving happiness since 2024</p>
          </div>
          <div className="flex space-x-6">
            <FaFacebook className="h-6 w-6 hover:text-cafe-cream cursor-pointer transition-colors" />
            <FaInstagram className="h-6 w-6 hover:text-cafe-cream cursor-pointer transition-colors" />
            <FaTwitter className="h-6 w-6 hover:text-cafe-cream cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;