import add from './add';

it('should add multiple numbers', () => {
  expect(add(1, 2, 3)).toBe(6);
});

it('should be curried', () => {
  expect(add(2)(3)).toBe(5);
});

it('should throw error if not given arguments', () => {
  expect(() => add()).toThrow();
});
