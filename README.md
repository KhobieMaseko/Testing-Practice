# Testing Practice

Test Driven Development (TDD) Practice using Jest

![Jest](https://img.shields.io/badge/-Jest-%23C21325?logo=jest&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)

A JavaScript project implementing and testing fundamental functions as part of The Odin Project curriculum.

## Features

- **Capitalize**: Capitalizes the first character of a string
- **Reverse String**: Reverses any given string
- **Calculator**: Basic operations (add, subtract, multiply, divide)
- **Caesar Cipher**: Shifts characters with proper wrapping and case preservation
- **Array Analyzer**: Provides statistics (average, min, max, length)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KhobieMaseko/Testing-Practice.git
   ```

2. Navigate to project directory:
   ```bash
   cd Testing-Practice
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Running Tests:
```bash
npm test         # Run all tests once
npm run test:watch  # Run in watch mode
```

Testing Specific Components:
```bash
npm test -- -t "capitalize"  # Test only capitalize function
npm test -- -t "calculator"  # Test only calculator operations
```

Code Formatting:
```bash
npm run format   # Format code with Prettier
```

## Dependencies:

    Jest (testing framework)

    Babel (ES6+ compatibility)

    Prettier (code formatting)
