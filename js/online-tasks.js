// goit-39-js-hw-01
console.log('');
console.log('~~~ goit-39-js-hw-01 ~~~');
console.log('');

// 1.1
console.log('');
console.log('~~~ Task 1.1 ~~~');
console.log('');
// Задание 1
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000
// Change code below this line

const productName1 = 'Droid';
console.log(productName1);
// 'Droid'

const pricePerItem1 = 2000;
console.log(pricePerItem1);
// 2000

// 1.2
console.log('');
console.log('~~~ Task 1.2 ~~~');
console.log('');
// Задание 2
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
// Переопредели значения переменных pricePerItem и productName после их объявления.

let productName2 = 'Droid';
let pricePerItem2 = 2000;

// Change code below this line

pricePerItem2 = 3500;
productName2 = 'Repair droid';

console.log(productName2);
console.log(pricePerItem2);
// Repair droid
// 3500

// 1.3
console.log('');
console.log('~~~ Task 1.3 ~~~');
console.log('');
/*
Объяви следующие переменные, используя ключевое слово const или let и присвой им соответствующие значения.
topSpeed - число 160.
distance - число 617.54.
login - строка 'mango935'.
isOnline - буль true.
isAdmin - буль false.
*/

// Change code below this line
const topSpeed3 = 160;
const distance3 = 617.54;
const login3 = 'mango935';
const isOnline3 = true;
const isAdmin3 = false;

console.log(topSpeed3);
console.log(distance3);
console.log(login3);
console.log(isOnline3);
console.log(isAdmin3);
// 160
// 617.54
// mango935
// true
// false

// 1.4
console.log('');
console.log('~~~ Task 1.4 ~~~');
console.log('');
/*
Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity -
количество единиц товара в заказе
*/

const pricePerItem4 = 3500;
const orderedQuantity4 = 4;

// Change code below this line
// const totalPrice4 = pricePerItem4;
// 14000
const totalPrice4 = pricePerItem4 * orderedQuantity4;
// console.log(totalPrice4);
// 14000

// 1.5
console.log('');
console.log('~~~ Task 1.5 ~~~');
console.log('');
/*
Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>,
price per item is < цена товара > credits". Где <имя товара> и <цена товара> это значения переменных
productName и pricePerItem. Используй синтаксис шаблонных строк.
*/

const productName5 = 'Droid';
const pricePerItem5 = 3500;

// Change code below this line
const message5 = `You picked ${productName5}, price per item is ${pricePerItem5} credits`;
console.log(message5);
// You picked Droid, price per item is 3500 credits

// 1.6
console.log('');
console.log('~~~ Task 1.6 ~~~');
console.log('');
/*
Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа.
Объяви переменные и присвой им соответствующие значения:
pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате "You ordered droids worth
<total price> credits. Delivery (<delivery fee> credits) is included in total price."
*/

let pricePerDroid6 = 800;
let orderedQuantity6 = 6;
let deliveryFee6 = 50;
let totalPrice6 = pricePerDroid6 * orderedQuantity6 + deliveryFee6;
const message6 = `You ordered droids worth ${totalPrice6} credits. Delivery (${deliveryFee6} credits) is included in total price.`;
console.log(message6);
// You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price.

// 1.7
console.log('');
console.log('~~~ Task 1.7 ~~~');
console.log('');
/*
Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
После объявления вызови функцию sayHi.
*/

function sayHi7() {
    console.log('Hello, this is my first function!');
}
sayHi7();
// Hello, this is my first function!

// 1.8
console.log('');
console.log('~~~ Task 1.8 ~~~');
console.log('');
/*
Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c,
которые будут получать значения аргументов при её вызове.
Дополни console.log так, чтобы он логировал строку "Addition result equals <result>", где <result> - это сумма переданных чисел.
*/

function add8(a8, b8, c8) {
    console.log(`Addition result equals ${a8 + b8 + c8}`);
    // Change code above this line
}
add8(15, 27, 10);
add8(10, 20, 30);
add8(5, 10, 15);
// Addition result equals 52
// Addition result equals 60
// Addition result equals 30

