const areaCtrl = require("./../controllers/area.controller");

const express = require("express");
const router = express.Router();

router.get("/", areaCtrl.obtenerAreas);
router.post("/", areaCtrl.crearArea);
router.get("/:id", areaCtrl.getAreaUnica);
router.put("/:id", areaCtrl.editarArea);
router.delete("/eliminar/:idArea", areaCtrl.eliminarArea);

module.exports = router;
