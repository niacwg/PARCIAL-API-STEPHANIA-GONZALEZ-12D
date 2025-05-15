import { readBooks } from '../services/bookService.js';

export const getBooksFromJson = async (req, res) => {
  try {
    const books = await readBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

import {
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../services/bookService.js';

export const getBook = async (req, res) => {
  const { id } = req.params;
  const book = await getBookById(id);
  if (!book) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(book);
};

export const createNewBook = async (req, res) => {
  try {
    const newBook = await createBook(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBookById = async (req, res) => {
  const { id } = req.params;
  const updated = await updateBook(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(updated);
};

export const deleteBookById = async (req, res) => {
  try {
    await deleteBook(req.params.id);
    res.status(204).send(); // No Content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};