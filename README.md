# Automation testing

### Installation


#### Install cypress
This project requires cypress to run tests
Type following command in your terminal to install cypress
```
npm install cypress   
```
#### Download Microsoft edge and firefox browser
If your system is not having edge and firefox installed then make sure too install them first before running test scripts.
You can download them form these links:

Microsoft Edge - https://www.microsoft.com/en-us/edge
Firefox - https://www.mozilla.org/en-US/

#### Download the project
Run following commands to download and setup project
```
git clone git@github.com:Mansatfinder/automation.git
cd automation
```
#### Install the dependencies
Run following command to install all dependencies
```
yarn
```
### Running the tests

#### Multibrowsers and mobile viewport
To run these tests in chrome, firefox, edge and mobile viewport use this command in terminal
```
yarn multi-browsers
```
#### In Chrome
To run these tests in chrome use this command in terminal
```
yarn chrome-tests
```

#### In Firefox
To run these tests in firefox use this command in terminal
```
yarn firefox-tests
```
#### In Edge
To run these tests in edge use this command in terminal
```
yarn chrome-tests
```
#### In mobile-viewport 
To run these tests in mobile viewport use this command in terminal
```
yarn mobile-tests
```



