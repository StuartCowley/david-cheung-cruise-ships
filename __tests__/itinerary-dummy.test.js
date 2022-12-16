const Itinerary = require('../src/itinerary');

describe('Itinerary', () => {
  let dover;
  let calais;
  let itinerary;
  describe('with ports and an itinerary', () => {
    beforeEach( () => {
      dover = {};                     // set dummy
      calais = {};                    // set dummy
      itinerary = new Itinerary([dover,calais]);
    });

    describe('Itinerary constructor', () => {
      it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
      });
      it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover,calais]);
      });
    });
  });
});
