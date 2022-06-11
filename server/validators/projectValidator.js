import * as Yup from 'yup';

const projectSchema = Yup.object().shape({
    name: Yup.string().required(`Se requiere un nombre para el proyecto`),
    description: Yup.string()
    .max(500, `La descripcion esta limitada a 500  caracteres`)
    .required(`Se require una description para el projecto`),
});

const getProject = (req) => {
    const { name, description } = req.body;

    return {
        name,
        description,
    };
};


export default { projectSchema, getProject };

