var name = "Mastanvali";
var age=23;
var percentage=90.8;
var isAlive=true;
var info={
    name:"Somethng",
    age:25,
    isAlive:true,
    language: ['english','hindi','telugu'],
    user:{
        img: 'https://www.google.com/mastanvlai',
    
          aa:{
            s:'ddd'
          }
        }
};
var language=['hindi','english'];

function sum(a,b){
    return a+b;
}
// var c=sum(10,20);
//print the values
console.log(sum(15,20));
console.log('name===>',typeof name);
console.log('age===>',typeof age);
console.log('percentage===>',typeof percentage);
console.log('isAlive===>',typeof isAlive);
console.log('info===>',typeof info);
console.log('language===>',typeof language);
console.log(language[0]);
console.log(language[1]);
console.log(info.language[0]);
console.log(info.language[2]);
console.log(info.user.img);
console.log(info.user.aa.s)

//Operators
//1.Assignment Operators:- +,-,*,%,++,--
var a=20;
var b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a==b);//Just check the value only
console.log(a===b); //check the value and datatype also
console.log(a++);
console.log(b++);
console.log(++a);
console.log(++b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//functions

function abc(a,b){
  return a+b
}
var c=abc(10,50)
var d=abc(100,200)
console.log(c)
console.log(d)