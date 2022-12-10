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

describe('setSailFrom', () => {
  it('test method setSailFrom', () => {
    const ship = new Ship('Dover');
    ship.setSailFrom('London');
    expect(ship.startingPort).toEqual('London');
  });
});

describe('getPassengers', () => {
  it('test method getPassengers', () => {
    const ship = new Ship('Dover');
    ship.passengers = ['David','Stella'];
    expect(ship.getPassengers()).toEqual(['David','Stella']);
  });
});