// 1.9
console.log('');
console.log('~~~ Task 1.9 ~~~');
console.log('');
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add9(a9, b9, c9) {
    // return a9 + b9 + c9;
    console.log(a9 + b9 + c9);
}
add9(15, 27, 10);
add9(10, 20, 30);
add9(5, 10, 15);
// 52
// 60
// 30

// 1.10
console.log('');
console.log('~~~ Task 1.10 ~~~');
console.log('');
/* 
Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра,
значения которых будут задаваться во время её вызова.
name - название товара
price - цена товара
Дополни код функции так, чтобы в переменную message записывалась строка
"You picked <product name>, price per item is <product price> credits",
где <product name> и <product price> это значения параметров name и price.
Используй синтаксис шаблонных строк. */

function makeMessage10(name10, price10) {
    // Change code below this line
    const message10 = `You picked ${name10}, price per item is ${price10} credits`;
    // Change code above this line
    // return message10;
    console.log(message10);
}
makeMessage10('Radar', 6150);
// You picked Radar, price per item is 6150 credits
makeMessage10('Scanner', 3500);
// You picked Scanner, price per item is 3500 credits
makeMessage10('Reactor', 8000);
// You picked Reactor, price per item is 8000 credits
makeMessage10('Engine', 4070);
// You picked Engine, price per item is 4070 credits

// 1.11
console.log('');
console.log('~~~ Task 1.11 ~~~');
console.log('');
/* Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра,
значения которых будут задаваться во время её вызова.
orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая
сумма покупки, результат умножения кол-ва товаров на цену одного. */

function calculateTotalPrice11(orderedQuantity11, pricePerItem11) {
    // Change code below this line
    const totalPrice11 = pricePerItem11 * orderedQuantity11;

    // Change code above this line
    // return totalPrice11;
    console.log(totalPrice11);
}
calculateTotalPrice11(5, 100);
// 500
calculateTotalPrice11(8, 60);
// 480
calculateTotalPrice11(3, 400);
// 1200
calculateTotalPrice11(1, 3500);
// 3500
calculateTotalPrice11(12, 70);
// 840
calculateTotalPrice11(10, 5);
// 50

// 1.12
console.log('');
console.log('~~~ Task 1.12 ~~~');
console.log('');
/* 
Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение
о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.
orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате:
"You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
 Не забудь о цене доставки при вычислениях общей стоимости. */

function makeOrderMessage12(orderedQuantity12, pricePerDroid12, deliveryFee12) {
    // Change code below this line
    const totalPrice12 = pricePerDroid12 * orderedQuantity12 + deliveryFee12;
    const message12 = `You ordered droids worth ${totalPrice12} credits. Delivery (${deliveryFee12} credits) is included in total price.`;
    // Change code above this line
    // return message12;
    console.log(message12);
}
makeOrderMessage12(4, 300, 100);
// You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price.
makeOrderMessage12(2, 100, 50);
// You ordered droids worth 250 credits. Delivery (50 credits) is included in total price.
makeOrderMessage12(10, 70, 200);
// You ordered droids worth 900 credits. Delivery (200 credits) is included in total price.
makeOrderMessage12(2, 5, 10);
// You ordered droids worth 20 credits. Delivery (10 credits) is included in total price.

// 1.13
console.log('');
console.log('~~~ Task 1.13 ~~~');
console.log('');
/* Функция isAdult объявляет один параметр age(возраст), значение которого будет задаваться во время её вызова.
Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
Человек считается совершеннолетним в возрасте 18 лет и старше.
Объявлена функция isAdult(age)
В выражении проверки используется оператор >=
Вызов isAdult(20) возвращает true
Вызов isAdult(14) возвращает false
Вызов isAdult(8) возвращает false
Вызов isAdult(37) возвращает true */

