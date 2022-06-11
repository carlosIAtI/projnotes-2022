// ODM - Moongose 
import mongoose from 'mongoose'

const { Schema } = mongoose;

const ProjectSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
}); // schema descripcion de los datos que va a contener el JSON "by PD. Rivalcova"


// Generar el modelo a partir de un esquema => compilar el modelo-"crear una instancia a partir schema"
export default mongoose.model('project', ProjectSchema);
