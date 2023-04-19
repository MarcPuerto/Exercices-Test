import capitalize from './capitalize.js';

test('rata should be Rata ', () => {
  expect(capitalize('rata')).toBe('Rata');
})


test('Rata should be Rata ', () => {
  expect(capitalize('Rata')).toBe('Rata');
})

test('RATA should be RATA ', () => {
  expect(capitalize('RATA')).toBe('RATA');
})

test('Rata petita should be Rata petita ', () => {
  expect(capitalize('Rata petita')).toBe('Rata petita');
})

