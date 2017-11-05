import React from 'react';
import { mount } from 'enzyme';

import TodoForm from './TodoForm';

const addItem = jest.fn();

const wrapper = mount(<TodoForm addItem={addItem} />);

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should prevent default', () => {
  const preventDefault = jest.fn();
  wrapper.simulate('submit', { preventDefault });
  expect(preventDefault).toHaveBeenCalled();
});

it('should call addItem', () => {
  wrapper.simulate('submit');
  expect(addItem).toHaveBeenCalledWith('');
});
