var selectElementsStartingWithA = function(array) {
  var filteredArray = array.filter(function(word) {
    return !word.charAt(0).match(/[^a]/i);
  });
  return filteredArray;
};

var selectElementsStartingWithVowel = function(array) {
  var filteredArray = array.filter(function(word){
    return !word.charAt(0).match(/[^aeiou]/i);
  });
  return filteredArray;
};

var removeNullElements = function(array) {
  var filteredArray = array.filter(function(word){
    return word !== null;
  });
  return filteredArray;
};

var removeNullAndFalseElements = function(array) {
  var filteredArray = array.filter(function(word){
    return word !== false;
  });
    return removeNullElements(filteredArray);
};

var reverseWordsInArray = function(array) {
  var reversedWords = array.map(function(word){
    return word.split('').reverse().join('');
  });
  return reversedWords;
};

var everyPossiblePair = function(array) {
  pairs = [];
  for (var i = 0; i < array.length; i ++){
      var firstName = array[i];
      var secondName = array[(i + 1) % array.length];
      var pair = [firstName, secondName];
      pairs.push(pair.sort(function(a, b){
        return (((a[0][0]) < (b[0][0]) ? -1 : 1));
      }));
    }
  return pairs.sort();
};

var allElementsExceptFirstThree = function(array) {
    return array.splice(3, array.length);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  array = reverseWordsInArray(array);
  array.sort();
  return reverseWordsInArray(array);
};

var getFirstHalf = function(string) {
  var half = Math.ceil(string.length/2);
  return string.split('').splice(0,half).join('');
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  var filteredArray = array.filter(function(word){
    return word.split('').reverse().join('') === word;
  });
  return filteredArray.length;
};

var shortestWord = function(array) {
  return array.reduce(function(a, b){
    return a.length < b.length ? a : b;
  });
};

var longestWord = function(array) {
  return array.reduce(function(a, b){
    return a.length > b.length ? a : b;
  });
};

var sumNumbers = function(array) {
  var sum = array.reduce(function(a, b){
    return a + b;
  });
  return sum;
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return sumNumbers(array)/array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var newArray = [];
  var i = 0;
  while (array[i] <= 5) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

var convertArrayToObject = function(array) {
  var object = {};
  for (var i = 0; i < array.length; i+=2)
    object[array[i]] = array[i+1];
  return object;
};

var getAllLetters = function(array) {
  var unique = array.join('').split('').sort().filter(function(element, index, self){
    return index == self.indexOf(element);
  });
return unique;
};

var swapKeysAndValues = function(object) {
  var swappedObject = {};
  for(var key in object){
    swappedObject[object[key]] = key;
  }
  return swappedObject;
};

var sumKeysAndValues = function(object) {
  var total = 0;
  for (var key in object){
    total += (parseInt(key) + object[key]);
  }
  return total;
};

var removeCapitals = function(string) {
  var filteredArray = string.split('').filter(function(letter) {
    return letter.match(/[a-z\s]/);
  });
  return filteredArray.join('');
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  properlyFormatted = ("0" + date.getDate()).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
  return properlyFormatted;
};

var getDomainName = function(string) {
  var text = string.substring(string.lastIndexOf("@")+1).split('.');
  text.pop();
  return text.join('.');
};

var titleize = function(string) {
  var splitString = string.split(' ');
    capitalized = [];
    for (var i = 0; i < splitString.length; i++){
      if (splitString[i].toString().length > 3) {
          capitalized.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
      }
      else {
        capitalized.push(splitString[i]);
      }}
  capitalized = capitalized.join(' ');
  var titleized = capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
  var splitSentences = titleized.split('. ');
  var final = [];
  for (var y = 0; y < splitSentences.length; y++){
    final.push(splitSentences[y].charAt(0).toUpperCase() + splitSentences[y].slice(1, splitSentences[y].length));
  }
  return final.join('. ').toString();
};

var checkForSpecialCharacters = function(string) {
  var filtered = string.split('').filter(function(word) {
      return word.match(/[\w0-9]/i);
  });
  return filtered.join('').toString() !== string;
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  if (number === 0){
    return 1;
  }
  return number * factorial(number - 1);
};

var findAnagrams = function(string) {
  var splitString = string.split('');
  var anagrams = [];
  for(var i = 0; i < splitString.length; i++){
      anagrams.push(splitString[i]);
      anagrams.push(splitString[i] + splitString[(i + 1) % splitString.length]);
      anagrams.push(splitString[i] + splitString[(i + 2) % splitString.length]);
      anagrams.push(splitString[i] + splitString[(i + 1) % splitString.length] + splitString[(i + 2) % splitString.length]);
      anagrams.push(splitString[i] + splitString[(i + 2) % splitString.length] + splitString[(i + 1) % splitString.length]);
    }
  uniqueArray = anagrams.filter(function(item, pos) {
    return anagrams.indexOf(item) == pos;
  });
  return uniqueArray;
};

var convertToCelsius = function(number) {
  return Math.round((number-32) * 5 / 9);
};

var letterPosition = function(array) {
  letters = array.slice(' ');
  positions = [];
  for(var i = 0; letter = letters[i]; i++){
  positions.push((letter.toLowerCase().charCodeAt(0) - 97)+1);
}
  return positions;
};
