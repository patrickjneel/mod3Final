import * as actions from '../actions/index.js';
import { addHousesReducer } from './fake-reducer';

describe('reducer tests', () => {

  it('should return the default state', () => {
    const expected = [];
    expect(addHousesReducer(undefined, {})).toEqual(expected)
  });

  it('should return a new state with the house', () => {
    const house = [{
      name: 'Stark',
      words: 'Winter is Coming',
      weapons: 'Ice'
    }];
    const expected = [...house];
    expect(addHousesReducer(undefined, actions.addHouses(house))).toEqual(expected)
  })
});
