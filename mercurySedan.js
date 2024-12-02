//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) { //constructor creates a new object in this class and sets the values for existing properties
        super(make, model, year, color, mileage) //super allows you to access the parents constructor properties and methods
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false; //all of this is saying that a car which is a vehicle, can have a max amount of passangers, max speed, etc
    }
    
    loadPassenger(num) {
    if (num < this.maxPassengers) {
            console.log('More people can fit in your' + ' ' + this.make + '!' +  ' ' + 'Tell your friends to get in, we are going shopping!')               
        } 
        else if (num === this.maxPassengers){
            console.log('Your' + ' ' + this.make + ' ' + 'is full and ready to go!')
        }
        else {
            console.log('Unfortunately your' + ' ' + this.make + ' ' + 'does not have enough room for all your besties.');
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log('vroom vroom, you are ready to hit the road!')
            return this.started = true
        }
        else {
            console.log('Your' + ' ' + this.make + ' ' + 'is empty :(')
        }
    }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
}

let myCar = new Car("MercurySedan", "A28", "2007", "pink", 400)
myCar.loadPassenger(5)
myCar.start()
myCar.checkService()











//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
