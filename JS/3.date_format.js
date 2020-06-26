// #3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var dd = today.getDate();

// Convert month number to 1-12 system
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
// Add "0" before day number, when day < 10 (01, 02, 03...)
if(dd<10) 
{
    dd='0'+dd;
} 

// Add "0" before month number, when month < 10 (01, 02, 03...)
if(mm<10) 
{
    mm='0'+mm;
} 

// mm-dd-yyyy
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
// mm/dd/yyyy
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
// dd-mm-yyyy
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
// dd/mm/yyyy
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
