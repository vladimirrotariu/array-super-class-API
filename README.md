<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black&labelColor=F7DF1E" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white&labelColor=E34F26" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white&labelColor=1572B6" alt="CSS3" />
<img alt="Static Badge" src="https://img.shields.io/badge/Cucumber.js-%23e9ff96?style=flat">
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white&labelColor=F05032" alt="Git" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white&labelColor=2088FF" alt="GitHub Actions" />
</div>

# ArraySuperClass API

## Description
ArraySuperClass is a custom implementation of JavaScript's native Array; we reimplemented lightweight versions of some popular array methods: map, some, find, push. However, we chose our implementation of map to MUTATE the instance of ArraySuperClass it is being invoked to:
```
/**
   * Maps each element using a mapping function. As opposed to the native API, this is !!! MUTABLE !!!.
   * @param {Function} mappingFunction - The function to apply to each element.
   */
  map(mappingFunction) {
    for (let index = 0; index < this.length; index++) {
      this.array[index] = mappingFunction(this.array[index]);
    }
  }
```
See more details in the [COMPANION WEBSITE](https://array-super-class-api.vercel.app/).

## Tech stack
* Web: JavaScript ES2023, HTML5, Bootstrap, Prism.js.
* Testing/BDD: Cucumber.js
* CI/CD: GitHub Actions

## Testing
We specifically adopted Cucumber.js due to the high abstract level of the functionalities tested: thus, we were allowed to clearly separate the test logic from the code.
