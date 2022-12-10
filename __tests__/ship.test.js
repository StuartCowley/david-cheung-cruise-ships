const Ship = require('../src/ship');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('getPassengers', () => {
  it('test method getPassengers', () => {
    const ship = new Ship();
    ship.passengers = ['David','Stella'];
    expect(ship.getPassengers()).toEqual(['David','Stella']);
  });
});

describe('setStartingPort', () => {
  it('test method setStartingPort', () => {
    const ship = new Ship();
    ship.setStartingPort('Hong Kong');
    expect(ship.startingPort).toEqual('Hong Kong');
  });
});

