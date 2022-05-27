// Action Methods
// Get Projects
const index = (req, res) => {
    res.send("get projets")
}
// add projects
const add = (req, res) => {
     res.send(`Add project`)
}

export default {
    index,
    add
}       