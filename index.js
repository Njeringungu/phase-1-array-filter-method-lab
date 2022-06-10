// Code your solution here

function findMatching(driver, sort) {
    return driver.filter(
      possibleMatch => possibleMatch.toLowerCase() === sort.toLowerCase()
    );
  }
  const fuzzyMatch = (driver, testString) => {
    return driver.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  const matchName = (driver, sortName) => {
    return driver.filter((record) => record.name === sortName);
  }