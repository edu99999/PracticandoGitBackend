const mongoose = require("mongoose");
const { Schema } = mongoose;
const Area = require('./area');
//const Rol = require('./rol');

const PersonaSchema = new Schema({
  apellido: { type: String, required: true },
  nombre: { type: String, required: true },
  legajo: { type: String, required: true },
  dni: { type: String, required: true },
  email: { type: String, required: true },
  areas: [{ type: Schema.Types.ObjectId, ref: Area, required: true }],
  roles: [{ type: mongoose.Types.ObjectId, ref: 'Rol', required: true }]

  

  //areas: [{ type: Schema.Types.ObjectId, ref: Area, required: true }],
  //roles: [{ type: Schema.Types.ObjectId, ref: Rol, required: true }]
  //area:[{type: Area , required:true}], 
  //area: [{type: Area.schema}],
  //roles: [{type: Rol.schema}],
  //area: [{ type: Schema.Types.ObjectId, ref: Area, required: true }],
 
});

module.exports =
  mongoose.models.Persona || mongoose.model("Persona", PersonaSchema);
