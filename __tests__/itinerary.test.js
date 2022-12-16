const Itinerary = require('../src/itinerary');
describe('Itinerary', () => {
  const dover = {};  
  const calais = {};  
  const itinerary = new Itinerary([dover,calais]);
  describe('Itinerary constructor', () => {
    it('can be instantiated', () => {
      expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
      expect(itinerary.ports).toEqual([dover,calais]);
    });
  });
});
