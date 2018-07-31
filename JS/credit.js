console.log('Luhn\'s Algo: Credit.');

let ccNum;

// Get cc number from user.
do {
	ccNum = prompt("Credit Card Number:");
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

// Function Multiplies Every other digit by two
const evryOtherx2 = (num) => {
	return everyOtherDigit(num).map( num => num * 2);
};

// Sums up the product of the digits after multiplying them by 2
const addProducts = (num) => {
	// This will store the array of digits that were multiplied by two
	let arrx2 = evryOtherx2(num);
	let sum = 0;
	for (let i = 0, len = arrx2.length; i < len; i ++) {
		// Stores the length of the current number from that array.
		let numLen = getNumLen(arrx2[i]);
		// Keep multiplying this by 10 to get each product (ex. 12 = 1 & 2) in a number. 
		let denom = 1;

		while (numLen > 0) {
			// Adds the last product the first round
			sum += parseInt((arrx2[i]/denom) % 10);
			// Multiply denominator by 10 to get the next product and so on.
			denom *= 10;
			numLen --;
		};
	};
	return sum;
};

// Sums up remaining digits that we did not Multiply by two
const sumOtherDigits = (num) => {
	let denom = 1;
	let sum = 0;
	for (let i = 0, len = Math.round(getNumLen(num)/2); i < len; i ++) {
		sum += parseInt((num/denom)%10);
		denom *= 100;
	};
	return sum;
};














