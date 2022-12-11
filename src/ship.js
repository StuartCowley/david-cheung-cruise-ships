// change startingPort to currentPort
// change argument from currentPort to itinerary
function Ship(itinerary){
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  // perform post method when ship construct
  this.currentPort.addShip(this);
}

// using itinerary to update previousPort and currentPort
// throw error if there is end of itinerary
Ship.prototype.setSail = function() {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === (itinerary.ports.length - 1)) {
    throw new Error('End of itinerary reached');
  }

   this.previousPort = this.currentPort;

   this.currentPort = null;

  // ship updated here, so do removeShip from port at end of method
  this.previousPort.removeShip(this);
};

// remove argument
// assign currentPort from itinerary
Ship.prototype.dock = function() {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  // perform post method when currentPort change
  // this.currentPort.removeShip(this);

  this.currentPort = itinerary.ports[previousPortIndex + 1];

  // perform post method when currentPort change
  this.currentPort.addShip(this);
};

module.exports = Ship;