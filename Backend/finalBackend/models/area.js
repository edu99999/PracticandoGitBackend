const mongoose = require("mongoose");
const { Schema } = mongoose;
const Persona = require("./persona");

const AreaSchema = new Schema({
  nombreArea: { type: String, required: true },
  encargado: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
  //encargado: [{ type: Persona.schema }],
  //personas : [{type: Schema.Types.ObjectId, ref: Persona, required: true}]
});

module.exports = mongoose.models.Area || mongoose.model("Area", AreaSchema);
