import { Router } from 'express';
import { getBooksFromJson,
  getBook,
  createNewBook,
  updateBookById,
  deleteBookById } from '../controllers/bookController.js';
import { validateBookMiddleware } from '../middlewares/validateBookMiddleware.js';


const router = Router();

router.get('/json_file', getBooksFromJson);
router.get('/book/:id', getBook);
router.post('/book', validateBookMiddleware, createNewBook);
router.put('/book/:id', validateBookMiddleware, updateBookById);
router.delete('/book/:id', deleteBookById);

export default router;