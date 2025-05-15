import { Router } from 'express';
import { handleDownloadCSV } from '../controllers/externalController.js';

const router = Router();

router.get('/data_externa', handleDownloadCSV);

export default router;