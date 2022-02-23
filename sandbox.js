const str = "I am a string";
const str2 = "String I am";
const str3 = "this is another one";
console.log(str, str2, str3);

const words = str.split("");
const words2 = str2.split(" ");
const words3 = str3.split("  ");
console.log(words);
console.log(words2);
console.log(words3);

const pet = "cat";
const rat = "r" + pet.slice(1);
console.log(pet);
console.log(rat);
console.log(str.slice(-4));

function standardize(sentence) {
  console.log(sentence);
  return sentence.split(" ").map((words) => {
    return words.padStart(3, "x");
  });
}

console.log(standardize("Here is a sentence"));

function standardize2(sentence2) {
  return sentence2.split(" ").map((words) => {
    return words.slice(1);
  });
}

console.log(standardize2("Here is a sentence"));

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

console.log(reverseWords("this sentence should be reversed"));

const reverse = str.split(" ").map((word) => word.split("").reverse().join(""));

console.log(reverse);

const upper = str.slice([0]).toUpperCase();
console.log(upper);

// function capFirst(str) {
//   const cap = str.charAt(0).toUpperCase() + str.slice(1);
//   return cap;
// }

//above caps the first letter only
//below caps all first letters

function capFirst(str) {
  const wordz = str.split(" ");
  const upper = [];
  wordz.forEach((e) => {
    upper.push(e[0].toUpperCase() + e.slice(1, e.length));
  });
  return upper.join(" ");
}

const sent = "this is my sent";
const result = capFirst(sent);

console.log(result);

function numEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function numOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(numEven(135));
console.log(numEven(2 + 3 + 5));
console.log(numOdd(274));
console.log(numOdd(2 + 7 + 4));

console.log("split");

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return Math.abs(n % 2) === 1;
}

function oddishOrEvenish(number) {
  if (
    number
      .toString()
      .split("")
      .map((d) => +d)
      .reduce((a, b) => a + b) %
      2 ===
    0
  ) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

console.log(oddishOrEvenish(121));

console.log(isEven(135));
console.log(isEven(2 + 3 + 5));
console.log(isOdd(274));
console.log(isOdd(2 + 7 + 4));

const points = [1, 2, 3, 4, 5, 6];
points.sort(function (a, b) {
  return b - a;
});

console.log(points);

// function at(arr, index) {
// const num = arr[-index];
// return num;
// }

// console.log(at(["a", "b", "c", "d", "e"], "0"));
// console.log(at(["a", "b", "c", "d", "e"], "-2"));

function at(arr, index) {
  if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}

let arr = ["a", "b", "c", "d", "e"];

console.log(at(arr, -2));

for (let i = 1; i <= 10; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
