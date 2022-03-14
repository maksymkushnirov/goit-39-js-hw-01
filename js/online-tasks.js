// JS Tasks Module 1

// 1.1
// Change code below this line

const productName1 = 'Droid';
console.log(productName1);
// 'Droid'

const pricePerItem1 = 2000;
console.log(pricePerItem1);
// 2000

// 1.2
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
const pricePerItem4 = 3500;
const orderedQuantity4 = 4;

// Change code below this line
// const totalPrice4 = pricePerItem4;
// 14000
const totalPrice4 = pricePerItem4 * orderedQuantity4;
// console.log(totalPrice4);
// 14000

// 1.5
const productName5 = 'Droid';
const pricePerItem5 = 3500;

// Change code below this line
const message5 = `You picked ${productName5}, price per item is ${pricePerItem5} credits`;
console.log(message5);
// You picked Droid, price per item is 3500 credits

// 1.6
let pricePerDroid6 = 800;
let orderedQuantity6 = 6;
let deliveryFee6 = 50;
let totalPrice6 = pricePerDroid6 * orderedQuantity6 + deliveryFee6;
const message6 = `You ordered droids worth ${totalPrice6} credits. Delivery (${deliveryFee6} credits) is included in total price.`;
console.log(message6);
// You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price.

// 1.7
function sayHi7() {
    console.log('Hello, this is my first function!');
}
sayHi7();
// Hello, this is my first function!

// 1.8
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
function makeMessage10(name10, price10) {
    // Change code below this line
    const message10 = `You picked ${name10}, price per item is ${price10} credits`;
    // Change code above this line
    // return message10;
    console.log(message10);
}
makeMessage10('Droid', 200);
// You picked Droid, price per item is 200 credits

// 1.11
function calculateTotalPrice11(orderedQuantity11, pricePerItem11) {
    // Change code below this line
    const totalPrice11 = pricePerItem11 * orderedQuantity11;

    // Change code above this line
    // return totalPrice11;
    console.log(totalPrice11);
}
calculateTotalPrice11(10, 5);
// 50

// 1.12
function makeOrderMessage12(orderedQuantity12, pricePerDroid12, deliveryFee12) {
    // Change code below this line
    const totalPrice12 = pricePerDroid12 * orderedQuantity12 + deliveryFee12;
    const message12 = `You ordered droids worth ${totalPrice12} credits. Delivery (${deliveryFee12} credits) is included in total price.`;
    // Change code above this line
    // return message12;
    console.log(message12);
}
makeOrderMessage12(2, 5, 10);
// You ordered droids worth 20 credits. Delivery (10 credits) is included in total price.

// 1.13
function isAdult13(age13) {
    const passed13 = age13 >= 18;
    // return passed13;
    console.log(passed13);
}
isAdult13(20);
// true

// 1.14
function isValidPassword14(password14) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch14 = password14 === SAVED_PASSWORD;
    // return isMatch14;
    console.log(isMatch14);
}
isValidPassword14('jqueryismyjam');
// true

// 1.15
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
checkAge15(21);
// You are an adult

// 1.16
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
checkStorage16(100, 99);
checkStorage16(100, 99.9);
checkStorage16(100, 100);
checkStorage16(100, 101);
// Order is processed, our manager will contact you.

// 1.17
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
checkPassword19(`jqueryismyja`);
// Access denied, wrong password!
checkPassword19(`jqueryismyjam`);
// Welcome!

// 1.20
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
function normalizeInput34(input34) {
    const normalizedInput34 = input34.toLowerCase();
    // return normalizedInput;
    console.log(normalizedInput34);
}
normalizeInput34(`Shipping to Jamaica will cost 120 credits`);
// shipping to jamaica will cost 120 credits

// 1.35
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
function checkForSpam36(message36) {
    let result36;
    result36 = message36.toLowerCase().includes('spam') || message36.toLowerCase().includes('sale');
    // return result36;
    console.log(result36);
}
checkForSpam36(`Shipping to Jamaica will cost 120 credits`);
// false
checkForSpam36(`Shipping spam to Jamaica will cost 120 credits`);
// true
