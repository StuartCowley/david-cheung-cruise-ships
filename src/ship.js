function Ship(portObj){
  // this.startingPort = port;
  this.currentPort = portObj;
  this.passengers = [];
}

Ship.prototype.setSail = function(portObj) {
   //this.startingPort = portObj;
   this.currentPort = portObj; 
};

Ship.prototype.dock = function(portObj) {
  this.currentPort = portObj;
};

module.exports = Ship;