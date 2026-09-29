const test = require('node:test');
const assert = require('node:assert/strict');
const { calculate } = require('../calculator.js');

test('adds the values shown in the example', () => {
  assert.equal(calculate(2, '+', 3), 5);
});

test('adds negative and decimal values', () => {
  assert.equal(calculate(-2, '+', 3.5), 1.5);
});

test('subtracts the values shown in the example', () => {
  assert.equal(calculate(10, '-', 4), 6);
});

test('subtracts to a negative result', () => {
  assert.equal(calculate(4, '-', 10), -6);
});

test('multiplies the values shown in the example', () => {
  assert.equal(calculate(45, '*', 2), 90);
});

test('multiplies by zero and handles negative values', () => {
  assert.equal(calculate(0, '*', 4), 0);
  assert.equal(calculate(-4, '*', 2), -8);
});

test('divides the values shown in the example', () => {
  assert.equal(calculate(20, '/', 5), 4);
});

test('divides to a decimal result and handles negative values', () => {
  assert.equal(calculate(5, '/', 2), 2.5);
  assert.equal(calculate(-8, '/', 2), -4);
});

test('throws a clear error when dividing by zero', () => {
  assert.throws(() => calculate(1, '/', 0), {
    message: 'Cannot divide by zero.',
  });
});

test('rejects unsupported operators', () => {
  assert.throws(() => calculate(1, '%', 2), {
    message: 'Unsupported operator "%". Use +, -, *, or /.',
  });
});
