// src/data/ProductData.js

import CCCSS251 from '../assets/graphics/products/books/Cybernetics Cyberware and Cyborgs - Sumeet singh - front cover.png';
import CASS221 from '../assets/graphics/products/books/Cyborg Alphabet - Sumeet Singh - Front cover.jpg';

const ProductData = [
  {
    id: "1",
    name: "Cybernetics, Cyberware and Cyborgs",
    price: 10,
    description: "A combined C++ 2D Game Engine with a built-in feature-rich demonstration 2D game.",
    ProductDetails: {
      os: [
        "Windows 10, 11",
        "MacOS 13 - 14",
        "Ubuntu 22.04 - 24.04"
      ],
      processor: "at least a Core i3 or AMD CPU equivalent",
      ram: "4 GB RAM",
      graphics: "at least a HD compatible CPU/GPU",
      storage: "5 GB Free"
    },
    images: [
      CCCSS251,
      // CCCSS252
    ]
  },
  {
    id: "2",
    name: "Cyborg Alphabet",
    price: 15,
    description: "A modern gameboy highest score reaching game for all retro enthusiasts",
    ProductDetails: {
      os: [
        "Gameboy Color"
      ],
      processor: "Gameboy Color",
      ram: "Gameboy Color",
      graphics: "Gameboy Color",
      storage: "4 MBs"
    },
    images: [
      CASS221,
      // CASS222
    ]
  },
  // Add more items as necessary
];

export default ProductData;
