// eslint-disable-next-line no-unused-vars
class CodersArray {
  array;
  length;

  constructor(...array) {
    this.array = array;

    let incrementalLength = 0;
    // eslint-disable-next-line no-unused-vars
    for (const value of array) {
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
}
