function Port(name){
  this.name = name;
  this.ships = [];
}

// new method addShip
Port.prototype.addShip = function(ship) {
  this.ships.push(ship);
};

// new method removeShip
Port.prototype.removeShip = function(ship) {
  const shipIndex = this.ships.indexOf(ship);
  if (shipIndex >= 0) {
    this.ships.splice(shipIndex,1);
  }
};


module.exports = Port;