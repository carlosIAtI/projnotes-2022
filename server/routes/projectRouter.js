import { Router } from 'express'

import projectController from '../controllers/projectController';

const router = new Router();

// Listar projects
router.get(['/', '/index'], projectController.index);

// Add projectsSS
router.get('/add', projectController.add);


export default router;