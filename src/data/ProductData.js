// src/data/ProductData.js

import CCCSS251 from '../assets/graphics/products/books/Cybernetics Cyberware and Cyborgs - Sumeet singh - front cover.png';
import CCCSS252 from '../assets/graphics/products/books/Cybernetics Cyberware and Cyborgs - Sumeet singh - back cover.png';
import CASS221 from '../assets/graphics/products/books/Cyborg Alphabet - Sumeet Singh - front cover.jpg';
import CASS222 from '../assets/graphics/products/books/Cyborg Alphabet - Sumeet Singh - back cover.jpg';

const ProductData = [
  {
    id: 1,
    name: "Cybernetics, Cyberware and Cyborgs",
    description: "A complete history of Cybernetics, Cyberware and Cyborgs",
    type: "Hardback",
    isbn: "TBD",
    publisher: "Sabrenetics",
    language: "English",
    format: "Hardback",
    price: 1,
    trim: "5 x 8 inch edition",
    pageCount: "TBD",
    publicationDate: "TBD",
    audience: "General",
    genre: "Non Fiction",
    images: [CCCSS251, CCCSS252]
  },
  {
    id: 2,
    name: "Cybernetics, Cyberware and Cyborgs",
    description: "A complete history of Cybernetics, Cyberware and Cyborgs",
    type: "eBook",
    isbn: "978-0-6456579-4-4",
    publisher: "Sabrenetics",
    language: "English",
    format: "EPUB",
    price: 2,
    pageCount: "TBD",
    publicationDate: "TBD",
    audience: "General",
    genre: "Non Fiction",
    images: [CCCSS251, CCCSS252]
  },
  {
    id: 3,
    name: "Cybernetics, Cyberware and Cyborgs",
    description: "A complete history of Cybernetics, Cyberware and Cyborgs",
    type: "Paperback",
    isbn: "978-0-6456579-2-0",
    publisher: "Sabrenetics",
    language: "English",
    format: "Paperback",
    price: 3,
    trim: "5 x 8 inch edition",
    pageCount: "TBD",
    publicationDate: "TBD",
    audience: "General",
    genre: "Non Fiction",
    images: [CCCSS251, CCCSS252]
  },
  {
    id: 4,
    name: "Cyborg Alphabet",
    description: "An alphabet on science for children",
    type: "Hardback",
    isbn: "978-0-6456579-0-6",
    publisher: "Sabrenetics",
    language: "English",
    format: "Hardback",
    price: 32.99,
    trim: "8.5 x 8.5 inch edition",
    pageCount: "36",
    publicationDate: "January 1st, 2023",
    audience: "Children",
    genre: "Non Fiction",
    images: [CASS221, CASS222]
  },
  {
    id: 5,
    name: "Cyborg Alphabet",
    description: "An alphabet on science for children",
    type: "eBook",
    isbn: "978-0-6456579-1-3",
    publisher: "Sabrenetics",
    language: "English",
    format: "EPUB",
    price: 2.99,
    pageCount: "36",
    publicationDate: "January 1st, 2023",
    audience: "Children",
    genre: "Non Fiction",
    images: [CASS221, CASS222]
  },
  {
    id: 6,
    name: "Cyborg Alphabet",
    description: "An alphabet on science for children",
    type: "Paperback",
    isbn: "978-0-6456579-2-0",
    publisher: "Sabrenetics",
    language: "English",
    format: "Paperback",
    price: 6,
    trim: "8.5 x 8.5 inch edition",
    pageCount: "TBD",
    publicationDate: "TBD",
    audience: "Children",
    genre: "Non Fiction",
    images: [CASS221, CASS222]
  }
];

export default ProductData;
