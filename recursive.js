"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  var x = 2;
    while (angka != 1) {
      var temp = angka % x;
      if (temp === 0) {
        hasil.push(x);
        angka = angka / x;
        x = 2;
      } else{
        x = x + 1;
      }
    }
      return(hasil);
  }


// console.log(prime_factors(3)); // [3]
// console.log(prime_factors(6)); // [2,3]
// console.log(prime_factors(8)); // [2,2,2]
// console.log(prime_factors(25)); // [5,5]
// console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// // release 1
let simple_recursive = (number) => {
  // write your code here
  var split = number.toString().split("");
  if (split.length > 1){
    var result = 1;
    for (var i = 0; i < split.length; i++){
      result *= parseInt(split[i])
    }
    return simple_recursive(result)
  }else {
    return number
  }
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
