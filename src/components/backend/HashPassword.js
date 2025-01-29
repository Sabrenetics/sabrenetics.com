// src/components/backend/HashPassword.js

// When AccountForm.js is used to change a password or SignUpForm.js creates a new account password for the first time,
// this file hashes the password using bcryptjs to produce a secure hashed string (e.g., const storedHash = '$2a$10$KIX8eU0FgXq0ZoFl9bZyPejG72pFV88hMvh3l9pkOEPdyEQ.9c1yG').
// No one can decipher this hashed string back into the original password.
// When LoginForm.js is used to log in, the user enters the known password, which uses DecipherHash.js to compare with the storedHash using bcryptjs.compare().
// If the password is correct, the user can log in.

const bcrypt = require('bcryptjs');

const password = 'Password1!';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
