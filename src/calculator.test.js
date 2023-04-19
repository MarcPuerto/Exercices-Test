import calculator from './calculator.js';

test('4*4 = 16 ', () => {
  expect(calculator.multiply(4,4)).toBe(16);
})

test('4*0 = 16 ', () => {
  expect(calculator.multiply(4,0)).toBe(0);
})

test('4+4 = 8 ', () => {
  expect(calculator.add(4,4)).toBe(8);
})

test('4+(-4) = 0 ', () => {
  expect(calculator.add(4,-4)).toBe(0);
})


test('4-4) = 0 ', () => {
  expect(calculator.subtract(4,4)).toBe(0);
})

test('4+(-4) = 0 ', () => {
  expect(calculator.subtract(4,-4)).toBe(8);
})

test('4/4 = 1 ', () => {
  expect(calculator.divide(4,4)).toBe(1);
})

test('4/"4" = "not the type!" ', () => {
  expect(() => calculator.divide(4,"4")).toThrow("not the type!");
})