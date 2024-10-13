import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDrumstickBite, faCoffee, faCandyCane, faCarrot } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'; 

const Menu = () => {
  const menuItems = [
    {
      category: 'Vegetarian',
      items: [
        { name: 'Paneer Tikka', price: '$8' },
        { name: 'Veg Biryani', price: '$10' },
        { name: 'Mixed Salad', price: '$5' },
      ],
      icon: faLeaf,
    },
    {
      category: 'Salad',
      items: [
        { name: 'Greek Salad', price: '$6' },
        { name: 'Caesar Salad', price: '$7' },
        { name: 'Fruit Salad', price: '$4' },
      ],
      icon: faCarrot,
    },
    {
      category: 'Sweets',
      items: [
        { name: 'Gulab Jamun', price: '$4' },
        { name: 'Rasgulla', price: '$3' },
        { name: 'Kheer', price: '$5' },
      ],
      icon: faCandyCane,
    },
    {
      category: 'Non-Vegetarian',
      items: [
        { name: 'Chicken Curry', price: '$12' },
        { name: 'Mutton Biryani', price: '$15' },
        { name: 'Fish Fry', price: '$14' },
      ],
      icon: faDrumstickBite,
    },
    {
      category: 'Shakes',
      items: [
        { name: 'Chocolate Shake', price: '$6' },
        { name: 'Mango Lassi', price: '$5' },
        { name: 'Vanilla Shake', price: '$6' },
      ],
      icon: faCoffee,
    },
    {
      category: 'Special',
      items: [
        { name: 'Special Thali', price: '$20' },
        { name: 'Maharaja Thali', price: '$18' },
        { name: 'Seafood Platter', price: '$20' },
      ],
      icon: faDrumstickBite,
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-categories">
        {menuItems.slice(0, 3).map((menuCategory, index) => (
          <motion.div
            key={index}
            className="menu-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>
              <FontAwesomeIcon icon={menuCategory.icon} /> {menuCategory.category}
            </h3>
            <ul>
              {menuCategory.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  whileHover={{ scale: 1.05, color: '#28a745' }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name} - <span>{item.price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="menu-categories">
        {menuItems.slice(3).map((menuCategory, index) => (
          <motion.div
            key={index}
            className="menu-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>
              <FontAwesomeIcon icon={menuCategory.icon} /> {menuCategory.category}
            </h3>
            <ul>
              {menuCategory.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  whileHover={{ scale: 1.05, color: '#28a745' }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name} - <span>{item.price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;



