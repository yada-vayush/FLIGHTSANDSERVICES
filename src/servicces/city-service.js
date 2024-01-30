const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
  async deleteCity(id) {
    try {
      return await this.cityRepository.deleteCity(id);
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
  async updateCity(id, data) {
    return await this.cityRepository.updateCity(id, data);
    try {
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
  async getCity() {
    try {
      return await this.cityRepository.getCity();
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
  async getCityById() {
    try {
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
}
module.exports = CityService;
