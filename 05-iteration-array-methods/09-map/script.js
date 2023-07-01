const numbers = [1, 2, 3, 4, 5]


const dubbledNumbers = numbers.map((number) => number *2);

console.log(dubbledNumbers);

// Same with forEach

const dubbledNumbers2 = [];

numbers.forEach((number) => {
    dubbledNumbers2.push(number * 2);
});

console.log(dubbledNumbers2);





const companies = [
    {name: 'ABC Corporation', category: 'Technology', startYear: 2005, endYear: 2021},
    {name: 'XYZ Inc.', category: 'Finance', startYear: 2010, endYear: 2023},
    {name: 'PQR Industries', category: 'Manufacturing', startYear: 1995, endYear: 2023},
    {name: 'Example Corp', category: 'Services', startYear: 2018, endYear: 2023},
    {name: 'Tech Solutions Ltd.', category: 'Technology', startYear: 2000, endYear: 2015},
    {name: 'Food Delights Inc.', category: 'Food', startYear: 2008, endYear: 2022},
    {name: 'Green Energy Co.', category: 'Energy', startYear: 2012, endYear: 2023},
    {name: 'Fashion Trends LLC', category: 'Fashion', startYear: 2016, endYear: 2023},
    {name: 'Global Logistics Ltd.', category: 'Logistics', startYear: 2003, endYear: 2019}
];


// Creater an Array of company names

const companiesNames = companies.map((company) => company.name);

console.log(companiesNames);

// Creater an Array of just company names and category

const nameANdCategory = companies.map(function (nameArr) {
    return {
        name: nameArr.name,
        category: nameArr.category,
    }
});
console.log(nameANdCategory);


// Creater an Array of Objects of companies whith name & years


const companyYears = companies.map(function (company) {
 return {   
    name: company.name,
    length: company.endYear - company.startYear + ' years',
 }
 
});

console.log(companyYears);



// Chain map methould

const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt *2); // sqrt takes the value of number

console.log(squareAndDouble);


// Chaining diffent metholds

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenDubble = numbers2
.filter((number) => number % 2 === 0)
.map((number) => number * 2);

console.log(evenDubble);