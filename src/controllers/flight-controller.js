const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getById = async(req,res) => {
    try {
        //console.log(req.params);
        const flight = await flightService.getFlightById(req.params);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully fetched flight data'
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flight',
            err: error
        });
    }
}

const getAll = async(req,res) => {
    try{
        const flight = await flightService.getFlightData(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully fetched flight data'
        })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flights',
            err: error
        });
    }
}

const updateSeat = async(req,res) => {
    try{
        const updatedSeatsData = await flightService.updateSeats(req.body);
        return res.status(201).json({
            data: updatedSeatsData,
            success: true,
            err: {},
            message: 'Successfully updated seats data'
        })        
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update seats',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateSeat
}