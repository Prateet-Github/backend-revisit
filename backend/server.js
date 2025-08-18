import dotenv from 'dotenv';
import connectDB from './db/db.js';
import express from 'express';

dotenv.config({
  path: './.env',
});

const app = express();

connectDB()
.then(() => {
  app.listen(process.env.PORT || 5001, () => {
    console.log(`Server is running on port ${process.env.PORT || 5001}`);
  });
})
.catch((error) => {
  console.error('Database connection failed:', error);
});

// const app = express();

