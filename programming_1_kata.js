//Exercise: Hello

function hello(name) {
  return "hello " + name;
}

//Exercise: check if a number is even

function even_or_odd(num) {
  let num;
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//Exercise: Draw a square
function square(num) {
  //let str+= "#";
  let str = "";
  for (
    let i = 0;
    i < num;
    i++ // track down/ count rows
  ) {
    str += "#";
    for (let j = 1; j < num; j++) {
      // adding colums
      str += "#";
    }
    return str;
  }
}

square(5);

//Exercise: Draw a right handed triangle

function RightTriangle(num1) {
  for (let line = "#"; line.length < num1 + 1; line += "#") 
  return line;
}
RightTriangle(4);

//Draw an isosceles triangle

function multiplyChar(c, n) {
  //helper isoc.
  let s = "";
  for (let i = 0; i < n; i++) {
    s = s + c;
  }
  return s;
}

function IsoTriangle(n) {
  let hashCount = 1;
  for (let i = 1; i <= n; i++) {
    let spaceCount = n - i;
    let row = multiplyChar("#", hashCount);
    let spaces = multiplyChar(" ", spaceCount);
    return spaces + row;
  }
}

IsoTriangle(5);

//Exercise: find the longest string
var the_arr = ["a", "ssssssssssss", "chocolate"];

function longestString(arr) {
  var lg = 0;
  var longest;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lg) {
      lg = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

//Exercise: combine two lists/arrays

function combine(arr1, arr2) {
  return arr1.concat(arr2);
}

combine("123", "456");

//Exercise: Frame some text

function printFrame(arr) {
  function fill(str, length, char) {
    return str.length < length ? fill(str + char, length, char) : str;
  }

  let size = arr
    .map((str) => {
      return str.length;
    })
    .reduce((a, b) => {
      return Math.max(a, b);
    });

  let line = fill("", size + 4, "*");

  arr = arr.map((element) => {
    return "* " + fill(element, size, " ") + " *";
  });
  arr.unshift(line);
  arr.push(line);

  return arr.join("\n");
}
