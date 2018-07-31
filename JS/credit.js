console.log('Luhn\'s Algo: Credit.');

let ccNum;

// Get cc number from user.
do {
	ccNum = prompt();
}

// CC number has to be a non-negative integer
while (ccNum < 0 || isNaN(parseInt(ccNum)) || isNaN(Number(ccNum)) || parseInt(ccNum) != ccNum);

