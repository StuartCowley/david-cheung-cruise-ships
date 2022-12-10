function Ship(){
  this.startingPort = '';
  this.passengers = [];
}

Ship.prototype.getPassengers = function() {
  return this.passengers;
};

Ship.prototype.setStartingPort = function(port) {
  this.startingPort = port;
};

module.exports = Ship;