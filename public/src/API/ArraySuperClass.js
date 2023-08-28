/* eslint-disable no-unused-vars */
/**
 * ArraySuperClass is a custom implementation of JavaScript's native Array.
 */
class ArraySuperClass {
  array;
  length;

  /**
   * Constructs an ArraySuperClass instance with the given elements.
   * @param {...any} array - The elements to initialize the array with.
   */
  constructor(...array) {
    this.array = array;
    this.#updateLength();
  }

  /**
   * Updates the 'length' property of the ArraySuperClass instance.
   * @private
   */
  #updateLength() {
    this.length = 0;
    for (const _ of this.array) {
      this.length++;
    }
  }

  /**
   * Maps each element using a mapping function. As opposed to the native API, this is !!! MUTABLE !!!.
   * @param {Function} mappingFunction - The function to apply to each element.
   */
  map(mappingFunction) {
    for (let index = 0; index < this.length; index++) {
      this.array[index] = mappingFunction(this.array[index]);
    }
  }

  /**
   * Tests whether at least one element passes the test implemented by the provided function.
   * @param {Function} testFunction - The function to test for each element.
   * @returns {boolean} True if at least one element passes the test, otherwise false.
   */
  some(testFunction) {
    for (let index = 0; index < this.length; index++) {
      if (testFunction(this.array[index])) {
        return true;
      }
    }

    return false;
  }

  /**
   * Returns the value of the first element that satisfies the provided test function.
   * @param {Function} testFunction - The function to test for each element.
   * @returns {any} The first element that satisfies the test function; otherwise undefined.
   */
  find(testFunction) {
    for (let index = 0; index < this.length; index++) {
      if (testFunction(this.array[index])) {
        return this.array[index];
      }
    }

    return undefined;
  }

  /**
   * Adds one element to the end of the array and updates the length property.
   * @param {any} newLastElement - The element to add to the end of the array.
   * @returns {number} The new length property of the array.
   */
  push(newLastElement) {
    this.array[this.length] = newLastElement;
    this.#updateLength();
    return this.length;
  }
}

export default ArraySuperClass;
