# testcafe_getting_started

## To Dos
- Finish Utility File
- Write a custom method for creating URL based on .env ENV variable
- Finish implementing testcafe versions of the sister repo

## Background
The purpose of this minimal repo is to help teach Junior TAE's, GM new hires, or Globant TAE's how to use Testcafe. To do this effectively, this repo has been broken into multiple parts:
- interactions
- selector-strategies
- pom
- playground
- utility

### Interactions
The purpose of this part is to show off basic page interactions

Currently, as of 08/18/2023, the provided sections are:
- click
- waitFor

### POM - Page Object Model
The purpose of this part is to provide an example of what POM looks like with Testcafe.

Page Object Model is a method of organizing your code into "pages". This is mainly used for readability purposes. More info can be found here: 
- https://www.browserstack.com/guide/page-object-model-in-selenium
- https://webdriver.io/docs/pageobjects/

### Selector Strategies
The purpose of this part is to show off various selector strategies that are used at Great Minds. This is more-so a collaborative section that should be built out over time when new strategies are figured out

Currently, as of 08/17/2023, the provided sections are:
- attribute
- similar elements

### Playground
The purpose of this part is to provide practice TC's that SIT TAE's have to automate on a daily basis. The list below gets progressively more difficult and lengthy. Order below is easiest -> most difficult.

Currently, as of 08/17/2023, the provided practice TC's are:
- login
- dropdowns
- navigate to planning
- Manage, create teacher and login for the first time
- assign assessment as a teacher
- complete assessment as a student
- navigate through explore -> planning, assign multiple resources and launch an assignment
- create assignment through assign
- launch a livemode presentation

In addition to the above UI tests, I've added an API example that utilizes the [The Metropolitan Museum of Art Collection's](https://metmuseum.github.io/) public API. It doesn't require any authentication which makes it perfect for quick testing. 

### Utilities
The purpose of this part is more so to provide useful functions that we use everyday on the SIT pod.

## Where you should start
It all depends on how you feel you learn best. 

- Do you learn the best by looking at code that is already put together? Then start with interactions or selector-strategies
- Do you learn the best by practicing code? Then start with the playground exercises and go from there

## Getting Started

### Pre-reqs
The following should be installed on your machine
- NodeJS
- Git

- Clone the repo using GitHub's UI (code button), GitHub's CLI, or a GUI app (such as GitHub's or GitKraken)
  - gh repo clone msappatgm/wdio_getting_started
- Run npm install from a command line to install all dependencies

### Executing your tests
To execute these tests two configuration files have been provided, located in the /configs directory

- specific.conf.ts -- This configuration file is used to run specific Test Cases, rather than an entire suite
  - The primary difference between this and the wdio.conf is in the mochaOpts object where we're looking for an environment variable on what test you want to run
  - Let's say you want to run the Attribute Selector Strategies test, then the command in your package.json would look like: 
    - npx tsc && SPECIFIC=Attribute node_modules/.bin/wdio configs/specific.conf.ts'
  - If you want to get even more specific and run just the className test case:
    - npx tsc && SPECIFIC=className node_modules/.bin/wdio configs/specific.conf.ts
- wdio.conf.ts -- This configuration file is used to run all of your tests rather than a specific test case
  - You will probably use the specific configuration file more than this one.

From your command line you can execute the scripts provided in the package.json
- npm run all:tests
- npm run specific:test

## Resources
- https://testcafe.io/
- https://testcafe.io/documentation/402635/guides/overview/getting-started
- https://testcafe.io/documentation/402666/reference/test-api/selector-- Creating selectors
- https://testcafe.io/documentation/402688/reference/test-api/testcontroller/selecteditablecontent -- selecting multiple elements
- https://testcafe.io/documentation/402674/reference/test-api/testcontroller/typetext -- Typing
- https://testcafe.io/documentation/402672/reference/test-api/testcontroller/wait -- Waits