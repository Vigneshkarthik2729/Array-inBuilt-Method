array = [0, 1, 2, 3, 4, 5];
console.log(array);
console.log("method: "+"array.copywithin(target, startvalue)");
let out = array.copyWithin(0,3);
console.log("Given: array.copyWithin(0,3)");
console.log(out);

array = [0, 1, 2, 3, 4, 5, 6];
console.log("method: "+"array.copywithin(target, startvalue, lastvalue)");
let arr = array.copyWithin(0,1,4);
console.log("Given: array.copyWithin(0,1,4)");
console.log(arr);