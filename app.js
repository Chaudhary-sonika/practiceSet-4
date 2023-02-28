// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

    //  let array = [4,78,8,3,6,0,12,34]
const getMaxElement = (obj) => {
  let maxScore = 0;
  for (let i =0; i<= obj.length; i++) {
    if(obj[i]>maxScore){
      maxScore = obj[i];
    }
  }
// console.log(maxScore);
}
// console.log(getMaxElement(array));

// 2. Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

const calculateAverage = (arr) => {
    let sum = 0;
    for (let i =0; i< arr.length; i++){
        sum = sum + arr[i];
    } 
    const avg = sum / arr.length;
//    console.log(avg);
};

// console.log(calculateAverage([1, 2, 3, 4, 5]));

//  3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.
    
// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(convertEvenToOdd(numArr));
// // [1, 3, 3, 5, 5, 7, 7, 9, 9]

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const convertEvenToOdd = (arr) =>{
    for (let i =0; i< arr.length; i++){
        if(arr[i]%2 === 0){
            arr[i]+=1;
           } 
    } 
    return arr;
};
// console.log(convertEvenToOdd(numArr));

// 4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.
//     var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
//     console.log(filterWords(words)) // ["repeat", "community"]

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
const filterWords = (arr) =>{
    let newArray = [];
    for (let i =0; i< arr.length; i++){
       if(arr[i].length > 5) {
        //  newArray.push(arr[i]);
        newArray[newArray.length] = arr[i];
       }
       }
    return newArray;
   
};
// console.log(filterWords(words));

// 5. Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]

const capitalizeWords = (arr) =>{
    let newArray = [];
    for (let i =0; i< arr.length; i++){
     newArray[newArray.length]= arr[i].toUpperCase();
    }
   return newArray; 
};
// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));

// 6. Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.
// console.log(
//     getValues(
//       [
//         { name: "John", age: 21 },
//         { name: "Mary", age: 22 },
//         { name: "Peter", age: 23 },
//       ],
//       "name"
//     )
//   ); // ["John", "Mary", "Peter"]

  const getValues = (array, property) =>{
    let newArray = [];
    for (let i =0; i< array.length; i++){
        newArray[newArray.length] = array[i][property];

    }
    return newArray;
  }
//   console.log(
//         getValues(
//           [
//             { name: "John", age: 21 },
//             { name: "Mary", age: 22 },
//             { name: "Peter", age: 23 },
//           ],
//           "name"
//         )
//       );

// 7.Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.
const userData = { firstName : "John", lastName: "Dee" }

const podAndTeamAllocation = (obj)=>({...obj, teamID: 667543});
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (obj) =>{
    (obj.team ?? (obj.team = "A"))
    return obj; }

console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: B}))
console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))

// 9. Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

const {title, authors:[{name:authors1, age: age1}, {name: authors2, age: age2}], publisher:{name:publisherName, location}} = book;
// console.log(title);
// console.log(authors1);
// console.log(authors2);
// console.log(publisherName);



// 10.Write an ES6 function that takes an array of objects and returns the sum of all ages.
// var array = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ];

const sumOfAges = (arr)=>{
    let sum = 0;
    for (let i =0; i< arr.length; i++){
        sum = sum + arr[i].age;
    }
    return sum;
}
// console.log(sumOfAges(array));