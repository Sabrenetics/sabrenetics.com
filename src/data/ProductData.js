// src/data/ProductData.js

import id1a from '../assets/graphics/products/books/1a.png';
import id1b from '../assets/graphics/products/books/1b.png';
import id2a from '../assets/graphics/products/books/2a.png';
import id2b from '../assets/graphics/products/books/2b.png';
import id3a from '../assets/graphics/products/books/3a.png';
import id3b from '../assets/graphics/products/books/3b.png';
import id4a from '../assets/graphics/products/books/4a.jpg';
import id4b from '../assets/graphics/products/books/4b.jpg';
import id5a from '../assets/graphics/products/books/5a.jpg';
import id5b from '../assets/graphics/products/books/5b.jpg';
import id6a from '../assets/graphics/products/books/6a.jpg';
import id6b from '../assets/graphics/products/books/6b.jpg';

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
    images: [id1a, id1b]
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
    images: [id2a, id2b]
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
    images: [id3a, id3b]
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
    images: [id4a, id4b]
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
    images: [id5a, id5b]
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
    images: [id6a, id6b]
  }
];

export default ProductData;
