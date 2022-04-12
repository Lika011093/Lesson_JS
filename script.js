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

    
//ОПЕРАТОРЫ


        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        let totalPrice = 0;

        totalPrice += productPrice1 * productQuantity1;
        totalPrice += productPrice2 * productQuantity2;
        totalPrice += productPrice3 * productQuantity3;

        let freeShipping = totalPrice > 1000; // бесплатная доставка при заказе от 1000
        alert(`Общая сумма ${totalPrice}. Бесплатная доставка: ${freeShipping}`);
    
