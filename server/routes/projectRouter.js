import { Router } from 'express'
// Validate
import Validate from '../validators/valideteFactory'

// Project Validate
import projectValidator from '../validators/projectValidator'

import projectController from '../controllers/projectController';



const router = new Router();

// Listar projects
router.get(['/', '/index'], projectController.index);

// get project 
router.get('/add', projectController.add);

// Add projects
// send form to register project idea
// Procesa el formulario para agregar ideas de projectos
router.post(
  '/add',
  Validate({
    shape: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost
);

export default router;
