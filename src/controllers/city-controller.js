const { CityService } = require("../services/index");

const cityService = new CityService();
//Post city
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      succes: true,
      message: "Succesfully created the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the city",
      err: error,
    });
  }
};
// delete--> /city/:id
const destroy = async (req, res) => {
  try {
    console.log("fdfde");
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      succes: true,
      message: "Succesfully deleted the  city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      succes: true,
      message: "Not able to delete the city",
      err: error,
    });
  }
};
// get --> /city
const getAll = async (req, res) => {
  try {
    const city = await cityService.getCity();
    return res.status(200).json({
      data: city,
      succes: true,
      message: "Succesfully fetched city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      succes: true,
      message: "Not able to fetch the   city",
      err: error,
    });
  }
};
// get--> /city/:id
const get = async (req, res) => {
  try {
    console.log("in this");
    const city = await cityService.getCityById(req.params.id);
    return res.status(200).json({
      data: city,
      succes: true,
      message: "Succesfully fetched the  city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      succes: true,
      message: "Not able to fetch the  city",
      err: error,
    });
  }
};
// Patch--> /city/:id->reqbody
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      succes: true,
      message: "Succesfully upadated the  city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      succes: true,
      message: "Not able to update the city",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
