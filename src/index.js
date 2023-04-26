const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require("../src/config/serverConfig");
const APIroutes = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use("/api" , APIroutes);


    app.listen(PORT , async () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();
