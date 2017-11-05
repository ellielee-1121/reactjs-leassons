const sumWith = (first, rest) => rest.reduce((sum, num) => sum + num, first);
const add = (first, ...rest) => {
  if (typeof first === 'undefined') {
    throw new Error('arguments should be at least 1');
  }
  if (rest.length > 0) {
    return sumWith(first, rest);
  }
  return (...args) => sumWith(first, args);
};

export default add;
