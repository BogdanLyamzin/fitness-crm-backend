const getAllClients = require("./getAllClients");
const addClient = require("./addClient");

module.exports = (app)=> {
    getAllClients(app);
    addClient(app);
}