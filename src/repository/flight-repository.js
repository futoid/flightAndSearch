const { response } = require("express");
const {Flight} = require("../models/index");
const {Op} = require("sequelize");
class FlightRepository {
    #flightDataFilter(data){
        let filterProperties = {};
        if(data.arrivalAirportId){
            filterProperties.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filterProperties.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price : {[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        Object.assign(filterProperties , {[Op.and] : priceFilter});
        console.log(filterProperties)
        return filterProperties;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlightById(id){
        try{
            const flight = await Flight.findByPk(id);
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlightData(data){
        try{
            const filterProperties = this.#flightDataFilter(data)
            const flight = await Flight.findAll({
                where : filterProperties
            });
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateSeats(data){
        try{
            const response = await this.getFlightById(data.id);
            if(data.totalSeats){
                response.totalSeats = data.totalSeats;
            }
            response.save();
            return response; 
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;