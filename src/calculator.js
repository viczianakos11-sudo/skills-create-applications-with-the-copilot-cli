#!/usr/bin/env node

// Supported operations: addition (+), subtraction (-), multiplication (*), and division (/).
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
    default:
      throw new Error(`Unsupported operator "${operator}". Use +, -, *, or /.`);
  }
}

function main(args) {
  if (args.length !== 3) {
    throw new Error('Usage: node src/calculator.js <number> <operator> <number>');
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

module.exports = { calculate };
