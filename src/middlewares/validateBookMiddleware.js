import { validateBook } from '../utils/validateBook.js';

export const validateBookMiddleware = (req, res, next) => {
  try {
    validateBook(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};