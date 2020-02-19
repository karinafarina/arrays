const memory = require('./memory')
const Array = require('./array')

function main() {
  Array.SIZE_RATIO = 3;
  //Create an instance of the Array class
  let arr = new Array();
  //Add an item to the array
  arr.push(3);
  //length: 1, _capacity: 0, ptr: 0, capacity: 3

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  //length: 6, _capacity: 0, ptr: 45, capacity: 18
  //length is 6 because there are now 6 items
  //capacity starts at 0 but goes to 18 because the length is bigger than the capacity so it is resized times the ARRAY_RATIO of 3

  arr.pop();
  arr.pop();
  arr.pop();
  //length: 3, _capacity: 0, ptr: 45, capacity: 18 because the last 3 numbers were removed

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");
  //undefined, not sure why

  console.log(arr);
  console.log('first', arr.get(0))


//_resize is to make the capacity larger if the length of the array exceeds the capacity


  function urlify(string) {
    let newStr = [];
    let final = '';
    for (let i = 0; i < string.length; i++) {
      //don't understand newStr[newSTr.length]
      if (string[i] === ' ') {
        newStr[newStr.length] = '%20';
      } else {
        newStr[newStr.length] = string[i]
      }
    }
    for (let i = 0; i < newStr.length; i++) {
      final += newStr[i]
    }
    return final;
  }

  let str = 'www.thinkful.com /tauh ida parv een';
  console.log(urlify(str))

  function lessThanFive(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 5) {
        //explain newArray[newArray.length] please
        newArray[newArray.length] = array[i]
      } else {
        return newArray;
      }
    }
  }

  let arr1 = [1, 5, 8, 3, 9, 8, 8, 6, 73, 4, 3]
  console.log(lessThanFive(arr1));

  function maxSum(arr) {
    //loop through adding 2 integres
    //then loop through 3 integers etc
    //each time compare the sum with the existing max sum. replace if higher
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
      // i denotes how many items will be added in this pass
      for( let j = 0; j < arr.length; j++) {
        //loop through each item, the inner loop does the summation according to which i we are at
        let sum = 0;
        for(let k = 0; k< i; k++) {
          //j+0, j+1 ...etc
          if(j+k < arr.length) {
            sum += arr[j + k]
          }
        }
        if(sum > max) {
          max = sum
        }
      }
    }
    return max;
  }
  let arr2 = [4, 6, -3, 5, -2, 1]
  console.log(maxSum(arr2));

  //help
  function merge(arr1, arr2) {
    let mergedArray = Array.from(arr1);
    for(let i = 0; i < arr2.length; i++)
      if(i <= mergedArray[i]) {
          mergedArray.splice(i, 0, num)
          break
        }
        i++
      }
    })
    return mergedArray;
  }
  merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])
}

main();