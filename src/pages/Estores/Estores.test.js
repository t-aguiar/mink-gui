import React from 'react';
import { shallow } from 'enzyme';
import Estores from './Estores';

describe('<Estores />', () => {
  test('renders', () => {
    const wrapper = shallow(<Estores />);
    expect(wrapper).toMatchSnapshot();
  });
});
