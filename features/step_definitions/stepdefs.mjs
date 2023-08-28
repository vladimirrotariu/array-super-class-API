/* eslint-disable new-cap */
 
import { Given, Then, When } from '@cucumber/cucumber';
import assert from "assert";
import ArraySuperClass from '../../public/src/API/ArraySuperClass.js';

let upgradedArrayInstance = [];
let classicalArray = [];

Given("an instance of the ArraySuperClass class", () => {
  upgradedArrayInstance = new ArraySuperClass(1, "1", false, (x) => x*2, [1], {"error" : true});
});

When("compared with an instance of the native JavaScript Array class, not necessarily with with the same array value", () => {
});

Then("it should contain all the prototype properties of the instance of the native JavaScript Array class i.e. the array API", () => {
  assert.strictEqual(upgradedArrayInstance.array instanceof Array, true);
});

When('compared with an instance of the native JavaScript Array class, with the same number of elements', () => {
  classicalArray = [1, "1", false, (x) => x*2, [1], {"error" : true}];
});

Then('both length properties should point to the same number value', () => {
  assert.strictEqual(classicalArray.length, upgradedArrayInstance.length);
});
