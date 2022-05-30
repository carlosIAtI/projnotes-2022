// Action Methods
// Get Projects
const index = (req, res) => {
    res.send("get projets")
}
// add projects
const add = (req, res) => {
     res.render('projects/addProjectView', {})
}

export default {
    index,
    add
}       