import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Test', () => {
  it('should be defined', () => {
    const mockFunc = jest.fn()
    const renderedCard = shallow(
          <Card 
              name={'strak'}
              founded={''}
              seats={'big ones'}
              coatOfArms={''}
              weapons={'ice'}
              words={'winter coming'}
              swornMembers={[]}
              swornData={mockFunc}
              sworn={[]}
            />);
    expect(renderedCard).toBeDefined();
  });

  it('should match snapShot', () => {
    const mockFunc = jest.fn()
    const renderedCard = shallow(
           <Card 
              name={'strak'}
              founded={''}
              seats={'big ones'}
              coatOfArms={''}
              weapons={'ice'}
              words={'winter coming'}
              swornMembers={[]}
              swornData={mockFunc}
              sworn={[]}
            />);
    expect(renderedCard).toMatchSnapshot();
  });

});


 