function isAdult13(age13) {
    const passed13 = age13 >= 18;
    // return passed13;
    console.log(passed13);
}
isAdult13(20);
// true
isAdult13(14);
// false
isAdult13(8);
// false
isAdult13(37);
// true

// 1.14
console.log('');
console.log('~~~ Task 1.14 ~~~');
console.log('');
/* Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки
- буль true или false.Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.Введённый пароль передаётся
в параметр password.Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей.
Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.
Объявлена функция isValidPassword(password)
В выражении проверки паролей использован оператор ===
Вызов isValidPassword("mangodab3st") возвращает false
Вызов isValidPassword("kiwirul3z") возвращает false
Вызов isValidPassword("jqueryismyjam") возвращает true */

function isValidPassword14(password14) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch14 = password14 === SAVED_PASSWORD;
    // return isMatch14;
    console.log(isMatch14);
}
isValidPassword14('mangodab3st');
// false
isValidPassword14('kiwirul3z');
// false
isValidPassword14('jqueryismyja');
// false
isValidPassword14('jqueryismyjam');
// true

// 1.15
console.log('');
console.log('~~~ Task 1.15 ~~~');
console.log('');
/*
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor".
Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=
Вызов checkAge(20) возвращает "You are an adult"
Вызов checkAge(8) возвращает "You are a minor"
Вызов checkAge(14) возвращает "You are a minor"
Вызов checkAge(38) возвращает "You are an adult" */

function checkAge15(age15) {
    let message15;
    if (age15 >= 18) {
        message15 = 'You are an adult';
    } else {
        message15 = 'You are a minor';
    }
    // return message15;
    console.log(message15);
}
checkAge15(20);
// You are an adult
checkAge15(8);
// You are a minor
checkAge15(14);
// You are a minor
checkAge15(38);
// You are an adult
checkAge15(21);
// You are an adult

// 1.16
console.log('');
console.log('~~~ Task 1.16 ~~~');
console.log('');
/* 
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
Она объявляет два параметра, значения которых будут задаваться во время её вызова:
available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления, дополни код функции так, что:
Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается
строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, our manager will contact you.".
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
*/

function checkStorage16(available16, ordered16) {
    let message16;
    if (available16 < ordered16) {
        message16 = 'Not enough goods in stock!';
    } else {
        message16 = 'Order is processed, our manager will contact you.';
    }
    // return message16;
    console.log(message16);
}
checkStorage16(100, 50);
// Order is processed, our manager will contact you.
checkStorage16(100, 130);
// Not enough goods in stock!
checkStorage16(200, 20);
// Order is processed, our manager will contact you.
checkStorage16(200, 150);
// Order is processed, our manager will contact you.
checkStorage16(150, 180);
// Not enough goods in stock!
checkStorage16(100, 99);
// Order is processed, our manager will contact you.
checkStorage16(100, 99.9);
// Order is processed, our manager will contact you.
checkStorage16(100, 100);
// Order is processed, our manager will contact you.
checkStorage16(100, 101);
// Not enough goods in stock!

// 1.17
console.log('');
console.log('~~~ Task 1.17 ~~~');
console.log('');
/*
Замени выражения со стандартными математеческими операторами на комбинированный оператор
присвоения с добавлением, вычитанием, умножением и делением.
Значение переменной a равно 7.
Использован оператор +=.
Значение переменной b равно 6.
Использован оператор -=.
Значение переменной c равно 45.
Использован оператор *=.
Значение переменной d равно 2.
Использован оператор /=.
*/

let a171 = 5;
let b171 = 10;
let c171 = 15;
let d171 = 20;

a171 = a171 + 2;
b171 = b171 - 4;
c171 = c171 * 3;
d171 = d171 / 10;
console.log(a171, b171, c171, d171);
// // 7 6 45 2

// Change code below this line
let a172 = 5;
let b172 = 10;
let c172 = 15;
let d172 = 20;

a172 += 2;
b172 -= 4;
c172 *= 3;
d172 /= 10;
console.log(a172, b172, c172, d172);
// 7 6 45 2

