const assert = require('assert');

describe('Example', () => {
  it('will ok', () => {
    assert(true);
  });

  it.skip('will fail', () => {
    assert.equal(1 + 1, 3);
  });

  it('has no implementation and pending');
});
