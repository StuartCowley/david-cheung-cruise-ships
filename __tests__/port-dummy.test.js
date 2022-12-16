const Port = require('../src/port');

describe('Port', () => {
  let port;
  let titanic;
  let queenMary;
  let ship;
  describe('with ports and an itinerary', () => {
    beforeEach( () => {
      port = new Port('Dover');
      titanic = {};         // set dummy
      queenMary = {};       // set dummy
      // ship = {};            // set dummy
      ship = jest.fn();     // set dummy
    });

    describe('Port constructor', () => {
      it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
      });
      it('check port name', () => {
        expect(port.name).toBe('Dover');
      });
    });

    describe('addShip', () => {
      it('can add a ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
      });
    });

    describe('removeShip', () => {
      it('can remove a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
      });
    });
  });
});
