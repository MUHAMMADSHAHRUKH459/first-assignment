// Question number 18
// let place_to_visit : string[] = ["Saudi Arabia","Egypt","Palestine","USA","Italy"];
// // Print the array in its original order
// console.log("Original Order :" , place_to_visit);
// // Print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical Order :", [...place_to_visit].sort());
// // Show that the array is still in its original order
// console.log("Original Order (after Alphabetical sorting) : ",place_to_visit);
// // Print the array in reverse alphabetical order without changing the order of the original list
// console.log("Reverse Alphabetical order :",[...place_to_visit].sort().reverse());
// Show that the array is still in its original order
// console.log("Original Order (after reverse Alphabetical sorting : ",place_to_visit);
// // Reverse the order of the list
// place_to_visit.reverse();
// console.log("Reversed Order :", place_to_visit);
// Reverse the order of the list again to bring it back to its original order
// place_to_visit.reverse();
// console.log("Original Order (after reversing twice):", place_to_visit);
// // Sort the array so it's stored in alphabetical order
// place_to_visit.sort();
// console.log("Alphabetical order (after sorting):", place_to_visit);
// // Sort the array to change it to reverse alphabetical order
// place_to_visit.sort((a,b) => b.localeCompare(a));
// console.log("Reverse Alphabetical Order after sort :",place_to_visit);
// Question Number 19
// let guestList : string[] = ["Robert Kiosaki","Nikola tesla","Elon musk"];
// // Print the number of people being invited to dinner
// console.log(`Number of people being invited to dinner ${guestList.length}`);
// // Loop through the array and print messages of invitation
// guestList.forEach(guest => {
//    console.log(`Dear ${guest}, Please accept my invitation to supper. Come talk with me this evening about fascinating topics.`);
// });
// Question Number 20
// let languages : string[] = ["Urdu","English","Spanish","german","Arabic"];
// // Print the array of languages
// console.log("list of languages :",languages);
// Question Number 21
// Define TypeScript objects for different cars
// let car1 : {company : string, model : string , year : number} = {company : "toyota", model : "corrola", year : 2012};
// let car2 : {company : string, model : string , year : number} = {company : "Ford", model : "Taurus", year : 2018};
// let car3 : {company : string, model : string , year : number} = {company : "Ferrari", model : "Ferrari Portofino", year : 2017};
// console.log("Car1 :", car1);
// console.log("Car2 :", car2);
// console.log("Car3 :", car3);
// 
// let errorArr : number[] = [2,4,6,8,10];
//This will produce an undefined index 
// console.log(errorArr[12]);
// Question Number 23
// //1 
// let age : number = 21;
// console.log("Is age >= 21? I predict True");
// console.log(age >= 21);
// //2
// let guessNumber : boolean = false;
// console.log("If the user chooses a number other than 10, it is false.");
// console.log(guessNumber);
// //3
// let day : string = "Sunday";
// console.log("Is month === sunday? I predict True");
// console.log(day === 'Sunday');
// //4 
// let itsCold : boolean = false;
// console.log("It is cold? I predict false ");
// console.log(itsCold);
// // 5
// let isHoliday : boolean = true;
// console.log("is today holiday? I predict true");
// console.log(isHoliday);
// // 6
// let userAccount : boolean = false;
// console.log("is user have an account? I predict false ");
// console.log(userAccount);
// 7
// let temperature : number = 28;
// console.log("is temperature > 28? I predict true");
// console.log(temperature > 20);
// // 8
// let studentMarks : number = 45;
// console.log("is student marks !== 45? I predict false");
// console.log(studentMarks !== 45);
// //9
// let dayTime : string = "night";
// console.log("is day time === night? I predict true");
// console.log(dayTime === "night");
// // 10
// let pen : boolean = false;
// console.log("is i have !== pen? I predict false");
// console.log(pen);
// Question Number 24
// // 1
// let vegetable : string = "potato";
// console.log("is vegetable === potato? I predict true");
// console.log(vegetable === "potato");
// // 2
// let country : string = "pakistan";
// console.log("is country !== pakistan? I predict false");
// console.log(country !== "pakistan");
// // 3
// let age : number = 22;
// console.log("is age === 22? I predict true");
// console.log(age === 22);
// // 4
// let studentResult : number = 54;
// console.log("is studentResult < 54? I predict false");
// console.log(studentResult < 54);
// // 5
// let x : number = 10;
// let y : number = 2;
// console.log("is X greater than Y? I predict true");  // 5
// console.log(x > y);
// // 6
// console.log("is X less than y? I predict false");
// console.log(x < y);
// // 7
// let isCold : boolean = true;
// let raining : boolean = true;
// console.log("is it not cold and rainning? I predict false");
// console.log(!isCold && raining);
// //8
// console.log("is it raining and cold? i predict true");
// console.log(isCold || raining);
// // 9
// let vegetable : string[] = ["potato","onion","bringal","chille","carrot"];
// console.log("is onion is the vegetable? I predict true");
// console.log(vegetable.includes('onion'));
// //10
// console.log("is carrot is not vegetable? I predict false");
// console.log(!vegetable.includes('carrot'));
// // Question Number 25
// let alien_color : string = 'red'
// if (alien_color === 'red') {
//    console.log("Congrats! you earned 5 points");
// };
// let alien_color : string = 'green';
// if (alien_color === 'red'){
//    console.log("Congrats! you earned 5 points");
// };
// // Question Number 26
// let alien_color : string = "green";
// if (alien_color === 'green'){
//    console.log("Congrats! you earned 5 points");
// } 
// else {
//    console.log("Congrats! you earned 10 points");
// };
// let alien_color : string = "red"
// if (alien_color === 'green'){
//    console.log("Congrats! you earned 5 points");
// }
// else {
//    console.log("Congrats! you earned 10 points");
// };
// // Question Number 27
// // Alien is green
// let alien_color : string = "green"
// if (alien_color === 'green'){
//    console.log("Congrats! you earned 5 points");
// } 
// else if (alien_color === 'yellow'){
//    console.log("Congrats! you earned 5 points""");
// }
// else if (alien_color === 'red'){
//    console.log("Congrats! you earned 15 points");
// };
// // Alien is yellow
// let alien_color : string = "yellow";
// if (alien_color === 'green'){
//    console.log("Congrats! you earned 5 points");  
// } 
// else if (alien_color === 'yellow'){
//    console.log("Congrats! you earned 10 points");
// }
// else if (alien_color === 'red'){
//    console.log("Congrats! you earned 15 points");
// };
// // Alien is red
// let alien_color : string = "red";
// if (alien_color === 'green'){
//    console.log("Congrats! you earned 5 points");
// }
// else if (alien_color === 'yellow'){
//    console.log("Congrats! you earned 10 points");
// } 
// else if (alien_color === 'red'){
//    console.log("Congrats! you earned 15 points");
// };
// // Question Number 28
// let age: number = 21; 
// if (age < 2){
//    console.log("The person is a baby");
// }
// else if (age >= 2 && age < 4){
//    console.log("The person is a toddler");
// }
// else if (age >= 4 && age < 13){
//    console.log("The person is a kid");
// }
// else if (age >= 13 && age < 20){
//    console.log("The person is a teenager");
// }
// else if (age >= 20 && age < 65){
//    console.log("The person is a adult");
// }
// else {
//    console.log("The person is a elder");
// };
// // Question Number 29
// let favorite_fruits : string[] = ["apple","banana","cherry"];
// if (favorite_fruits.includes('apple')){
//    console.log('you really like apples!');
// }
// if (favorite_fruits.includes('banana')){
//    console.log("'you really like bananas!'");
// }
// if (favorite_fruits.includes('cherry')){
//    console.log('you really like cherry!');
// }
// if (favorite_fruits.includes('pineapple')){
//    console.log('you really like pineapples!');
// }
// if (favorite_fruits.includes('watermelon')){
//    console.log('you really like watermelons!');
// };
// // Question Number 30
// let userNames : string[] = ["admin","A.Rehman","Ahsan","Anik","Sir Zia"]
// for (let username of userNames) {
//    if (username === 'admin'){
//       console.log("Hello admin, could you please view the status report");
//    }else{
//       console.log(`Hello, ${username} , I appreciate you coming back to log in.`);
//    }
// };
