import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('Has a link for each page and a log in link', () => {
    const wrapper = shallow(<Navigation.WrappedComponent />);
    expect(wrapper.find('NavLink').length).toEqual(11);
  })
})
