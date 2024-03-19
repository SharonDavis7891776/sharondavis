# Sharondavis

A collection of useful utility functions for Node.js applications.

## Installation

You can install this module via npm: `npm install sharondavis`

## Usage

```javascript
const magicUtils = require('magic-utils');

// Example usage of functions
console.log(magicUtils.generateRandomNumber(1, 100));
console.log(magicUtils.capitalizeFirstLetter('hello'));
magicUtils.fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
console.log(magicUtils.shuffleArray([1, 2, 3, 4, 5]));
```


