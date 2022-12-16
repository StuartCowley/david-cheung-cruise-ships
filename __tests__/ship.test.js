const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

// add argument to constructor
// add outter describe block
describe('Ship', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  describe('with ports and an itinerary', () => {
    beforeEach( () => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover,calais]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      // const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    });
  
    // Ship argument change from string to object
    // Ship argument change from object to array of object
    it('has a starting port', () => {
      // const ship = new Ship('Dover');
      // const port = new Port('Dover');
      // const itinerary = new Itinerary([port]);
      // const ship = new Ship(itinerary);

      // expect(ship.startingPort).toBe('Dover');
      expect(ship.currentPort).toBe(dover);
    });

    // gets added to port on instantiation in the Ship test suite.
    // check ship.currentPort.ships to see if it contains your Ship instance.
    // using this.currentPort.addShip() with this
    it('gets added to port on instantiation', () => {
      // const dover = new Port('Dover');
      // const itinerary = new Itinerary([dover]);
      // const ship = new Ship(itinerary);
      expect(dover.ships).toContain(ship);
    });
//  });
// Ship argument change from string to object
// Ship argument change from object to array of object
// setSail change startingPort to currentPort
// setSail change previousPort = currentPort to data from Itinerary

    describe('setSail', () => {
      // add another port to test setSail
      it('can set sail',() => {
        // const dover = new Port('Dover');
        // const calais = new Port('Calais');
        // const itinerary = new Itinerary([dover,calais]);
        // const ship = new Ship(itinerary);
        ship.setSail();     // update previousPort and set currentPort to null

        expect(ship.currentPort).toBeFalsy();

        // check ship's previous currentPort not in Port.ships list
        expect(dover.ships).not.toContain(ship);
      });

      it('can\'t sail further than its itinerary', () => {
        // const dover = new Port('Dover');
        // const calais = new Port('Calais');
        // const itinerary = new Itinerary([dover,calais]);
        // const ship = new Ship(itinerary);
        ship.setSail();     // update previousPort and set currentPort to null
        ship.dock();        // update currentPort by itinerary
        expect( () => ship.setSail()).toThrowError('End of itinerary reached');
      });
    });
    // Ship argument change from string to object
    // Ship argument change from object to array of object
    // port object --> itinerary object --> ship object
    describe('dock', () => {
      it('can dock at a different port', () => {
        // const dover = new Port('Dover');
        // const calais = new Port('Calais');
        // const itinerary = new Itinerary([dover,calais]);
        // const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);

        // test ship.currentPort.ships contain this instance
        expect(calais.ships).toContain(ship);
      });
    });
  });
// add outter describe block
});
