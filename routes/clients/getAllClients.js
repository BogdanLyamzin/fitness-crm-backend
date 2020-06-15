module.exports = (app) => {
    app.get("/clients", async (req, res) => {
        const result = [{
            id: 1,
            name: "Александр"
        }];
        res.send({
            status: "Success",
            result: result
        });
    });
};