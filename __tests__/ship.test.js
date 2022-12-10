const Ship = require('../src/ship');

describe('Ship constructor', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  
  it('has a starting port', () => {
    const ship = new Ship('Dover');
    expect(ship.startingPort).toBe('Dover');
  });
});


describe('getPassengers', () => {
  xit('test method getPassengers', () => {
    const ship = new Ship('Dover');
    ship.passengers = ['David','Stella'];
    expect(ship.getPassengers()).toEqual(['David','Stella']);
  });
});





