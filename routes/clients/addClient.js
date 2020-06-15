module.exports = (app) => {
    app.post("/clients", async (req, res) => {
        const result = {
            id: 1,
            name: "Фанни"
        };
        
        res.send({
            status: "Success",
            result: result
        });
    });
}