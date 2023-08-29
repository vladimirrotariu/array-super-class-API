# ArraySuperClass API

## Description
ArraySuperClass is a custom implementation of JavaScript's native Array; we reimplemented lightweight versions of some popular array methods: map, some, find, push. However, we chose our implementation of map to MUTATE the instance of ArraySuperClass it is being invoked to:
```
/**
   * Maps each element using a mapping function. As opposed to the native API, this is !!! MUTABLE !!!.
   * @param {Function} mappingFunction - The function to apply to each element.
   */
  map(mappingFunction) {
    for (let index = 0; index < this.length; index++) {
      this.array[index] = mappingFunction(this.array[index]);
    }
  }
```
See more details in the [COMPANION WEBSITE](https://array-super-class-api.vercel.app/).

## Tech stack
* Web: JavaScript ES2023, HTML5, Bootstrap, Prism.js.
* BDD with Cucumber.js

## Testing
We specifically adopted Cucumber.js due to the high abstract level of the functionalities tested: thus, we were allowed to clearly separate the test logic from the code.
