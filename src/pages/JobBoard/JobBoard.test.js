import React from 'react';
import { shallow } from 'enzyme';
import JobBoard from './JobBoard';

describe('<JobBoard />', () => {
  test('renders', () => {
    const wrapper = shallow(<JobBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
