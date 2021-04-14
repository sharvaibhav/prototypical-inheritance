// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}
Vehicle.prototype.drive = function () {
  console.log("Vehcile -- ", this.type, "is driving");
};

Vehicle.prototype.brakes = function () {
  console.log("Vehcile -- ", this.type, "is braking");
};

// const vehicleObject = new Vehicle("four wheeler", 4);
// vehicleObject.drive();
// vehicleObject.brakes();

function Bmw(brand, transmission) {
  this.brand = brand;
  this.transmission = transmission;
  Vehicle.call(this, "four wheeler", 4);
}

Bmw.prototype = Object.create(Vehicle.prototype);
Bmw.prototype.constructor = Bmw;

Bmw.prototype.getTransmission = function () {
  console.log("The transmission ", this.brand, "is -", this.transmission);
  this.drive();
};

const myVehicle = new Bmw("BMW", "Automatic");
myVehicle.getTransmission();
