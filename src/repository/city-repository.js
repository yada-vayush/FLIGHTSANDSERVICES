const { City } = require("../models/index.js");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in city repository layer");
      console.log("====================================");
      throw error;
    }
  }
  async deleteCity(id) {
    try {
      await City.findByIdAndDelete(id);
      return true;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in city repository layer");
      console.log("====================================");
      throw error;
    }
  }
  async getCityById(id) {
    try {
      const city = await City.findById(id);
      return city;
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in city repository layer");
      console.log("====================================");
      throw error;
    }
  }
  async getCity(filter) {
    try {
      if (filter.name) {
        const cities = await City.find({
          name: { $regex: `^${filter.name}`, $options: "i" },
        }).exec();
        return cities;
      }
      return await City.find();
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in city repository layer");
      console.log("====================================");
      throw error;
    }
  }
  async updateCity(id, data) {
    try {
      return await City.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.log("====================================");
      console.log("Something went wrong in city repository layer");
      console.log("====================================");
      throw error;
    }
  }
}
module.exports = CityRepository;
