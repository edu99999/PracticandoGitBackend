const personaCtrl = require("./../controllers/persona.controller");

const express = require("express");
const router = express.Router();

router.get("/", personaCtrl.obtenerPersonas);
router.post("/", personaCtrl.crearPersona);
router.get("/:id", personaCtrl.getPersonaUnica);
router.put("/:id", personaCtrl.editarPersona);
router.delete("/eliminar/:idPersona", personaCtrl.eliminarPersona);

module.exports = router;