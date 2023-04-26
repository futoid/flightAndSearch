const {CityRepository} = require("../repository/index");

class CityService {
    constructor () {
        this.cityRepository = new CityRepository();
    }

    async createCity (data) {
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch (err){
            console.log("error in service layer");
            throw {data};
        }
    }
    async getCity (id) {
        try{
            const city = await this.cityRepository.getCity(id);
            return city;
        }
        catch (err){
            console.log("error in service layer");
            throw {data};
        }

    }
    async updateCity (cityId, data) {
        try{
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        }
        catch (err){
            console.log("error in service layer");
            throw {data};
        }
    }
    async deleteCity(cityId) {
        try{
            await this.cityRepository.deleteCity(cityId);
            return true;
        }
        catch (err){
            console.log("error in service layer");
            throw {data};
        }
    }
}

module.exports = CityService;