function find(arr = [], value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;      
    } 
  }
  return -1;
}

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var primaryPersonsArray = []; // array for primary persons of the love triangle
  let possibleFirstPerson, firstPerson, secondPerson, thirdPerson;

  for (var i = 0; i < preferences.length; i++) {
    // find a person who is in a love triangle
    let findResult = find(primaryPersonsArray, preferences[i]);
    if (findResult != -1) {
      // one person can be once in love triangle
      continue;
    }

    // get the first person of the triangle
    firstPerson = preferences[i];
    if(firstPerson == 0){
      // the first person loves nobody
      continue;
    }

    // get the second person of the triangle
    secondPerson = preferences[firstPerson-1];
    if(secondPerson == 0){
      // the second person loves nobody
      continue;
    }

    // get the third person of the triangle
    thirdPerson = preferences[secondPerson-1];
    if(thirdPerson == 0){
      // the third person loves nobody
      continue;
    }

    // a person can not love himself
    if(firstPerson == secondPerson || firstPerson == thirdPerson){
      continue;
    }

    if((find(primaryPersonsArray,secondPerson) != -1) 
      || (find(primaryPersonsArray,thirdPerson) != -1)){
        // the second person or the third person can not be primary person
      continue;
    }

    possibleFirstPerson = preferences[thirdPerson-1];
    if(possibleFirstPerson == 0){
      // the possible first person loves nobody
      continue;
    }

    if (firstPerson == possibleFirstPerson) {
      primaryPersonsArray.push(firstPerson);
      count +=1;
    }
  }
  return count;
};