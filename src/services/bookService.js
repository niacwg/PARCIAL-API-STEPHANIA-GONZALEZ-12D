import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/Book.js'; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const readBooks = async () => {
  const dataPath = path.join(__dirname, '../db/books.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data);
};


export const getBookById = async (id) => {
  const books = await readBooks();
  return books.find((b) => b.id === id);
};

export const createBook = async (newData) => {
  const books = await readBooks();
  const newBook = new Book({ id: uuidv4(), ...newData });
  books.push(newBook);

  const dataPath = path.join(__dirname, '../db/books.json');
  await fs.writeFile(dataPath, JSON.stringify(books, null, 2));
  return newBook;
};

export const updateBook = async (id, updatedData) => {
  const books = await readBooks();
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;

  books[index] = new Book({ ...books[index], ...updatedData });

  const dataPath = path.join(__dirname, '../db/books.json');
  await fs.writeFile(dataPath, JSON.stringify(books, null, 2));
  return books[index];
};

export const deleteBook = async (id) => {
  const books = await readBooks();
  const newBooks = books.filter((b) => b.id !== id);

  const dataPath = path.join(__dirname, '../db/books.json');
  await fs.writeFile(dataPath, JSON.stringify(newBooks, null, 2));
};