function characterPosition(inputString) {
var intermediateString = inputString.join(""); //removes spaces lighthouselabs
var inputArray = intermediateString.split(""); //split individual characters into array
var outputObject = {};
var letterStore = []; //stores an array of the keys of outputObject

for (var i = 0; i < inputArray.length; i++){
  if(isLetterInside(inputArray[i], letterStore)) {
    outputObject[inputArray[i]].push(i);
  }
  // if letter has been encountered before

  else {
    // if letter has not been encountered before
    outputObject[inputArray[i]] = [i];
  }

  letterStore = Object.keys(outputObject); //stores an array of the keys of outputObject

}

return outputObject;

  function isLetterInside(letter, array) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] == letter) {
        return true;
       }
     }
     return false;
  }

}


args = process.argv.slice(2);
console.log(characterPosition(args));