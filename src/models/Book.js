export class Book {
  constructor({ id, title, author, year, genre }) {
    if (!title || !author) {
      throw new Error('Title and author are required');
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year || null;
    this.genre = genre || null;
  }
}