// 1.18
console.log('');
console.log('~~~ Task 1.18 ~~~');
console.log('');
/*
Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.
Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает
сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
pricePerDroid - цена одного дроида;
orderedQuantity - кол-во заказанных дроидов;
customerCredits - сумма средств на счету клиента.
Дополни её следующим функционалом:
Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
Добавь проверку сможет ли клиент оплатить заказ:
если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 
'Недостаточно средств на счету!';
в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение:
'Вы купили <число> дроидов, на счету осталось <число> кредитов'.
Тесты
Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, на счету осталось 8000 кредитов'.
Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов, на счету осталось 12000 кредитов'.
Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на счету осталось 0 кредитов'.
*/

function makeTransaction18(pricePerDroid18, orderedQuantity18, customerCredits18) {
    let message18;
    // Change code below this line
    const totalPrice18 = pricePerDroid18 * orderedQuantity18;
    if (totalPrice18 > customerCredits18) {
        message18 = 'Insufficient funds!';
    } else {
        message18 = `You ordered ${orderedQuantity18} droids, you have ${
            customerCredits18 - totalPrice18
        } credits left`;
    }
    // Change code above this line
    // return message18;
    console.log(message18);
}
makeTransaction18(100, 50, 4999);
// Insufficient funds!
makeTransaction18(100, 50, 5000);
// You ordered 50 droids, you have 0 credits left
makeTransaction18(100, 50, 5000.01);
// You ordered 50 droids, you have 0.010000000000218279 credits left
makeTransaction18(100, 50, 5000.1);
// You ordered 50 droids, you have 0.1000000000003638 credits left
makeTransaction18(100, 50, 5001);
// You ordered 50 droids, you have 1 credits left

// 1.19
console.log('');
console.log('~~~ Task 1.19 ~~~');
console.log('');
/*
Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора
в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка
'Отменено пользователем!'.
Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка
'Добро пожаловать!'.
Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка
'Доступ запрещен, неверный пароль!'.
Тесты
Объявлена функция checkPassword(password).
Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
*/

function checkPassword19(password19) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message19;
    if (password19 === null) {
        message19 = 'Canceled by user!';
    } else if (password19 === ADMIN_PASSWORD) {
        message19 = 'Welcome!';
    } else {
        message19 = 'Access denied, wrong password!';
    }
    // return message19;
    console.log(message19);
}
checkPassword19(null);
// Canceled by user!
checkPassword19(`jqueryismyja`);
// Access denied, wrong password!
checkPassword19(`jqueryismyjam`);
// Welcome!

// 1.20
console.log('');
console.log('~~~ Task 1.20 ~~~');
console.log('');
/*
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
Она объявляет два параметра, значения которых будут задаваться во время её вызова. 
available - доступное количество товаров на складе.
ordered - количество единиц товара в заказе.
Используя ветвления, дополни код функции так, чтобы:
Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка
'В заказе еще нет товаров'.
Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка
'Слишком большой заказ, на складе недостаточно товаров!'.
В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.
Тесты
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
Вызов checkStorage(70, 0) возвращает 'В заказе еще нет товаров'.
Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.
*/

function checkStorage20(available20, ordered20) {
    let message20;
    if (ordered20 === 0) {
        message20 = 'There are no products in the order!';
    } else if (ordered20 > available20) {
        message20 = 'Your order is too large, there are not enough items in stock!';
    } else {
        message20 = 'The order is accepted, our manager will contact you';
    }
    // return message20;
    console.log(message20);
}
checkStorage20(100, 99);
// The order is accepted, our manager will contact you
checkStorage20(100, 100);
// The order is accepted, our manager will contact you
checkStorage20(100, 101);
// Your order is too large, there are not enough items in stock!

