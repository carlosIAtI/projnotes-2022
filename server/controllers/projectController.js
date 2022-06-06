import log from '../config/winston';
// Action Methods
// Get Projects
const index = (req, res) => {
    res.send("get projets")
}
// add projects
const add = (req, res) => {
     res.render('projects/addProjectView', {})
}

// add projects
const addPost = (req, res) => {
    const { errorData } = req;
    // Crear view models para este action method
    let project = {};
    let errorModel = {};
    if (errorData) {
      log.info('Se retorna objeto de error de validacion');
      project = errorData.value;
      // reduce 
      errorModel = errorData.inner.reduce((prev, curr)=>{
        ///// Mantener inmutables los elementos originales con ""const  newVal = pre;
        const newVal = prev;
        newVal[`${curr.path}Error`] = curr.message;
        return newVal; 
      }, {});
      // La validacion fallo
      // res.status(200).json(errorModel);
    }
      log.info('Se retorna objeto Projecto valido');
      // Desestructurando la informacion
      // del formulario
      const { validData } = req;
      // Regresar un objeto con los datos
      // obtenidos del formulario
      project = validData;
      // res.status(200).json(validData);
      res.render('projects/addProjectView', {project, errorModel})
      //res.status(200).json({project, errorModel});

};




export default {
    index,
    add,
    addPost ,
}       
