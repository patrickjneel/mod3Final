import React from 'react';
import { shallow } from 'enzyme';
import { CardList, mapStateToProps, mapDispatchToProps} from './CardList';

describe('CardList Test', () => {
  
  it.only('should be defined', () => {
    const renderedCardList = shallow(<CardList />)
    console.log(renderedCardList)
    expect(renderedCardList).toBeDefined();
  })

  it('should match snap shot', () => {
    const mockFunc = jest.fn();
    const renderedCardList = shallow(<CardList />, {disableLifecycleMethods: true});
    expect(renderedCardList).toMatchSnapshot();
  });

});

describe('mapStateToProps test', () => {
  it('should receive props from the store', () => {
    const mockState = {
      data: [{name: 'Stark', words: 'Winter is Coming', weapons: 'Ice'}]
    }
    const expected = mapStateToProps(mockState)
    expect(expected.data).toEqual(mockState.data)
  })
})

describe('mapDispatchToProps test', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

  it('should call dispatch when addHouses is called', () => {

    result.addHouses();
    expect(mockDispatch).toHaveBeenCalled();
  })
})