// 1.21
console.log('');
console.log('~~~ Task 1.21 ~~~');
console.log('');
/*
Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра,
значения которых будут задаваться во время её вызова:
number - число, вхождение которого проверяется.
start - начало числового промежутка.
end - конец числового промежутка.
Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end.
То есть число должно быть больше либо равно start и меньше либо равно end.
Результатом выражения проверки будет буль true или false.
Тесты
Объявлена функция isNumberInRange(start, end, number).
В выражении проверки использован оператор &&.
Вызов isNumberInRange(10, 30, 17) возвращает true.
Вызов isNumberInRange(10, 30, 5) возвращает false.
Вызов isNumberInRange(20, 50, 24) возвращает true.
Вызов isNumberInRange(20, 50, 76) возвращает false.
*/

function isNumberInRange21(start21, end21, number21) {
    const isInRange21 = number21 > start21 && number21 < end21; // Change this line
    // return isInRange21;
    console.log(isInRange21);
}
isNumberInRange21(90, 100, 89);
// false
isNumberInRange21(90, 100, 90);
// false
isNumberInRange21(90, 100, 95);
// true
isNumberInRange21(90, 100, 100);
// false
isNumberInRange21(90, 100, 100.001);
// false
isNumberInRange21(90, 100, 101);
// false

// 1.22
console.log('');
console.log('~~~ Task 1.22 ~~~');
console.log('');
/*
Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. 
Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
Присвой переменной canAccessContent выражение проверки подписки.
Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ.
Результатом выражения проверки будет буль true или false.
Тесты
Объявлена функция checkIfCanAccessContent(subType).
В выражении проверки использован оператор ||.
Вызов checkIfCanAccessContent('pro') возвращает true.
Вызов checkIfCanAccessContent('starter') возвращает false.
Вызов checkIfCanAccessContent('vip') возвращает true.
Вызов checkIfCanAccessContent('free') возвращает false.
*/

function checkIfCanAccessContent22(subType22) {
    const canAccessContent22 = subType22 === 'pro' || subType22 === 'vip';
    // return canAccessContent22;
    console.log(canAccessContent22);
}
checkIfCanAccessContent22(`basic`);
// false
checkIfCanAccessContent22(`pro`);
// true
checkIfCanAccessContent22(`vip`);
// true

// 1.23
console.log('');
console.log('~~~ Task 1.23 ~~~');
console.log('');
/*
Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. 
То есть число должно быть меньше либо равно start и больше либо равно end.
Результатом выражения проверки будет буль true или false.
Она объявляет три параметра, значения которых будут задаваться во время её вызова:
number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
Тесты
Объявлена функция isNumberNotInRange(start, end, number).
В выражении использован оператор !.
Вызов isNumberNotInRange(10, 30, 17) возвращает false.
Вызов isNumberNotInRange(10, 30, 5) возвращает true.
*/

function isNumberNotInRange23(start23, end23, number23) {
    const isInRange23 = number23 >= start23 && number23 <= end23;
    const isNotInRange23 = !isInRange23; // Change this line
    // return isNotInRange23;
    console.log(isNotInRange23);
}
isNumberNotInRange23(90, 100, 89);
// true
isNumberNotInRange23(90, 100, 90);
// false
isNumberNotInRange23(90, 100, 95);
// false
isNumberNotInRange23(90, 100, 100);
// false
isNumberNotInRange23(90, 100, 100.001);
// true
isNumberNotInRange23(90, 100, 101);
// true

// 1.24
console.log('');
console.log('~~~ Task 1.24 ~~~');
console.log('');
/*
Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent)
в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции
как результат её работы. Используя ветвления и логические операторы, дополни код функции.
Если потрачено от 50 000 или больше кредитов - скидка 10% (золотой партнёр);
Если потрачено от 20 000 (включительно) до 50 000 кредитов - скидка 5% (серебрянный партнёр);
Если потрачено от 5 000 (включительно) до 20 000 кредитов - скидка 2% (бронзовый партнёр);
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр);
Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
Тесты
Объявлена функция getDiscount(totalSpent).
Вызов getDiscount(137000) возвращает 0.1.
Вызов getDiscount(46900) возвращает 0.05.
Вызов getDiscount(8250) возвращает 0.02.
Вызов getDiscount(1300) возвращает 0.
Вызов getDiscount(5000) возвращает 0.02.
Вызов getDiscount(20000) возвращает 0.05.
Вызов getDiscount(50000) возвращает 0.1.
*/

