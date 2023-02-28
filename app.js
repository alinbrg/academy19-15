//1. შექმენით 10 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const sum =
	numbers[0] +
	numbers[1] +
	numbers[2] +
	numbers[3] +
	numbers[4] +
	numbers[5] +
	numbers[6] +
	numbers[7] +
	numbers[8] +
	numbers[9];

const length = numbers.length;

const avrg = sum / length;

console.log(avrg);

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name და age property.
const students = [
	{
		name: "tea",
		age: 25,
	},
	{
		name: "gio",
		age: 20,
	},
	{
		name: "ruso",
		age: 25,
	},
	{
		name: "lasha",
		age: 45,
	},
	{
		name: "nino",
		age: 25,
	},
];

// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// productTitle - სტრინგ ტიპის მნიშვნელობა
// productDescription - სტრინგ ტიპის მნიშვნელობა
// productPrice - რიცხვითი მნიშვნელობა
// shopAddresses - სტრინგ ტიპის  მნიშვნელობების მასივი
// productMemoryInGB - რიცხვითი მნიშვნელობა
// productResolution  - სტრინგ ტიპის მნიშვნელობა
const product = {
	productTitle: "lenovo thinkpad",
	productDescription: "some text",
	productPrice: 3000,
	shopAddresses: ["address 1", "address 2", "address 3"],
	productMemoryInGB: 512,
	productResolution: "1920x",
};

// 4. console.log ში გამოიტანეთ სტრინგი "Product name is (#3 დავალების productTitle-ის  მნიშვნელობა),  product price is (#3 დავალების  productPrice-ის მნიშვნელობა),  product  resolution  is (#3 დავალების  productResolution-ის მნიშვნელობა) and you can buy it at (#3 დავალების shopAddresses-ის პირველი მნიშვნელობა)"

const result = `Product name is ${product.productPrice},  product price is ${product.productPrice},  product  resolution  is ${product.productResolution}and you can buy it at ${product.shopAddresses[0]}`;

console.log(result);

