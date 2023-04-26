const {City} = require("../models/index");

class CityRepository {
    async createCity ({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch (err){
            console.log("error in repository layer");
            throw {err};
        }
    }

    async getCity (id) {
        try{
            const city = await City.findByPk(id);
            return city;
        }catch(err){
            console.log("error in repository layer");
            throw {err};
        }
    }

    async updateCity (cityId , data) {
        try{
            const city = City.update( data, {
                where : {
                    id : cityId
                }
            });
            return city;
        }
        catch(err) {
            console.log("error in repository layer");
            throw {err};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        }
        catch (err){
            console.log("error in repository layer");
            throw {err};
        }
    }
};

module.exports = CityRepository;