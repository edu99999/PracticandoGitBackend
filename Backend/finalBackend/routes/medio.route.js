const medioCtrl = require("./../controllers/medio.controller");

const express = require("express");
const router = express.Router();

router.get("/", medioCtrl.obtenerMedios);
router.post("/", medioCtrl.crearMedio);
router.put("/:id", medioCtrl.editarMedio);
router.delete("/eliminar/:idMedio", medioCtrl.eliminarMedio);

module.exports = router;