#!/usr/bin/env node

// Supported operations: addition (+), subtraction (-), multiplication (*), division (/),
// modulo (%), exponentiation (^), and square root (sqrt).
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot calculate modulo by zero.');
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate the square root of a negative number.');
  }
  return Math.sqrt(n);
}

function calculate(left, operator, right) {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      if (right === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return left / right;
    case '%':
      return modulo(left, right);
    case '^':
      return power(left, right);
    case 'sqrt':
      return squareRoot(left);
    default:
      throw new Error(`Unsupported operator "${operator}". Use +, -, *, /, %, ^, or sqrt.`);
  }
}

function main(args) {
  if (args.length === 2 && args[0] === 'sqrt') {
    const value = Number(args[1]);
    if (args[1].trim() === '' || !Number.isFinite(value)) {
      throw new Error(`Invalid number: "${args[1]}".`);
    }
    console.log(squareRoot(value));
    return;
  }

  if (args.length !== 3) {
    throw new Error('Usage: node src/calculator.js <number> <operator> <number> | sqrt <number>');
  }

  const [leftInput, operator, rightInput] = args;
  const left = Number(leftInput);
  const right = Number(rightInput);

  if (leftInput.trim() === '' || !Number.isFinite(left)) {
    throw new Error(`Invalid number: "${leftInput}".`);
  }
  if (rightInput.trim() === '' || !Number.isFinite(right)) {
    throw new Error(`Invalid number: "${rightInput}".`);
  }

  console.log(calculate(left, operator, right));
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { calculate, modulo, power, squareRoot };
