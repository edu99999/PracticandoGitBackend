const Area = require("../models/area");
const areaCtrl = {};

/**
 * Recupera todos las Areas disponibles
 */
areaCtrl.obtenerAreas = async (req, res) => {
  //var areas = await Area.find().populate("encargado");
  var areas = await Area.find().populate("encargado");
  res.json(areas);
};

/**
 * Agregar una nueva Area
 */
areaCtrl.crearArea = async (req, res) => {
  var area = new Area(req.body);

  try {
    await area.save();
    res.json({
      status: "1",
      msg: "Area agregada Exitosamente",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error al agregar Area",
    });
  }
};
/**
 * Obtener un Area en especifico
 */
areaCtrl.getAreaUnica = async (req, res) => {
  const area = await Area.findById(req.params.id);
  res.json(area);
};
/**
 * Actualizar una Area
 */
areaCtrl.editarArea = async (req, res) => {
  const varea = new Area(req.body);
  try {
    await Area.updateOne({ _id: req.body._id }, varea);
    res.json({
      status: "1",
      msg: "Area Actualizada",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion - Actualizar",
    });
  }
};

/**
 * Eliminar una Area
 */
areaCtrl.eliminarArea = async (req, res) => {
  try {
    await Area.deleteOne({ _id: req.params.idArea });
    res.json({
      status: "1",
      msg: "Area Eliminada",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion - Eliminar",
    });
  }
};

module.exports = areaCtrl;
