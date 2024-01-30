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
      const response = await this.cityRepository.deleteCity(id);
      return response;
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
  async updateCity(id, data) {
    try {
      return await this.cityRepository.updateCity(id, data);
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
  async getCityById(id) {
    try {
      return await this.cityRepository.getCityById(id);
    } catch (error) {
      console.log("====================================");
      console.log("Error occured at City Service layer");
      console.log("====================================");
      throw error;
    }
  }
}
module.exports = CityService;