const countries = [
	{
		name: "Georgia",
		topLevelDomain: [".ge"],
		alpha2Code: "GE",
		alpha3Code: "GEO",
		callingCodes: ["995"],
		capital: "Tbilisi",
		altSpellings: ["GE", "Sakartvelo"],
		subregion: "Western Asia",
		region: "Asia",
		population: 3714000,
		latlng: [42, 43.5],
		demonym: "Georgian",
		area: 69700,
		gini: 35.9,
		timezones: ["UTC-04:00"],
		borders: ["ARM", "AZE", "RUS", "TUR"],
		nativeName: "საქართველო",
		numericCode: "268",
		flags: {
			svg: "https://flagcdn.com/ge.svg",
			png: "https://flagcdn.com/w320/ge.png",
		},
		currencies: [
			{
				code: "GEL",
				name: "Georgian Lari",
				symbol: "ლ",
			},
		],
		languages: [
			{
				iso639_1: "ka",
				iso639_2: "kat",
				name: "Georgian",
				nativeName: "ქართული",
			},
		],
		translations: {
			br: "Jorjia",
			pt: "Geórgia",
			nl: "Georgië",
			hr: "Németország",
			fa: "گرجستان",
			de: "Georgien",
			es: "Georgia",
			fr: "Géorgie",
			ja: "グルジア",
			it: "Georgia",
			hu: "Grúzia",
		},
		flag: "https://flagcdn.com/ge.svg",
		cioc: "GEO",
		independent: true,
	},
	{
		name: "Germany",
		topLevelDomain: [".de"],
		alpha2Code: "DE",
		alpha3Code: "DEU",
		callingCodes: ["49"],
		capital: "Berlin",
		altSpellings: [
			"DE",
			"Federal Republic of Germany",
			"Bundesrepublik Deutschland",
		],
		subregion: "Central Europe",
		region: "Europe",
		population: 83240525,
		latlng: [51, 9],
		demonym: "German",
		area: 357114,
		gini: 31.9,
		timezones: ["UTC+01:00"],
		borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
		nativeName: "Deutschland",
		numericCode: "276",
		flags: {
			svg: "https://flagcdn.com/de.svg",
			png: "https://flagcdn.com/w320/de.png",
		},
		currencies: [
			{
				code: "EUR",
				name: "Euro",
				symbol: "€",
			},
		],
		languages: [
			{
				iso639_1: "de",
				iso639_2: "deu",
				name: "German",
				nativeName: "Deutsch",
			},
		],
		translations: {
			br: "Alamagn",
			pt: "Alemanha",
			nl: "Duitsland",
			hr: "Njemačka",
			fa: "آلمان",
			de: "Deutschland",
			es: "Alemania",
			fr: "Allemagne",
			ja: "ドイツ",
			it: "Germania",
			hu: "Grúzia",
		},
		flag: "https://flagcdn.com/de.svg",
		regionalBlocs: [
			{
				acronym: "EU",
				name: "European Union",
			},
		],
		cioc: "GER",
		independent: true,
	},
	{
		name: "United States of America",
		topLevelDomain: [".us"],
		alpha2Code: "US",
		alpha3Code: "USA",
		callingCodes: ["1"],
		capital: "Washington, D.C.",
		altSpellings: ["US", "USA", "United States of America"],
		subregion: "Northern America",
		region: "Americas",
		population: 329484123,
		latlng: [38, -97],
		demonym: "American",
		area: 9629091,
		gini: 41.4,
		timezones: [
			"UTC-12:00",
			"UTC-11:00",
			"UTC-10:00",
			"UTC-09:00",
			"UTC-08:00",
			"UTC-07:00",
			"UTC-06:00",
			"UTC-05:00",
			"UTC-04:00",
			"UTC+10:00",
			"UTC+12:00",
		],
		borders: ["CAN", "MEX"],
		nativeName: "United States",
		numericCode: "840",
		flags: {
			svg: "https://flagcdn.com/us.svg",
			png: "https://flagcdn.com/w320/us.png",
		},
		currencies: [
			{
				code: "USD",
				name: "United States dollar",
				symbol: "$",
			},
		],
		languages: [
			{
				iso639_1: "en",
				iso639_2: "eng",
				name: "English",
				nativeName: "English",
			},
		],
		translations: {
			br: "Stadoù-Unanet",
			pt: "Estados Unidos",
			nl: "Verenigde Staten",
			hr: "Sjedinjene Američke Države",
			fa: "ایالات متحده آمریکا",
			de: "Vereinigte Staaten von Amerika",
			es: "Estados Unidos",
			fr: "États-Unis",
			ja: "アメリカ合衆国",
			it: "Stati Uniti D'America",
			hu: "Amerikai Egyesült Államok",
		},
		flag: "https://flagcdn.com/us.svg",
		regionalBlocs: [
			{
				acronym: "NAFTA",
				name: "North American Free Trade Agreement",
				otherNames: [
					"Tratado de Libre Comercio de América del Norte",
					"Accord de Libre-échange Nord-Américain",
				],
			},
		],
		cioc: "USA",
		independent: true,
	},
];

if (countries[0].area > 6000) {
	console.log(countries[0].name);
}

const password = "asdasd1242";
const passLength = password.length;

if (passLength > 8) {
	console.log("password is longer than 8 char");
} else {
	console.log("password must be longer than 8 char");
}

if (passLength <= 4) {
	console.log("week password");
} else if (passLength > 4 && passLength <= 8) {
	console.log("better password");
} else {
	console.log("strong password");
}

console.log("after if");
const role = "moderator";

switch (role) {
	case "admin":
	case "admin-2":
		console.log("admin");
		break;
	case "user":
		console.log("user");
		break;
	case "moderator":
		console.log("moderator");
		break;

	default:
		console.log("default");
		break;
}

let rights;

if (role === "admin") {
	rights = "all";
} else {
	rights = "restricted";
}

rights = role === "admin" ? "all" : "restricted";
console.log(rights);

for (let i = 0; i < 10; i++) {
	console.log("hello", i);
}

for (let i = 10; i > 0; i--) {
	console.log("hello");
}

console.log("after for");

let a = 0;
while (a <= 10) {
	console.log("while", a);
	a += 2;
}

console.log("after while");

let b = 0;
do {
	console.log("do while", b);
	b++;
} while (b < 10);

console.log("after do while", b);

let numbersSum = 0;

for (let i = 0; i < length; i++) {
	console.log(numbers[i]);
	numbersSum = numbersSum + numbers[i];
}

console.log(numbersSum);

const countriesLength = countries.length;
for (let i = 0; i < countriesLength; i++) {
	if (i === 1) {
		break;
	}

	console.log(i);

	if (countries[i].area < 70000) {
		console.log(countries[i].name);
	}

	if (countries[i].population < 5000000) {
		console.log(countries[i].name);
		break;
		continue;
		console.log("after break");
	}

	console.log("after ifs");
}
