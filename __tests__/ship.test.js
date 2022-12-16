const Ship = require('../src/ship');
describe('Ship', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  beforeEach( () => {
    dover = { name : 'Dover', ships : [], addShip :jest.fn() ,removeShip:jest.fn() }; 
    calais = { name : 'Calais', ships : [], addShip :jest.fn() ,removeShip:jest.fn() }; 
    itinerary = {ports:[dover,calais]};     
    ship = new Ship(itinerary);
  });
  describe('Ship constructor', () => {
    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port and a null previousPort', () => {
      expect(ship.currentPort).toBe(dover);
      expect(ship.previousPort).toBeFalsy();
    });
    it('check port.addShip method is called on instantiation', () => {
      expect(dover.addShip).toHaveBeenCalled(); 
      expect(dover.addShip).toHaveBeenCalledWith(ship);  
    });
  });
  describe('setSail', () => {
    it('can set sail and port.removeShip method is called',() => {
      ship.setSail(); 
      expect(ship.previousPort).toBe(dover);
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalled();    
      expect(dover.removeShip).toHaveBeenCalledWith(ship);   
    });
    it('can\'t sail further than its itinerary and return error', () => {
      ship.setSail();     
      ship.dock();       
      expect( () => ship.setSail()).toThrowError('End of itinerary reached');
    });
  });
  describe('dock', () => {
    it('can dock at a different port and port.addShip method is called', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalled();   
      expect(calais.addShip).toHaveBeenCalledWith(ship);  
    });
  });
});
