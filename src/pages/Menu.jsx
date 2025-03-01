import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with steamed milk' },
    { name: 'Americano', price: '$3.75', description: 'Espresso with hot water' },
  ],
  pastries: [
    { name: 'Croissant', price: '$3.25', description: 'Buttery and flaky' },
    { name: 'Chocolate Muffin', price: '$3.50', description: 'Rich chocolate flavor' },
    { name: 'Cinnamon Roll', price: '$4.00', description: 'Fresh baked daily' },
    { name: 'Apple Danish', price: '$3.75', description: 'Sweet and fruity' },
  ],
};

const Menu = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl text-cafe-brown text-center mb-12"
        >
          Our Menu
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-playfair text-2xl text-cafe-brown mb-6">Coffee</h2>
            <div className="space-y-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-lato font-bold text-gray-800">{item.name}</h3>
                    <span className="font-lato text-cafe-accent">{item.price}</span>
                  </div>
                  <p className="font-lato text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-playfair text-2xl text-cafe-brown mb-6">Pastries</h2>
            <div className="space-y-6">
              {menuItems.pastries.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-lato font-bold text-gray-800">{item.name}</h3>
                    <span className="font-lato text-cafe-accent">{item.price}</span>
                  </div>
                  <p className="font-lato text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;