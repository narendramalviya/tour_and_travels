module.exports = (app) =>{
    const tour_package = require('../controllers/tour_package.controller.js');

    //Create new Package
    app.post('/packages',tour_package.create);

    //Retrieve all Packages
    app.get('/packages',tour_package.findAll);

    //Retrieve single Package by id
    app.get('/packages/:packageId',tour_package.findOne);

    //Update Package by packageId
    app.put('/packages/:packageId',tour_package.update);

    //Delete a Package by packageId
    app.delete('/packages/:packageId',tour_package.delete);
}