import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/Book.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../db/books.json');
const parseBooks = (booksArray) => booksArray.map(bookData => new Book(bookData));

export const getAllBooks = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  const booksArray = JSON.parse(data);
  return parseBooks(booksArray);
};

export const getBookById = async (id) => {
  const books = await getAllBooks();
  return books.find((b) => b.id === id);
};

export const createBook = async (bookData) => {
  const books = await getAllBooks();
  const newBook = { id: uuidv4(), ...bookData };
  books.push(newBook);
  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return newBook;
};

export const updateBook = async (id, bookData) => {
  const books = await getAllBooks();
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...bookData };
  await fs.writeFile(filePath, JSON.stringify(books, null, 2));
  return books[index];
};

export const deleteBook = async (id) => {
  const books = await getAllBooks();
  const filtered = books.filter((b) => b.id !== id);
  await fs.writeFile(filePath, JSON.stringify(filtered, null, 2));
};
