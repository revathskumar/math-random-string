import {expect} from 'chai';

import {rand} from './index';

describe('Math.random().toString(36)', () => {
  it('length should be below 15', () => {
    expect(rand().length).to.be.at.below(15);
  });
});
