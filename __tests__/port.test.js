const Port = require('../src/port');

describe('Port constructor', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('check port name', () => {
    const port = new Port('Dover');
    expect(port.name).toBe('Dover');
  });
});