function getDiscount24(totalSpent24) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount24;
    if (totalSpent24 >= 50000) {
        discount24 = GOLD_DISCOUNT;
    } else if (totalSpent24 >= 20000 && totalSpent24 < 50000) {
        discount24 = SILVER_DISCOUNT;
    } else if (totalSpent24 >= 5000 && totalSpent24 < 20000) {
        discount24 = BRONZE_DISCOUNT;
    } else if (totalSpent24 < 5000) {
        discount24 = BASE_DISCOUNT;
    }
    // return discount24;
    console.log(discount24);
}
getDiscount24(4999);
// 0
getDiscount24(5000);
// 0.02
getDiscount24(5001);
// 0.02
getDiscount24(19999);
// 0.02
getDiscount24(20000);
// 0.05
getDiscount24(20001);
// 0.05

// 1.25
console.log('');
console.log('~~~ Task 1.25 ~~~');
console.log('');
/*
Задание
Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
Тесты
Объявлена функция checkStorage(available, ordered).
Использован тернарный оператор.
Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.
*/

// Task
function checkStorage251(available251, ordered251) {
    let message251;
    // Change code below this line
    if (ordered251 > available251) {
        message251 = 'Not enough goods in stock!';
    } else {
        message251 = 'The order is accepted, our manager will contact you';
    }
    // Change code above this line
    // return message251;
    console.log(message251);
}
checkStorage251(100, 99);
// The order is accepted, our manager will contact you
checkStorage251(100, 100);
// The order is accepted, our manager will contact you
checkStorage251(100, 101);
// Not enough goods in stock!

// Solution
function checkStorage252(available252, ordered252) {
    let message252;
    // Change code below this line
    message252 =
        available252 >= ordered252
            ? 'The order is accepted, our manager will contact you'
            : 'Not enough goods in stock!';
    // Change code above this line
    // return message252;
    console.log(message252);
}
checkStorage252(100, 99);
// The order is accepted, our manager will contact you
checkStorage252(100, 100);
// The order is accepted, our manager will contact you
checkStorage252(100, 101);
// Not enough goods in stock!

// 1.26
console.log('');
console.log('~~~ Task 1.26 ~~~');
console.log('');
/*
Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора
(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате. Используя тернарный оператор,
дополни функцию так, что:
Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.
Тесты
Объявлена функция checkPassword(password).
Использован тернарный оператор.
Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещён, неверный пароль!'.
Вызов checkPassword('r3actsux') возвращает 'Доступ запрещён, неверный пароль!'.
*/

function checkPassword26(password26) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message26;
    message26 =
        password26 == ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
    // return message26;
    console.log(message26);
}
checkPassword26(`jqueryismyja`);
// Access denied, wrong password!
checkPassword26(`jqueryismyjam`);
// Access is allowed!

// 1.27
console.log('');
console.log('~~~ Task 1.27 ~~~');
console.log('');
/*
Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type),
проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
Если значение параметра type это строка:
'starter' - цена подписки 0 кредитов.
'professional' - цена подписки 20 кредитов.
'organization' - цена подписки 50 кредитов.
Изначально в теле функции была инструкция if...else, которая выглядела вот так.
if (type === 'starter') {
  price = 0;
} else if (type === 'professional') {
  price = 20;
} else if (type === 'organization') {
  price = 50;
}
После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.
Тесты
Объявлена функция getSubscriptionPrice(type).
Вызов getSubscriptionPrice('professional') возвращает число 20.
Вызов getSubscriptionPrice('organization') возвращает число 50.
Вызов getSubscriptionPrice('starter') возвращает число 0.
*/

function getSubscriptionPrice(type) {
    let price27;
    switch (type) {
        case 'starter':
            price27 = 0;
            break;
        case 'professional':
            price27 = 20;
            break;
        case 'organization':
            price27 = 50;
            break;
    }
    // return price27;
    console.log();
    price27;
}

