const {CityService} = require("../services/index");

const cityService = new CityService();

// POST --> req.body
const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : "True",
            msg : "New city added successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            obj : {},
            success : "false",
            msg : "Something went wrong"
        })
    }
}

//GET --> api/city/:id
const get = async (req, res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            obj : city,
            success : "true",
            msg : "city data fetched successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            obj : {},
            success : "false",
            msg : "Something went wrong"
        })
    }
    
}

// PUT --> req.body with :id
const update = async (req, res) => {
    try{
        const city = await cityService.updateCity(req.params.id , req.body);
        return res.status(200).json({
            obj : city,
            success : "true",
            msg : "city data updated successfully"
        })

    }
    catch(err){
        res.status(500).json({
            obj : {},
            success : "false",
            msg : "Something went wrong"
        })
    }
}

//DELETE --> /city/:id
const destroy = async (req, res) => {
    try{
        const city = await cityService.deleteCity(req.params.id);
        res.status(200).json({
            obj : {},
            success : "true",
            msg : "city data deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({
            obj : {},
            success : "false",
            msg : "Something went wrong"
        })
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
}