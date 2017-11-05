import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

const props = {
  id: 1,
  done: true,
  toggleItem: jest.fn(),
};
const text = 'test text';

const wrapper = shallow(<TodoItem {...props}>{text}</TodoItem>);

it('should render class name', () => {
  expect(wrapper.hasClass('todo-item')).toBe(true);
  expect(wrapper.hasClass('done')).toBe(true);
});

it('should render text', () => {
  expect(wrapper.text()).toBe(text);
});

it('should call toogleItem when Clicked', () => {
  wrapper.simulate('click');
  expect(props.toggleItem).toHaveBeenCalledTimes(1);
});
