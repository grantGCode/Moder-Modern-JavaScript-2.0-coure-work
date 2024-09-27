let d;
// Dates

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10, 30, 0); // Return Jul 11 2021 06:00:00 because months are 0 indexed.

d = new Date('2021-07-10'); // Strings can be passed in may different formats than arguments.

d = new Date('2021-07-10T12:30:00'); // T syntax is for passing time in a string.
d = new Date('2021/07/10 12:30:00'); // or us this syntax for same result.
d = new Date('2022-07-10'); // Be carful using the hyphen syntax (-) can sometime result in the date being off by one day.
//Line 14 returned Sat Jul 09 2022 19:00:00 GMT-0500 (Central Daylight Time)
d = new Date('07-10-2022'); // Using US date format AKA putting the month first fixes the issue on line 14.

// Link on Line 19 explains the issue on line 14.
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

//Time Stamps

/* Unix time: 
It measures time by the number of non-leap seconds that have elapsed since 00:00:00 UTC
 on 1st January 1970, the Unix epoch. Time stamps in Unix are expressed in milliseconds.*/

d = Date.now(); // Returns milliseconds that have passed in unix.

d = new Date('07');

d = new Date('07-10 2022 12:30:00');
d = d.getTime(); // Returns unix time stamp for date on Line 31.
d = d.valueOf(); // Returns the same as Line 32 by using valueOf.

d = new Date(1727465713298); // Line 35 creates a date object from a unix time stamp.

d = Math.floor(Date.now() / 1000); // converts milliseconds to seconds by dividing 1000 
console.log(d);