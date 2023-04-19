import reverseString from './reversestring.js';

test('rata should be atar ', () => {
  expect(reverseString('rata')).toBe('atar');
})

test('RATA should be ATAR ', () => {
    expect(reverseString('RATA')).toBe('ATAR');
  })

  
test('eeee should be eeee ', () => {
    expect(reverseString('eeee')).toBe('eeee');
  })


  test('oto should be oto ', () => {
    expect(reverseString('oto')).toBe('oto');
  })