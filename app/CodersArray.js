class CodersArray {
  array;

  constructor(...array) {
    this.array = array;

    let incrementalLength = 0;
    for (value of array) {
      incrementalLength++;
    }

    this.length = incrementalLength;
  }
}

const array = new CodersArray("1", 1, true);
console.log(array.length);
