//************************************************Chapter 38 to 42************************************************************** */
//*********************FUNCTIONS, SWITCH STATEMENTS, WHILE, DO WHILE LOOPS *************************************************
//Q no 1
// Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// var c=+prompt("enter  a number:");
// var d=+prompt("enter the power for that number:");
// function power(a, b) {
//     var power = a ** b;
//     return power;
//   } 
//   alert("Value of  a raised to b."+ power(c, d) );




//Q no 2
//Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
// var a = prompt("Enter a year to check ")
// function checkLeapYear(year) {
//     if (year % 4 === 0) {
//       return year + " is a Leap year";
//     } else {
//       return year + " is not a Leap year";
//     }
//   }
// alert((checkLeapYear(a)))





//Q no 3
// . If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions

// var d=+prompt("enter 1st side length of the triangle:")
// var e=+prompt("enter 2nd side length of the triangle:")
// var f=+prompt("enter 3rd side length of the triangle:")
// function areaOfTriangle(a, b, c) {
//     var S = (a + b + c) / 2;
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
//   }

//   alert("Area of triangle is"+ areaOfTriangle(d, e, f));



//Q no 4
// . Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

// var a=+prompt("enter marks of English:")
// var b=+prompt("enter marks of Math:")
// var c=+prompt("enter marks of Urdu:")
// var totalmarks=300;
// function main(){
//     function average(d,e,f){
//         var ave=d+e+f;
//         return ave;
//     }
//     function percentage(){
//         var per=(average(a,b,c)/totalmarks)*100;
//         return per;
//     }
//     alert("your average marks is: "+average(a,b,c)+"\n"+" your percentage is :"+percentage()+" %")
// }
// main()





//Q no 5
// You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.


// function findIndex(str, character) {
//     var isValid = false;
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === character) {
//         isValid = true;
//         return i;
//         break;
//       }
//     }

//     if (!isValid) {
//       return character + " is not available in " + str;
//     }

//   }
//   var x=prompt("enter a string")
//   var y=prompt("enter the character you want the index of")
//   document.write(y+" is found at " + findIndex(x, y) + "  index in the string  "+x);




//Q no 6
// Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// var str = prompt("enter a sentence that is not more than 25 characters long.");
// str.toLowerCase();
// function deleteVowels(sentence) {
//   sentence = sentence.replace(/a/g, "");
//   sentence = sentence.replace(/e/g, "");
//   sentence = sentence.replace(/i/g, "");
//   sentence = sentence.replace(/o/g, "");
//   sentence = sentence.replace(/u/g, "");
//   return sentence;
// }
// document.write("Orignal String: " + str + "<br>");
// document.write("Without Vowels: " + deleteVowels(str) );





//Q no 7
// Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui,io
// function count(a){
//     var st=a;
//     var counter=0
//     for(var i=0;i<st.length;i++){
//         var flag=false;
//         switch(st[i]){
//             case "a":
//                 flag=true;
//                 break
//             case "e":
//                 flag=true;
//                 break 
//             case "i":
//                 flag=true;
//                 break
//             case "o":
//                 flag=true;
//                 break
//             case "u":
//                 flag=true;
//                 break     
//             }  
//         if(flag==true){
//             switch(st[i+1]){
//                 case "a":
//                     counter=counter+1;
//                     break
//                 case "e":
//                     counter=counter+1;
//                     break
//                 case "i":
//                     counter=counter+1;
//                     break
//                 case "o":
//                     counter=counter+1;
//                     break
//                 case "u":
//                     counter=counter+1;
//                     break
//             }
//         }
//     }
//     alert("the occurrances of vowels in succession are "+counter+" times such are ea, ea, ui,io ")
// }
// var x=prompt("enter your sentence")
// x.toLowerCase();
// count(x)






//Q no 8
// The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// var distance = +prompt("Enter distance beween two cities in kilo meter(Km):")
// function meter(a) {
//     var met = a * 1000;
//     return met;
// }
// function feet(b) {
//     var fet = b * 3280.84;
//     return fet;
// }
// function inch(c) {
//     var inc = c * 39370.1;
//     return inc;
// }
// function centimeter(d) {
//     var cen = d * 100000;
//     return cen;
// }
// alert("the distance in meter is : " + meter(distance) + "meter\n" +
//  "the distance in feet is : " + feet(distance) + "feet\n" + "the distance in inches is : " + inch(distance) + " inches\n" + 
//  "the distance in centimeter is : " + centimeter(distance) + "cm");






//Q no 9
// Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour

// function overtimePay() {
// var numofhour=+prompt("enter number of hours above 40 each employee worked:")
// if(numofhour>40){
//     numofhour=numofhour-40;
//     var totalpay=numofhour*12;
//     alert("your over time pay is : "+totalpay)
// }else{
//     alert("you did not work on overtime... ")
// }
// }
// overtimePay();





// Q no 10
// A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the withdrawer.

// var cash=+prompt("enter amount you want to withdrawn:")
// function currencyDenomination(cash) {
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     alert(
//       "You will have "+
//       hundred+
//       " hundred notes "+
//       fifty+
//       " fifty notes "+
//       ten+
//       " ten notes."
//     );
//   }
//   currencyDenomination(cash);



//************************************************Chapter 43 to 48************************************************************* */
//******************************************    EVENT   ******************************** */

//Q no 1
//Show an alert box on click on a link.

// function showAlert() {
//     alert("Good morning \n have a nice day");
//   }



//Q no 2
// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.


// function showAlert() {
//     alert("Thanks for purchasing a phone from us");
//   }




//Q no 3
// Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
//   }





//Q no 4
// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// var img = document.getElementById("img");

// function mouseover() {
//   img.src = "on bulb.jpg";
// }

// function mouseout() {
//   img.src = "offbulb.jpg";
// }








//Q no 5
// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


// var counter = document.getElementById("counter");

// var count = 0;

// function countIncrease() {
//   count++;
//   counter.innerHTML = count;
// }

// function countDecrease() {
//   count--;
//   counter.innerHTML = count;
// }








