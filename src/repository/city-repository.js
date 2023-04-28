const {City} = require("../models/index");
const {Op} = require("sequelize");

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
            // const city = City.update( data, {
            //     where : {
            //         id : cityId
            //     }
            // });
            //Above function will not return object
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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

    async getAll({name}){
        try{
            const cities = await City.findAll({
                where : {
                    name : {
                        [Op.startsWith] : name
                    }
                }
            });
            return cities;
        }catch(err){
            console.log("error in repository layer");
        }
    }
};

module.exports = CityRepository;