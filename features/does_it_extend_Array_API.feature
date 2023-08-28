Feature: Does the ArraySuperClass class contain properties that are functionally similar to the ones of JavaScript's native Array class?
  We reimplemented lightweight versions of some popular array methods: map, some, find, push.
  We added some modifications from the originals, though: map, for example, does not create a new array, but instead mutates the original array.

  Scenario: ArraySuperClass class instances' map method MUTATES the original array with the provided callback
    Given the map method of an instance of the ArraySuperClass class
    When we invoke map with a provided callback
    Then it should mutate the original instance element-wise with the callback

  Scenario: ArraySuperClass class instances' some method returns true when a condition is met
    Given the some method of an instance of the ArraySuperClass class
    When we invoke some with a provided callback
    Then it should return true if any element meets the condition

  Scenario: ArraySuperClass class instances' find method returns the first element that satisfies the provided condition
    Given the find method of an instance of the ArraySuperClass class
    When we invoke find with a provided callback
    Then it should return the first element that satisfies the condition

  Scenario: ArraySuperClass class instances' push method adds a new element to the end of the array
    Given the push method of an instance of the ArraySuperClass class
    When we invoke push with a provided new element
    Then it should add the new element to the end of the array
    And it should update the length of the array