// 1.28
console.log('');
console.log('~~~ Task 1.28 ~~~');
console.log('');
/*
Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора
в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
Если значение параметра password:
равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
Тесты
Объявлена функция checkPassword(password).
Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.
*/

function checkPassword28(password28) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message28;
    switch (password28) {
        case ADMIN_PASSWORD:
            message28 = 'Welcome!';
            break;
        case null:
            message28 = 'Canceled by user!';
            break;
        default:
            message28 = 'Access denied, wrong password!';
    }
    // return message28;
    console.log(message28);
}
checkPassword28(`jqueryismyja`);
// Access denied, wrong password!
checkPassword28(`jqueryismyjam`);
// Welcome!

// 1.29
console.log('');
console.log('~~~ Task 1.29 ~~~');
console.log('');
/*
Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country)
и возвращать сообщение о результате, хранящееся в переменной message. Обязательно используй инструкцию switch.
Формат возвращаемой строки:
Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.
Список стран и стоимость доставки:
Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Ямайка - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку
'Извините, в вашу страну доставки нет'
Тесты
Объявлена функция getShippingCost(country).
В теле функции использована инструкция switch.
Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.
*/

function getShippingCost29(country29) {
    let message29;
    switch (country29) {
        case 'China':
            message29 = 'Shipping to China will cost 100 credits';
            break;
        case 'Chile':
            message29 = 'Shipping to Chile will cost 250 credits';
            break;
        case 'Australia':
            message29 = 'Shipping to Australia will cost 170 credits';
            break;
        case 'Jamaica':
            message29 = 'Shipping to Jamaica will cost 120 credits';
            break;
        default:
            message29 = 'Sorry, there is no delivery to your country';
    }
    // return message29;
    console.log(message29);
}
getShippingCost29(`Italia`);
// Sorry, there is no delivery to your countrya
getShippingCost29(`China`);
// Shipping to China will cost 100 credits
getShippingCost29(`Chile`);
// Shipping to Chile will cost 250 credits
getShippingCost29(`Australia`);
// Shipping to Australia will cost 170 credits
getShippingCost29(`Jamaica`);
// Shipping to Jamaica will cost 120 credits

// 1.30
console.log('');
console.log('~~~ Task 1.30 ~~~');
console.log('');
/*
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина.
Дополни шаблонную строку в переменной message длиной строки из параметра name.
Тесты
Объявлена функция getNameLength(name).
Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.
*/

function getNameLength30(name30) {
    const message30 = `Name ${name30} is ${name30.length} characters long`;
    // return message30;
    console.log(message30);
}
getNameLength30(`Shipping to Jamaica will cost 120 credits`);
// Name Shipping to Jamaica will cost 120 credits is 41 characters long
getNameLength30(`a = b`);
// Name a = b is 5 characters long

// 1.31
console.log('');
console.log('~~~ Task 1.31 ~~~');
console.log('');
/*
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
Тесты
Объявлена переменная courseTopic.
Значение переменной courseTopic это строка 'JavaSript для начинающих'.
Объявлена переменная courseTopicLength.
Значение переменной courseTopicLength это число 24.
Объявлена переменная firstElement.
Значение переменной firstElement это строка 'J'.
Объявлена переменная lastElement.
Значение переменной lastElement это строка 'х'.
*/

// Task
const courseTopic311 = 'JavaScript essentials';
// Change code below this line
const courseTopicLength311 = courseTopic311;
const firstElement = courseTopic311;
const lastElement = courseTopic311;
// Change code above this line

// Solution
const courseTopic312 = 'JavaScript essentials';
const courseTopicLength312 = courseTopic312.length;
const firstElement312 = courseTopic312[0];
const lastElement312 = courseTopic312[courseTopic312.length - 1];
console.log(courseTopic312[0]);
// J
console.log(courseTopic312[5]);
// c
console.log(courseTopic312[11]);
// e
console.log(courseTopic312[courseTopic312.length - 1]);
// s

