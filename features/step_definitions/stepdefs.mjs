/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
 
import { Given, Then, When } from '@cucumber/cucumber';
import assert from "assert";
import ArraySuperClass from '../../public/src/API/ArraySuperClass.js';

let upgradedArrayInstance;
let classicalArray;
let upgradedArrayInstanceLength;
let classicalArrayLength;

// Scenario: ArraySuperClass class instances contains the properties of instances of the native JavaScript Array class
Given("an instance of the ArraySuperClass class", () => {
  upgradedArrayInstance = new ArraySuperClass(1, "1", false, (x) => x*2, [1], {"error" : true});
});

When("compared with an instance of the native JavaScript Array class, not necessarily with the same array value", () => {
  classicalArray=["a","random","array"];
});

Then("it should contain all the properties of the instance of the native JavaScript Array class i.e. the array API", () => {
  assert.strictEqual(upgradedArrayInstance.array instanceof Array, true);
});

// Scenario: ArraySuperClass class instances' length property is the same as the length property of instances of the native JavaScript Array class
Given("the length property of an instance of the ArraySuperClass class", () => {
  upgradedArrayInstanceLength = new ArraySuperClass(1, "1", false, (x) => x*2, [1], {"error" : true}).length;
});

When("compared with an instance of the native JavaScript Array class, with the same number of elements", () => {
  classicalArrayLength = [1, "1", false, (x) => x*2, [1], {"error" : true}].length;
});

Then("both length properties should point to the same number value", () => {
  assert.strictEqual(classicalArrayLength, upgradedArrayInstanceLength);
});

let instance;
let someResult;
let findResult;
let pushResult;

// Scenario: ArraySuperClass class instances' map method mutates the original array with the provided callback
Given('the map method of an instance of the ArraySuperClass class', () => {
  instance = new ArraySuperClass(1, 2, 3);
});

When('we invoke map with a provided callback', () => {
  instance.map(x => x * 2);
});

Then('it should mutate the original instance element-wise with the callback', () => {
  assert.deepStrictEqual(instance.array, [2, 4, 6]);
});

// Scenario: ArraySuperClass class instances' some method returns true when a condition is met
Given('the some method of an instance of the ArraySuperClass class', () => {
  instance = new ArraySuperClass(1, 2, 3);
});

When('we invoke some with a provided callback', () => {
  someResult = instance.some(x => x > 2);
});

Then('it should return true if any element meets the condition', () => {
  assert.strictEqual(someResult, true);
});

// Scenario: ArraySuperClass class instances' find method returns the first element that satisfies the provided condition
Given('the find method of an instance of the ArraySuperClass class', () => {
  instance = new ArraySuperClass(1, 2, 3);
});

When('we invoke find with a provided callback', () => {
  findResult = instance.find(x => x > 2);
});

Then('it should return the first element that satisfies the condition', () => {
  assert.strictEqual(findResult, 3);
});

// Scenario: ArraySuperClass class instances' push method adds a new element to the end of the array
Given('the push method of an instance of the ArraySuperClass class', () => {
  instance = new ArraySuperClass(1, 2, 3);
});

When('we invoke push with a provided new element', () => {
  pushResult = instance.push(4);
});

Then('it should add the new element to the end of the array', () => {
  assert.deepStrictEqual(instance.array, [1, 2, 3, 4]);
});

Then('it should update the length of the array', () => {
  assert.strictEqual(instance.length, 4);
  assert.strictEqual(pushResult, 4);
});


