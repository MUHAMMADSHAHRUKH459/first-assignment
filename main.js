// TypeScript Assignment
// Question number 1
// console.log("Hello World");
// Question number 2
// let myName : string = "M.Shahrukh";
// let myMsg : string = "is a Web Developer";
// console.log(myName + ' ' + myMsg);
// Question number 3
// let personName : string = "M.Shahrukh";
// console.log("Lowercase:", personName.toLowerCase());
// // Print the name in uppercase
// console.log("Uppercase:", personName.toUpperCase());
// Print the name in titlecase
// console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// Question number 4
// let quote : string = "The best among you is the one who doesn’t harm others with his tongue and hands.";
// let respected_author : string = "Prophet Muhammad peace be upon him";
// console.log(quote + ' ' + respected_author);
// Question number 5
// let quote : string = "The best among you is the one who doesn’t harm others with his tongue and hands.";
// let respected_author : string = "Prophet Muhammad peace be upon him";
// let message = (quote+ ' : ' + respected_author);
// console.log(message);
// Question number 6
// let nameWithWhitespace : string = "\t \n M.Shahrukh \n \t";
// console.log("nameWithWhitespace :" , nameWithWhitespace);
// let strippedName : string = nameWithWhitespace.trim();
// console.log("strippedName :" , strippedName);
// Question number 7
//Addition 
// let add : number = 5 + 3;
// console.log(add);
// // Subtraction
// let sub : number = 12 - 4 ;
// console.log(sub);
// // Multiplication
// let multi : number = 4 * 2;
// console.log(multi);
// // Division
// let div : number = 16 / 2;
// console.log(div);
// Question number 8
// console.log(4 + 4);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(32 / 4);
// Question number 9
// let myFavNum : number = 99;
// let msg : string = `My favorite number is ${myFavNum}`;
// console.log(msg);
// Question number 10
// My-Name : Muhammad Shahrukh
// Date : 22/02/2024
// This program prints "Thanks to all teacher who teach us"
// console.log("Thanks to all teacher who teach us");
// Question number 11
// let names : string[] = ["A.Rehman","Ahsan","Milad","Anik"];
// for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
// };
// Question number 12
// let names : string[] = ["A.Rehman","Ahsan","Milad","Anik"];
// let message : string = "Hello";
// for (i = 0; i < names.length; i++) {
//    console.log(message+ ' ' +names[i]);
// };
// Question number 13
// let favTransport : string[] = ["Car"];
// favTransport.forEach(transport => {
//    console.log("I would like to own a " + transport + '.');
// })
// Question number 14
// let guesList : string[] = ["Sam Altman", "Irfan Malik", "Jeff Bezos"];
// guesList.forEach(guest => {
//    console.log(`Dear ${guest} I would like to invite you to dinner. Please join me in evening`);
// });
// Question number 15
// let guesList : string[] = ["Sam Altman", "Irfan Malik", "Jeff Bezos"];
// console.log(`Dear, ${guesList[0]} The dinner has been canceled due to some reason, apologies for this.`)
// guesList[0] = "Abu Ubaida";
// guesList.forEach(guest => {
//       console.log(`Dear ${guest} I would like to invite you to dinner Please join me in evening for some tech conversation.`);
// });
// Question number 16
// let guesList : string[] = ["Sam Altman", "Irfan Malik", "Jeff Bezos"];
// console.log("Fantastic news! We've relocated the supper table to accommodate additional people.");
// // Add one new guest to the beginning of the array
// guesList.unshift("Imran Khan"); 
// // Add one new guest to the middle of the array
// guesList.splice(Math.floor(guesList.length / 2), 0, "Bill Gates");
// // Use push() to add one new guest to the end of the list
// guesList.push("Robert Kiosaki");
// // print invitation message for each guest
// guesList.forEach (guest => {
// console.log(`Dear ${guest},  Please accept my invitation to supper. Come talk with me this evening about fascinating topics. `);
// });
// Question number 17
// let guesList : string[] = ["Sam Altman", "Irfan Malik", "Jeff Bezos"];
// console.log("I can only invite two guests to supper because the new table will not arrive in time.");
// // Remove guests from the list until only two names remain
// while (guesList.length > 2) {
//    const removeGuest = guesList.pop()
//    console.log(`Sorry! ${removeGuest}, I can't Invite you to dinner`);
// };
// guesList.forEach(guest => {
//    console.log(`Dear ${guest}, We still want to have supper with you. Come talk with me this evening about fascinating topics. `);   
// });
// // Remove the last two names from the list
// guesList.splice(0,guesList.length);
// // Print the empty list to confirm
// console.log("GuestList" , guesList);
