// callback function i.e. function called within function

const calc = () => {
	return 4 * 4;
};

const printCalc = (callback) => {
	console.log(callback());
};

printCalc(calc);
