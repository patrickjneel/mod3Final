import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Test', () => {
  it('should be defined', () => {
    const renderedCard = shallow(<Card />);
    expect(renderedCard).toBeDefined();
  });

  it('should match snapShot', () => {
    const renderedCard = shallow(<Card />);
    expect(renderedCard).toMatchSnapshot();
  });

  it.skip('should receive props', () => {
    const renderCard = shallow(<Card />);
    expect()
  })
});
