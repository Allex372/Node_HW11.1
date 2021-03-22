const Car = require('../dataBase/models/Car');

module.exports = {
    findAllCars: () => Car.find(),

    findCarByID: (carId) => (Car.findById(carId)),

    createCar: (carObj) => Car.create(carObj),

    updateCar: (carId, carObject) => {
        const keys = Object.values(carObject.photos);
        keys.forEach((key) => {
            Car.updateOne({ _id: carId }, { $set: keys });
            // Car.updateOne({ _id: carId }, { $set: carObject });
            // console.log(carObject.photos)
        });
    }
};
