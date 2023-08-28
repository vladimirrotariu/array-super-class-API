Feature: Does the ArraySuperClass class contains the properties of an object instantiated from the native JavaScript Array class?
  We implemented ArraySuperClass to have the native JavaScript API, as well as the array value 
  under the property called 'array' of an instance of the class ArraySuperClass.

  Scenario: ArraySuperClass class extends the native JavaScript Array class
    Given an instance of the ArraySuperClass class 
    When compared with an instance of the native JavaScript Array class with the same array value
    Then it should contain all the properties of the instance of the native JavaScript Array class, as well as the same value
