// 1. Array Creation
console.log  (" 1.Array Creation"); 

let arr=[1,2,3];
arr.length=3;
console.log(arr)

// 2.  Array Manipulation
console.log(" 2.Array Manipulation ");

//PUSH()
console.log("PUSH");

let add =[1,2,3,4,5];
add.push(6);
console.log(add);

//POP ()
console.log("POP");

let remove =[1,2,3,4,5];
remove.pop(5);
console.log(remove);


// 3. Array Searching

//IndexOf
console.log(" 3.Array Searching");
console.log("IndexOf");
let text="hesventh";
console.log(text.indexOf("t"));

//FindIndex
console.log("FindIndex");
const ages = [3, 10, 18, 20];
ages.findIndex(checkAge);
function checkAge(age) {
  console.log (age > 18);
}


// 4. Array Filtering
console.log(" 4.Array Filtering");
let fil=[1,3,4,5,6,7,2,8,9]
console.log(fil.filter((x) => x < 4));




// 5. Array Mapping
console.log(" 5.Array Mapping");
let map=[1,3,4,2,5,6,8]
console.log(map.map((x) => x * 2));


// 6a. Array Sorting
console.log("6a.Array Sorting");
let  sor = [7,4,3,6,8,9,1,2]
console.log(sor);
console.log(sor.sort());

// 6b. Array Reverse

console.log("6b.Array Reverse");
let rev=[1,2,3,4,5,6,7,8,9]
console.log(rev);
console.log(rev.reverse());

// 7. Array Join
console.log("7.Array Join");
let jin=[1,2,3,4,5,6]
console.log(jin);


// 8. Array Destructing
console.log(" 8.Array Destructing");
let dest = [1, 2, 3, 4, 5];
console.log(dest);
let [a, b, c, d, e]=dest;
console.log(dest);


// 9.Array Spreading
console.log("9.Array Spreading")
let spread1=[1,2,3,4,5];
let spread2=[6,7,8,9,3];
let result=[...spread1,...spread2]
console.log(result);




// 10. Array Finding Maximum and Minimum
console.log(" 10.Array Finding Maximum and Minimum");

// Finding Maximum
console.log("Finding Maximum");
let num1=[1,2,3,8,5,6,7,9]
console.log(Math.max(...num1));

// Finding Minimum
console.log("Finding Minimum");
let num2=[4,2,3,8,1,6,7,9]
console.log(Math.min(...num2));





// 11. Array Flattering
console.log(" 11.Array Flattering")
let flat=[[1,2],[3,4],[5,6],[7,8]];
let flatarr=flat.flat();
console.log(flatarr);




// 13. Array objects sorting

console.log(" 13.Array objects sorting")
let obj = [4, 2, 9, 1, 5];
console.log(obj);
obj.sort((a, b) => a - b);
console.log("Sorted Array in ascending order:", obj);

// 14. Merging of Arrays

console.log(" 14.Merging of Arrays");
let mer1 = [1, 3, 5, 7];
let mer2 = [2, 4, 6, 8];
console.log("Array 1:", mer1);
console.log("Array 2:", mer2);
let mergedArray = [...mer1,...mer2];
console.log("Merged Array:", mergedArray.sort());



//  15.Find the index of first ocuurance

console.log(" 15.Find the index of first ocuurance");
let ind=[1,2,5,3,6];
let element = 5;
console.log("Element:", element);
let index = ind.indexOf(element);
if (index !== -1) {
    console.log("Index of first occurrence:", index);
} else {
    console.log("Element not found in array");
}

console.log(jin.join("+"));


// 15 a. Finding the index of first occurance

console.log(" 15a.Finding the index of first occurance");
let arrind = [2,3,4,5,6]
console.log(arrind);
let ele = 5;
console.log("Element:", ele);
let indx = arrind.indexOf(ele);
if (indx !== -1) {
    console.log("Index of first occurrence:", indx);
} else {
    console.log("Element not found in array");
}



//  15 b. Finding the index of last index occurance

console.log(" 15b.Finding the index of last occurance");
let larr = [2,3,4,5,6,7,8,9,5,1]
console.log(larr);
let elementlast = 5;
console.log("Element:", elementlast);
let indexlast = larr.lastIndexOf(elementlast);
if (indexlast !== -1) {
    console.log("Index of Last occurrence:", indexlast);
} else {
    console.log("Element not found in array");
}

// 16 .new array creating with given length

console.log(" 16.new array creating with given length");
let arr_length=5;
let new_array=Array(arr_length).fill(10*10);
console.log(new_array);



// 17. Array Deduplication

console.log(" 17. Array Deduplication");
let dup = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log("Original Array:", dup);
let uniqueArray = [...new Set(dup)];
console.log("Unique Array:", uniqueArray);





// 18. Find Array Intersection of two sets

console.log(" 18.Aray Intersection of two sets");

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);
console.log("Set 1:", set1);
console.log("Set 2:", set2);

let intersection = new Set([...set1].filter(x => set2.has(x)));

console.log("Intersection:", [...intersection]);

// 19. Finding the difference between two arrays

console.log(" 19.Finding the difference between two arrays");

let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8,9];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

let difference = arr1.filter(x => !arr2.includes(x));
console.log("Difference:", difference);

// 21.Intersection of two arrays sets

console.log("21.Intersection of two arrays");
let inst1 = [1, 2, 3, 4, 5];
let inst2 = [4, 5, 6, 7, 8];
let intsection = [...new Set(arr1)].filter(x => arr2.includes(x));
console.log(intersection);


// 22. Array Manipulation with slice()

console.log(" 22.Array Manipulation with slice()");

console.log("Original Array:", arr);
let newArray = arr.slice(2,4);
console.log("New Array:", newArray);




//  34.Generating an array of a range
console.log("Generating an array of a range");
const array = Array.from({ length: 10 }, (_, i) => i + 2);
console.log(array);

