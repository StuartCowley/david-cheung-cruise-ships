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

describe('setSail', () => {
  it('can set sail', () => {
    const ship = new Ship('Dover');
    ship.setSail();     // set ship.startingPort to undefined
    expect(ship.startingPort).toBeFalsy();
  });
});

describe('getPassengers', () => {
  it('test method getPassengers', () => {
    const ship = new Ship('Dover');
    ship.passengers = ['David','Stella'];
    expect(ship.getPassengers()).toEqual(['David','Stella']);
  });
});




