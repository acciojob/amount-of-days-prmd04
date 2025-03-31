//your JS code here. If required.
function leapYear(year) {
	return (year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)?366:365);
}

let year = prompt("Enter the year ");
alert(leapYear(year));