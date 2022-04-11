'use strict';

//ПЕРЕМЕННЫЕ

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(leftBorderWidth);

/////////////////////////

// Классфикация типов даннх в JS

var number = 5;
var string = "Hello!";
var sum = Symbol();
var boollean = true;
null;
undefined;
var obj = {}; //объект

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

console.log(4/0);
console.log('string'*9);

//Массив
let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[2]);


alert("Hello World")

 // преобразование типов - преобразование значения одного типа в значение другого типа
 // преобразование может выполняться через вызов специальных фуркций или автоматически

        console.log("10" / "2"); // автоматическое преобразование
        console.log("10" + "2"); // исключение, при сложении строк преобразование к number не производится

        let value = "100"; // тип данных string
        console.log(typeof value);

        let newValue = Number(value); // преобразование к типу number
        console.log(typeof newValue);

        // при попытке преобразовать к числу значение, которое не может быть числом, функция Number вернет NaN
        let someText = "hello";
        let converted = Number(someText);
        console.log(converted);

        // при попытке преобразовать null, функция вернет 0
        console.log(Number(null));

        // при попытке преобразовать логическое значение, функиця Number для false вернет 0, для true - 1
        console.log(Number(true));
        console.log(Number(false));

        // при преобразовании строки, пробелы в начале и конце строки удаляются
        console.log(Number("   5   ") + 1);

    


