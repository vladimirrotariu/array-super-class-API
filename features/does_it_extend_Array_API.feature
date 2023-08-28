Feature: Does the ArraySuperClass class contains the properties of an object instantiated from the native JavaScript Array class, as well as some extra ones?
  We implemented ArraySuperClass to have the native JavaScript API, as well as the array value 
  (under the property called 'array'), incorporated in an instance of the class ArraySuperClass.

  Scenario: ArraySuperClass class instances contain the prototype properties of instances of the native JavaScript Array class
    Given an instance of the ArraySuperClass class 
    When compared with an instance of the native JavaScript Array class, not necessarily with with the same array value
    Then it should contain all the prototype properties of the instance of the native JavaScript Array class i.e. the array API

  Scenario: ArraySuperClass class instances' property length is the same as the length property of instances of the native JavaScript Array class
    Given an instance of the ArraySuperClass class 
    When compared with an instance of the native JavaScript Array class, with the same number of elements
    Then both length properties should point to the same number value


