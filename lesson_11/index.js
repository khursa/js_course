let a = 3, b = 2, operation = 'add';

switch (operation) {
	case 'add': 
		console.log(a + b);
		break;
	case 'sub': 
		console.log(b - a);
		break;
	case 'mult': 
		console.log(a * b);
		break;
	case 'div': 
		console.log(a / b);
		break;
	case 'pow': 
		console.log(Math.pow(a,b));
		break;
	default:
		console.log(`Error`);
}