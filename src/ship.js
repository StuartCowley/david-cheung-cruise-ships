// change startingPort to currentPort
// change argument from currentPort to itinerary
function Ship(itinerary){
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
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
};

// remove argument
// assign currentPort from itinerary
Ship.prototype.dock = function() {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  this.currentPort = itinerary.ports[previousPortIndex + 1];
};

module.exports = Ship;