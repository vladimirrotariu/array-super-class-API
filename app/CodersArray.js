class CodersArray {
  array;
  length;

  constructor(...array) {
    this.array = array;

    let incrementalLength = 0;
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

  find(testFunction) {
    for (let index = 0; index < this.length; index++) {
      if (testFunction(this.array[index])) {
        return this.array[index];
      }
    }
  }
}
