// 9. Write a JavaScript program to calculate days left until next Christmas.

today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
// Change year to next if Christmas already was
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

// Get one day milliseconds
var one_day = 1000 * 60 * 60 * 24;

// Cmas date in ms substract today date in milliseconds and divide by milliseconds per day
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");