// 1.32
console.log('');
console.log('~~~ Task 1.32 ~~~');
console.log('');
/*
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов.
Она объявляет два параметра, значения которых будут задаваться во время её вызова:
string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
Тесты
Объявлена функция getSubstring(string, length).
Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
Вызов функции getSubstring('Привет мир', 0) возвращает ''.
*/

function getSubstring32(string32, length32) {
    const substring32 = string32.slice(0, length32);
    // return substring;
    console.log(substring32);
}
getSubstring32(`Shipping to Jamaica will cost 120 credits`, 5);
// Shipp
getSubstring32(`Shipping to Jamaica will cost 120 credits`, 6);
// Shippi
getSubstring32(`Now - 120 credits`, 5);
// Now -
getSubstring32(`Now - 120 credits`, 6);
// Now -&#32;
getSubstring32(`Now - 120 credits`, 7);
// Now - 1
getSubstring32(`Now - 120 credits`, 3);
// Now

// 1.33
console.log('');
console.log('~~~ Task 1.33 ~~~');
console.log('');
/*
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, 
если длина превышает значение в параметре maxLength.
Дополни код функции так, что если длина строки: 
- не превышает maxLength, функция возвращает её в исходном виде.
- больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...',
после чего возвращает укороченную версию.
Тесты
Объявлена функция formatMessage(message, maxLength).
Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.
*/

function formatMessage33(message33, maxLength33) {
    let result33;
    result33 = message33.length > maxLength33 ? message33.slice(0, maxLength33) + '...' : message33;
    // return result;
    console.log(result33);
}
formatMessage33(`Shipping to Jamaica will cost 120 credits`, 3);
// Shi...
formatMessage33(`Shipping to Jamaica will cost 120 credits`, 5);
// Shipp...

// 1.34
console.log('');
console.log('~~~ Task 1.34 ~~~');
console.log('');
/*
Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре.
Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.
Тесты
Объявлена функция normalizeInput(input).
Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.
*/

function normalizeInput34(input34) {
    const normalizedInput34 = input34.toLowerCase();
    // return normalizedInput;
    console.log(normalizedInput34);
}
normalizeInput34(`Shipping to Jamaica will cost 120 credits`);
// shipping to jamaica will cost 120 credits

// 1.35
console.log('');
console.log('~~~ Task 1.35 ~~~');
console.log('');
/*
Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - 
результат проверки вхождения подстроки name в строку fullname.
fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.
Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). 
Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
Тесты
Объявлена функция checkForName(fullname, name).
Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.
*/

function checkForName35(fullName35, name35) {
    const result35 = fullName35.includes(name35);
    // return result35;
    console.log(result35);
}
checkForName35(`John Smith`, `Nick`);
// false
checkForName35(`John Smith`, `John`);
// true

// 1.36
console.log('');
console.log('~~~ Task 1.36 ~~~');
console.log('');
/*
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale,
и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещённых слов, функция возвращает буль false.
Тесты
Объявлена функция checkForSpam(message).
Вызов функции checkForSpam('Latest technology news') возвращает false.
Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.
*/

function checkForSpam36(message36) {
    let result36;
    result36 = message36.toLowerCase().includes('spam') || message36.toLowerCase().includes('sale');
    // return result36;
    console.log(result36);
}
checkForSpam36('JavaScript weekly newsletter');
// false
checkForSpam36('Latest technology news');
// false
checkForSpam36('Get best sale offers now!');
// true
checkForSpam36('Amazing SalE, only tonight!');
// true
checkForSpam36('Trust me, this is not a spam message');
// true
checkForSpam36('Get rid of sPaM emails. Our book in on sale!');
// true
checkForSpam36('[SPAM] How to earn fast money?');
// true
checkForSpam36(`Shipping to Jamaica will cost 120 credits`);
// false
checkForSpam36(`Shipping spam to Jamaica will cost 120 credits`);
// true
