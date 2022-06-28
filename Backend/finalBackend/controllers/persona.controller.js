const Persona = require("../models/persona");
const personaCtrl = {};

/**
 * Recupera todos las Personas
 */
personaCtrl.obtenerPersonas = async (req, res) => {
  //var personas = await Persona.find().populate("area").populate("tipoRoles");
  var personas = await Persona.find().populate("roles");
  res.json(personas);
};

/**
 * Agregar una nueva Persona
 */
personaCtrl.crearPersona = async (req, res) => {
  var persona = new Persona(req.body);

  try {
    await persona.save();
    res.json({
      status: "1",
      msg: "Persona agregada Exitosamente",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al agregar Persona",
    });
  }
};

/**
 * Obtener una Persona en especifico
 */
 personaCtrl.getPersonaUnica = async (req, res) => {
  const persona = await Persona.findById(req.params.id);
  res.json(persona);
};

/**
 * Actualizar una Persona
 */
personaCtrl.editarPersona = async (req, res) => {
  const vpersona = new Persona(req.body);
  try {
    await Persona.updateOne({ _id: req.body._id }, vpersona);
    res.json({
      status: "1",
      msg: "Persona Actualizada",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion - Actualizar",
    });
  }
};

/**
 * Eliminar una Persona
 */
personaCtrl.eliminarPersona = async (req, res) => {
  try {
    await Persona.deleteOne({ _id: req.params.idPersona });
    res.json({
      status: "1",
      msg: "Persona Eliminada",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion - Eliminar",
    });
  }
};

module.exports = personaCtrl;
