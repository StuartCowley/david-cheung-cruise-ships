function Ship(port){
  this.startingPort = port;
  this.passengers = [];
}

Ship.prototype.setSail = function(port) {
  this.startingPort = port;
};

Ship.prototype.getPassengers = function() {
  return this.passengers;
};

module.exports = Ship;