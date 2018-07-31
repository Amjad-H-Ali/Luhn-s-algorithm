console.log('Luhn\'s Algo: Credit.');

let ccNum;

// Get cc number from user.
do {
	ccNum = prompt();
}

// CC number has to be a non-negative integer
while (ccNum < 0 || isNaN(parseInt(ccNum)) || isNaN(Number(ccNum)) || parseInt(ccNum) != ccNum);

 // Function to Get Length of a number
const getNumLen = (num) => {
	return parseInt(num) > 0 ? 1 + getNumLen(num/10) : 0; 
};

// Function that stores every other digit starting from second-to-last digit in number.
const everyOtherDigit = (num) => {
	let num_arr = [];
	// Modulous 10 get last digit of num. We need to divide by 10 to get second-to-last digit.
	let denom = 10;
	// Increase the denominator by 100 to get every other number.
	// We only need to loop for half the length of num because there are only that amnt of "other" digits
	for (let i = 0, len = Math.floor(getNumLen(num)/2); i < len; i ++) {
		num_arr.push(parseInt((num/denom) % 10));
		denom *= 100;
	};
	return num_arr;
};

const mtlplyByTwo = (num) => {
	return everyOtherDigit(num).map( num => num * 2);
};

console.log(mtlplyByTwo(ccNum));