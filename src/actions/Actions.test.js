import * as actions from './index.js';

describe('Actions Test', () => {

  it.only('has a type of addHouses', () => {
    const data = {
      name: 'Stark',
      words: 'Winter is Coming',
      weapons: 'Ice'
    };
    const expected = {
      type: 'ADD_HOUSES',
      data
    };
    expect(actions.addHouses(data)).toEqual(expected);
  })
})
