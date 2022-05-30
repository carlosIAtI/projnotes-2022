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
const addProject = (req, res) => {
    const { name, description } = req;
    res.send(name,description)
}


export default {
    index,
    add,
    addProject,
}       