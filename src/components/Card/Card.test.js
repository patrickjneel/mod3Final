import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Test', () => {
  it.only('should be defined', () => {
    const renderedCard = shallow(<Card />)
    expect(renderedCard).toBeDefined();
  })
})
