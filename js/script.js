//task 1
function factorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return  n * factorial(n-1);
  }
}
console.log(factorial(3));
//task 2
function pow(num, degree) {
  if(degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}
console.log(pow(3, 7));
//task 2
function sum(a, b) {
  if(b === 0) {
    return a;
  } else {
    return sum(a+1, b-1);
  }
}
console.log(sum(3, 7));
