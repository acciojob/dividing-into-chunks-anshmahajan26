const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code her
	let result = [];
let chunk = [];
let sum = 0;

for (let x of arr) {
  if (sum + x <= n) {
    chunk.push(x);
    sum += x;
  } else {
    result.push(chunk);
    chunk = [x];
    sum = x;
  }
}
	
result.push(chunk);
  return result;  
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
