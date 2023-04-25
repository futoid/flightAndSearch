const {City} = require("../models/index");

class CityRepository {
    async createCity (name){
        try{
            await City.create({name});
        }catch (err){
            throw {err};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id : cityId
                }
            })
        }
        catch (err){
            throw {err};
        }
    }
};

module.exports = CityRepository;