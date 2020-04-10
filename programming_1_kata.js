//Exercise: Hello

function hello (name){
    console.log("hello " + name)
}
return hello("Nomanna")


//Exercise: check if a number is even
var num
function even_or_odd(num){
    if (num % 2 === 0){
        return "even"
    } else {
        return 'odd'
    }
}
console.log(even_or_odd(9))

//Exercise: Draw a square
function square(num){
    
    //let str+= "#";
    var str = ""
    for(let i = 0; i < num; i++)// track down/ count rows
    {
        str += "#";
        for(let j = 1; j <num; j++){ // adding colums
            str += "#";

        }
        console.log(str)
        str = "";
    }
}

square(5);

//Exercise: Draw a right handed triangle

function triangle(num1){
  for (let line = "#"; line.length < num1+1; line += "#")
  console.log(line);
}
triangle(4)

//Draw an isosceles triangle

function multiplyChar(c,n){ //helper isoc. 
    let s = "";
    for(let i = 0; i < n; i++){
        s = s + c;
    }
    return s;
  }
  
  
  function triangle(n){
    let hashCount = 1;
    for (let i = 1; i <= n; i++){
        let spaceCount = n - i;
        let row = multiplyChar("#",hashCount);
        let spaces = multiplyChar(" ", spaceCount);
        console.log(spaces + row);
        hashCount += 2; 
    }
  }
  
  // console.log(multiplyChar("#",4));
  // triangle(5);
  triangle(5);

  //Exercise: find the longest string
  var the_arr = ["a", "ssssssssssss", "chocolate"];

  function longestString(arr){
    var lg = 0;
    var longest;
    for(var i = 0; i < arr.length; i++){
      if(arr[i].length > lg){
        lg = arr[i].length;
        longest = arr[i];
      }
    }
    return longest;
  }
  console.log(longestString(the_arr));


  //Exercise: combine two lists/arrays
  
  function combine(arr1, arr2){
   return   console.log(arr1.concat(arr2))
  }

combine("123", "456")

//Exercise: Frame some text 

function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }
  
    let size = arr.map((str) => {
            return str.length;
  })
  .reduce((a, b) => {
        return Math.max(a, b);
  });
  
    let line = fill('', size + 4, '*');
  
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
  })
    arr.unshift(line);
    arr.push(line);
  
    return arr.join('\n');;
  }
  
  console.log(printFrame(["Hello", "World", "it", "Nomanna", "bunny"]));