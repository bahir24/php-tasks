// leapyear
// var year = prompt('Write a year yyyy');

// function leapyear(year1)
// {
// return (year1 % 100 === 0) ? (year1 % 400 === 0) : (year1 % 4 === 0);
// }
// alert(leapyear(year));

//Get extension
// filename = "system.php"
// console.log(filename.split('.').pop());
// filename = "abc.js"
// console.log(filename.split('.').pop());

// Check two numbers is 50 or their sum equal to 50
// var num1 = Number(prompt('Write first number'));
// var num2 = Number(prompt('Write second number'));

// function sumNums(numFirst, numSecond){
//     return (numFirst == 50 || numSecond == 50 || numFirst + numSecond == 50);
// }
// console.log(sumNums(num1, num2));

//Delete a symbol at the specified position and return the new string.
// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
//  }

// Count vowels
// function vowel_Count(str) {
//     return str.replace(/[^aeiou]/g, "").length;
// }
// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));

//Copy last three chars from string and repeat four times
// function lastThreeCharsCopy(str){
//     strLastThreeChars = str.substring(str.length - 3);
//     return strLastThreeChars.repeat(4);
// }

//Replace chars to next chars in alphabet
// function alphabet_char_Shift(str) {
//     var all_chars = str.split("");
//     for(var i = 0; i < all_chars.length; i++) {
//       var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();

//       n = (n + 1) % 26; 

//       all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//     }
//     return all_chars.join("");
//   }

//   console.log(alphabet_char_Shift("abcdxyz"))


//Check only latin letters and no two lowercase or uppercase in adjacent positions
// function test_string(input_str) {
//     var is_lower_case = function (symbol) {
//         if ('a' <= symbol && symbol <= 'z') {
//             return true;
//         }
//         return false;
//     }
//     var is_upper_case = function (symbol) {
//         if ('A' <= symbol && symbol <= 'Z') {
//             return true;
//         }
//         return false;
//     }
//     var is_first_char_lower = is_lower_case(input_str[0]),
//         is_first_char_upper = is_upper_case(input_str[0]);

//         //Latin check
//     if (!(is_first_char_lower || is_first_char_upper)) {
//         return false;
//     }
//     for (var i = 1; i < input_str.length; i++) {
//         if (i % 2) {
//             if (is_lower_case(input_str[i]) === is_first_char_lower ||
//                 is_upper_case(input_str[i]) === is_first_char_upper) {
//                 return false;
//             }
//         } else {
//             if (is_lower_case(input_str[i]) !== is_first_char_lower ||
//                 is_upper_case(input_str[i]) !== is_first_char_upper) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(test_string('xYr'));
// console.log(test_string('XXyx'));
