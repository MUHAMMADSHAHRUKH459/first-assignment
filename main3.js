// // Question Number 31
// let userNames : string [] = [];
// if (userNames.length > 0){
//    for (let username of userNames) {
//       if (username === 'admin'){
//          console.log("Hello admin, could you please view the status report?");
//       } else {
//          console.log(`Hello, ${username} , I appreciate you coming back to log in.`);
//       }
//    }
// } else {
//    console.log("we need to find some users");
// };
// // Question Number 32
// let current_users : string[] = ["Muneeb","Kamran","Shebaz","Irfan","Musa"];
// let new_users : string[] = ["shebaz","A.Rehman","Ahsan","muneeb","Sir Zia"];
// let current_users_lower = current_users.map(users => users.toLocaleLowerCase());
// for (let new_user of new_users){
//    let new_user_lower = new_user.toLowerCase()
//    if (current_users_lower.includes(new_user_lower)) {
//       console.log(`We apologize, but ${new_user} is not currently available. Kindly enter a different username.`);
//    } else {
//       console.log(`Well done! There is a username available : ${new_user}`);
//    }
// };
// // Question Number 33
// let numbers : number = [1,2,3,4,5,6,7,8,9];
// for (let number of numbers){
//    if (number === 1){
//       console.log(`${number}st`);
//    } 
//    else if (number === 2){
//       console.log(`${number}nd`)
//    }
//    else if (number === 3){
//       console.log(`${number}rd`);
//    }else {
//       console.log(`${number}th`);
//    }
// };
// // Question Number 34
// let favorite_pizzas : string[] = ["Chiken Tikka","Chiken Fajita","Cheese Pizza"];
// for (let pizza of favorite_pizzas){
//    console.log(pizza);
// }
// for (let pizza of favorite_pizzas){
//    console.log(`I like ${pizza} pizza `);
// }
// console.log("I'm a huge pizza lover!");
// // Question Number 35
// let animals : string[] = ["Cat","Dog","Lion"];
// for (let animal of animals){
//    console.log(animal);
// }
// for (let animal of animals){
//    console.log(`An ${animal.toLowerCase()} would be an excellent companion.`);
// }
// console.log("Any of these creatures would be wonderful companions!");
// // Question Number 36
// function make_shirt (size : string, message:string) : void{
//    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
// };
// make_shirt("large", "Hello, World!");
// // Question Number 37
// function make_shirt (size : string = 'large', message : string = 'I love TypeScript'): void {
//    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
// }
// make_shirt();
// make_shirt('medium');
// make_shirt('small','Hello world');
// // Question Number 38
// function describe_city (city : string, country : string = 'Pakistan') : void {
//    console.log(`${city} is in the ${country}`);
// }
// describe_city('karachi');
// describe_city('Berlin', 'Germany');
// describe_city('Moscow','Russia');
// // Question Number 39
// function city_country (city : string, country : string): string {
//    return `${city}, ${country}`
// }
// console.log('Lahore', 'Pakistan');
// console.log('Washington', 'USA');
// console.log('Gaza','Palestine');
// // Question Number 40
// function make_album (artist : string, title : string, tracks? : number):
// {artist : string, title : string, track? : string} {
//    let album : {artist : string, title : string, tracks? : number} = {
//       artist : artist,
//       title : title
//    }
//    if (tracks !== undefined) {
//       album.tracks = tracks;
//    }
//    return album
// }
// let album1 = make_album('Arijith Singh','Kessariya');
// let album2 = make_album('Honey Singh','Kalstar',12);
// let album3 = make_album('K.k','Ha tu hai');
// console.log(album1);
// console.log(album2);
// console.log(album3);
// // Question Number 41
// function show_magician(magicians : string[]):void{
//    for (let magician of magicians){
//       console.log(magician);
//    }
// }
// let magician_names : string[] = ["Dr.Strange","Captain America","Thor","The Witcher","Wonder Women"];
// show_magician(magician_names);
// // Question Number 42
// function make_great(magicians: string[]): string[] {
//    let great_magicians: string[] = [];
//    for (let magician of magicians) {
//        great_magicians.push(`the Great ${magician}`);
//    }
//    return great_magicians;
// }
// let magician_names: string[] = ["Dr.Strange", "Captain America", "Thor", "The Witcher", "Wonder Women"];
// let great_magicians: string[] = make_great(magician_names);
// function show_magicians(magicians: string[]): void {
//    for (let magician of magicians) {
//        console.log(magician);
//    }
// }
// show_magicians(great_magicians);
// // Question Number 43
// function make_great(magicians : string[]): string[] {
//    let great_magicians : string[] = [];
//    for (let magician of magicians){
//       great_magicians.push(`the great ${magicians}`)
//    }
//    return great_magicians;
// }
// let magician_names : string[] = ["Dr.Strange","Captain America","Thor","The Witcher","Wonder Women"];
// let magician_names_copy : string[] = magician_names.slice();
// let great_magicians : string[] = make_great(magician_names_copy);
// function show_magicians(magicians : string[]) : void {
//    for (let magician of magicians){
//       console.log(magician);
//    }
// }
// console.log('Original Magician');
// show_magicians(magician_names)
// console.log("Great Magician");
// show_magicians(great_magicians);
// // Question Number 44
// function makeSandwich (...items : string[]): void{
//    console.log('Sandwich Summary:');
//    console.log('Bread');
//    for (let item of items){
//       console.log(item);
//    }
// }
// console.log("Bread");
// console.log("Enjoy your Sandwich");
// makeSandwich('B.B.Q', 'Club', 'Cheese');
// makeSandwich('Italian','Ham');
// console.log('Avocado');
// // Question Number 45
// function carInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
//    let car: { manufacturer: string, modelName: string, [key: string]: any } = {
//        manufacturer: manufacturer,
//        modelName: modelName
//    };
//    for (let info of additionalInfo) {
//        for (let key in info) {
//           car[key] = info[key];
//        }
//    }
//    return car;
// }
// let carDetails = carInfo('Toyota', 'Tacoma', { color: 'red' }, { year: 2023 });
// console.log(carDetails);
