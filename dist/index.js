"use strict";
// var message : string = 'Hello World'
// console.log(message)
// class Greetings {
//     greet(): void{
//         console.log("Hii this is Greet Method in Greetings class")
//     }
// }
// var objts = new Greetings();
// objts.greet();
// var part1 : string[] = ['noida', 'delhi', 'gujarat', 'cheenai'];
// var part2 : number[] = [76, 86, 96, 100]
// var part3 : boolean[] = [true, false, false]
// var part4 : Array<String> = ['greater noida', 'bulandshahr', 'aligarh']
// var part5 : String[] = ['noida', 'delhi', 'gujarat', 'cheenai'];
// console.log(part1)
// console.log(part2)
// console.log(part3)
// console.log(part4)
// console.log(part5)
// function fnc(a: string, b:any){
//     return a+b
// }
// console.log(fnc('harshit',5000))
// function fnc(a: boolean, b:string) : void{
//     if(a === true && b == "Harshit"){
//         console.log('what you doing')
//     }
// }
// console.log(fnc(true,'Harshit'))
// let num : number = 1;
// while(num <= 10){
//     if( num % 5 == 0 ){
//         console.log('Number divided by 5 between 1 to 10 ==== ' + num)
//     }
//     num++
// }
// let num =0;
// let count:number =0;
// for(num=0; num<=20; num++){
//     if(num % 2 == 0){
//         console.log('even number == '+num)
//         continue
//     }
//     count++
// }
// console.log('no of  numbers ---'+count)
// type Info ={
//     id:number,
//     name: string,
//     address:string,
//     married?:boolean,
// }
// let Employee1:Info ={
//     id:69,
//     name:'Harshit',
//     address:' Greater noida',
//     married:false,
// }
// let Employee2:Info ={
//     id:79,
//     name:'Jadon',
//     address:'noida',
// }
// function output(userData:Info) : void{
//     console.log(userData)
//     console.log(userData.id)
//     console.log(userData.name)
//     console.log(userData.address)
//     console.log(userData.married)
// }
// output(Employee2)
// function disp(name:string|string[]) { 
//     if(typeof name == "string") { 
//        console.log(name) 
//     } else { 
//        var i; 
//        for(i = 0;i<name.length;i++) { 
//           console.log(name[i])
//        } 
//     } 
//  } 
//  disp("mark") 
//  console.log("Printing names array....") 
//  disp(["Mark","Tom","Mary","John"])
//  enum Direction {
//     Up = 11,
//     Down,
//     Left,
//     Right,
// }
// function enumCheck(msg : string, movement : Direction){
//     console.log(msg+" :: "+movement)
//     switch(movement){
//         case 11 :
//             console.log("1 >> ",movement)
//         break;
//         case 12 :
//             console.log("2 >> ",movement)
//         break;
//         case 13 :
//             console.log("3 >> ",movement)
//         break;
//         case 14 :
//             console.log("4 >> ",movement)
//         break;
//     }
// }
// enumCheck("Hello World", Direction.Up)
// enumCheck("Hello World", Direction.Down)
// enumCheck("Hello World", Direction.Left)
// enumCheck("Hello World", Direction.Right)
// console.log("TypeScript Number Properties: "); 
// console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
// console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
// console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
// console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
// var arr_name:number[] = new Array(5);
// for( var i=1; i<arr_name.length; i++){
//     arr_name[i] = i * 2
//     console.log(arr_name[i])
// }
// var names:string[] = new Array('Mary','Tom','Jack','Jill')
// for(var i=0; i<names.length; i++){
//     console.log(names[i])
// }
// interface Details {
//     firstName:string,
//     lastName:string,
//     sayHi: ()=>string
// }
// var Customer:Details={
//     firstName:'Harshit',
//     lastName:'Jadon',
//     sayHi:():string=>{return 'Hii there'}
// }
// var Employee:Details ={
//     firstName:'Magic',
//     lastName:'Software',
//     sayHi:()=>{return 'Helllo'}
// }
// console.log(Customer)
// console.log(Customer.firstName)
// console.log(Customer.lastName)
// console.log(Customer.sayHi())
