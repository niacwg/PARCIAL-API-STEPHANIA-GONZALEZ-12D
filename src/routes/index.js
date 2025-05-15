import { Router } from 'express';
import bookRoutes from './bookRoutes.js';
import externalRoutes from './externalRoutes.js';

const router = Router();

router.use('/', bookRoutes);
router.use('/', externalRoutes);


export default router;