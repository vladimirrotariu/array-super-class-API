/* eslint-disable no-unused-vars */
class ArraySuperClass {
  array;
  length;

  constructor(...array) {
    this.array = array;

    this.#updateLength();
  }

  #updateLength() {
    let incrementalLength = 0;
    for (const value of this.array) {
      incrementalLength++;
    }

    this.length = incrementalLength;
  }

  map(mappingFunction) {
    for (let index = 0; index < this.length; index++) {
      this.array[index] = mappingFunction(this.array[index]);
    }

    return this.array;
  }

  some(testFunction) {
    for (let index = 0; index < this.length; index++) {
      if (testFunction(this.array[index])) {
        return true;
      }
    }

    return false;
  }

  find(testFunction) {
    for (let index = 0; index < this.length; index++) {
      if (testFunction(this.array[index])) {
        return this.array[index];
      }
    }
  }

  push(newLastElement) {
    const getPushedArray = (...newArray) => newArray;
    this.array = getPushedArray(...this.array, newLastElement);
    this.#updateLength();
    return this.length;
  }
}

export default ArraySuperClass;
