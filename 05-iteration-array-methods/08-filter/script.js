const words = ['computer', 'elephant', 'restaurant', 'watermelon', 'umbrella'];

// If I want to filter out words >= 7 I would use the filter() methould

const sevenLetterWords = words.filter( (word) => word.length > 8);

console.log(sevenLetterWords); // returns (2) ['restaurant', 'watermelon']


// Basics 

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //If I wanted to display only even numbers here is the basic syntax for the filter methould

    const evenNum = numbers.filter(function (onlyEven) {
        return onlyEven % 2 === 0;
    });

    console.log(evenNum);

    // Shorter vertion

    /* const evenNum = numbers.filter((onlyEven) => onlyEven % 2 === 0); */

    // Same with for each

    const oddNum = [];
    numbers.forEach((oddOnly) => {
        if (oddOnly % 2 !== 0) {
            oddNum.push(oddOnly);
        }
    });

    console.log(oddNum);

// Company Array Object Challenge

    const companies = [
        {name: 'ABC Corporation', category: 'Technology', startYear: 2005, endYear: 2021},
        {name: 'XYZ Inc.', category: 'Finance', startYear: 2010, endYear: null},
        {name: 'PQR Industries', category: 'Manufacturing', startYear: 1995, endYear: null},
        {name: 'Example Corp', category: 'Services', startYear: 2018, endYear: 2023},
        {name: 'Tech Solutions Ltd.', category: 'Technology', startYear: 2000, endYear: 2015},
        {name: 'Food Delights Inc.', category: 'Food', startYear: 2008, endYear: 2022},
        {name: 'Green Energy Co.', category: 'Energy', startYear: 2012, endYear: null},
        {name: 'Fashion Trends LLC', category: 'Fashion', startYear: 2016, endYear: null},
        {name: 'Global Logistics Ltd.', category: 'Logistics', startYear: 2003, endYear: 2019}
      ];
      
      // Return companies that are Manufacturing or Logistics

      const manAndLog = companies.filter(function (production) { 
        return production.category === 'Manufacturing' || production.category === 'Logistics';
      });
      console.log(manAndLog) 


      //Retun companies that Stat in 1980 and end in 2007

      const startEnd = companies.filter( function (timeOfBussiness) {
        return timeOfBussiness.startYear >= 1980 && timeOfBussiness.endYear <= 2007;
      });

      console.log(startEnd);

      // return companies lasting 15 or more years 

      const Years = companies.filter( function (tenOrMore) {
        return tenOrMore.endYear - tenOrMore.startYear >= 15;
      });

      console.log(Years);