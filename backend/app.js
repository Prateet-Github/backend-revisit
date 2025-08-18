import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// Middleware to handle CORS

app.use(cors(
  {
    origin:process.env.CORS_ORIGIN,
    credentials: true
  }
))

// Middleware to parse JSON data

app.use(express.json({
  limit: '50mb'
}));

// Middleware to parse URL-encoded data

app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}));

// Middleware to serve static files

app.use(express.static('public'));

// Middleware to parse cookies

app.use(cookieParser());

export default app;