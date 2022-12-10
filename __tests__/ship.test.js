const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship constructor', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  
  it('has a starting port', () => {
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const ship = new Ship(port);
    // expect(ship.startingPort).toBe('Dover');
    expect(ship.currentPort).toBe(port);
  });
});

describe('setSail', () => {
  it('can set sail', () => {
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const ship = new Ship(port);
    ship.setSail();     // set ship.startingPort to undefined
    expect(ship.startingPort).toBeFalsy();
  });
});

describe('dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const ship = new Ship(dover);

    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});



