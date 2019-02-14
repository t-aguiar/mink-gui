import React from 'react';
import { shallow } from 'enzyme';
import Jobs from './Jobs';

describe('<Jobs />', () => {
  test('renders', () => {
    const wrapper = shallow(<Jobs />);
    expect(wrapper).toMatchSnapshot();
  });
});
