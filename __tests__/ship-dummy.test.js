const Ship = require('../src/ship');

describe('Ship', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  describe('with ports and an itinerary', () => {
    beforeEach( () => {
      dover = { name : 'Dover', ships : [], addShip :jest.fn() ,removeShip:jest.fn() };   // spies
      calais = { name : 'Calais', ships : [], addShip :jest.fn() ,removeShip:jest.fn() };   // spies
      itinerary = {ports:[dover,calais]};                 // spies
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
  
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });

    it('gets added to port on instantiation', () => {
      //  expect(dover.ships).toContain(ship);
      expect(dover.addShip).toHaveBeenCalled();                 // spies
      expect(dover.addShip).toHaveBeenCalledWith(ship);         // spies
    });

    describe('setSail', () => {
      it('can set sail',() => {
        ship.setSail();     // update previousPort and set currentPort to null
        expect(ship.currentPort).toBeFalsy();
        //  expect(dover.ships).not.toContain(ship);
        expect(dover.removeShip).toHaveBeenCalled();                 // spies
        expect(dover.removeShip).toHaveBeenCalledWith(ship);         // spies
      });

      it('can\'t sail further than its itinerary', () => {
        ship.setSail();     // update previousPort and set currentPort to null
        ship.dock();        // update currentPort by itinerary
        expect( () => ship.setSail()).toThrowError('End of itinerary reached');
      });
    });

    describe('dock', () => {
      it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        // expect(calais.ships).toContain(ship);
        expect(calais.addShip).toHaveBeenCalled();                 // spies
        expect(calais.addShip).toHaveBeenCalledWith(ship);         // spies
      });
    });
  });
});
