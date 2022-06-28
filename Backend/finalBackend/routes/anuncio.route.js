const anuncioCtrl = require("./../controllers/anuncio.controller");

const express = require("express");
const router = express.Router();

router.get("/", anuncioCtrl.obtenerAnuncios);
router.post("/", anuncioCtrl.crearAnuncio);
router.put("/:id", anuncioCtrl.editarAnuncio);
router.delete("/eliminar/:idAnuncio", anuncioCtrl.eliminarAnuncio);

module.exports = router;

