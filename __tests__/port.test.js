const Port = require('../src/port');
describe('Port', () => {
  let port;
  let ship;
  beforeEach( () => {
    port = new Port('Dover');    
    ship = {};
  });
  describe('Port constructor', () => {
    it('can be instantiated', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it('check port name', () => {
      expect(port.name).toBe('Dover');
      expect(port.ships).toEqual([]);
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
      port.addShip(ship);
      port.removeShip(ship);
      expect(port.ships).toEqual([]);
    });
    it('throw error when ship not found', () => {
      port.addShip(ship);
      port.removeShip(ship);
      expect(() => port.removeShip(ship)).toThrow('Ship is not found');
    });
  });
});
