import { Router } from 'express'

import projectController from '../controllers/projectController';

const router = new Router();

// Listar projects
router.get(['/', '/index'], projectController.index);

// Add projects
// send form to register project idea
router.get('/add', projectController.add);

// Procesa el formulario para agregar ideas de projectos
router.post('/add ', projectController.addProject);

export default router;