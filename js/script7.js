console.log("задание 7");
var S = 2000000,
	p = 0.1,
	years = 5,
	Pereplata,
	stavkaMounth,
	plategMounth;

var i = stavkaMounth = p / 12;
plategMounth = S * ((i * ((1 + i) ** years)) / (((1 + i) ** years) - 1));
Pereplata = (60 * plategMounth) - S;
console.log(Pereplata);