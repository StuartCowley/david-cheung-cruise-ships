const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Port constructor', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('check port name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
});

describe('addShip', () => {
  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('removeShip', () => {
  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);
    expect(port.ships).toEqual([titanic]);
  });
});
