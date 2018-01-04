import * as actions from '../actions/index.js';
import { addHousesReducer } from './fake-reducer';

describe('reducer tests', () => {

  it.only('should return the default state', () => {
    const expected = [];
    expect(addHousesReducer(undefined, {})).toEqual(expected)
  })
})
