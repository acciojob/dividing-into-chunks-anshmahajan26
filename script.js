const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code her
	for(let i =0; i<arr.length; i++){
		for(let j =1; j<arr.length; j++){
			let sum =0;
			for(let k=i; k<j; k++){
				sum += arr[k];
				if(sum <n){
					console.log(arr[k]);
				}
			} 
		}
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
