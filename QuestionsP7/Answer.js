// 🟢 Exercise 1: Count Clicks
// Create a button on the page that, each time clicked, displays the number of clicks in a paragraph.
// For example:
// Click count: 1
// Click count: 2
// and so on...

let count = 0;
const btn = document.getElementById('clickBtn');
const countDisplay = document.getElementById('clickCount');

btn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});


// 🟢 Exercise 2: Add Item to List
// Create an input, a button, and a ul (unordered list) on the page.
// Each time the user types something in the input and clicks the button, that value should be added as a new li (list item) to the list.

const input = document.getElementById('inputItem');
const addBtn = document.getElementById('addBtn');
const itemList = document.getElementById('itemList');

addBtn.addEventListener('click', () => {
    const itemText = input.value;
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemList.appendChild(li); 
        input.value = ''; // Clear input
    }
});

// 🟢 Exercise 3: Change Font Size
// Display some text on the page.
// Create two buttons:
// One to increase the font size
// One to decrease the font size
// Each time a button is clicked, the font size of the text should change.

const text = document.getElementById('text');
const increaseBtn = document.getElementById('increaseFont');
const decreaseBtn = document.getElementById('decreaseFont');

let fontSize = 16; // اندازه فونت اولیه

increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    text.style.fontSize = fontSize + 'px';
});

decreaseBtn.addEventListener('click', () => {
    fontSize -= 2;
    text.style.fontSize = fontSize + 'px';
});


// 🟢 Exercise 4: Show/Hide Password
// Create an input of type password and place a checkbox next to it.
// When the user ticks the checkbox, the password should be displayed as normal text.
// When the checkbox is unchecked, it should revert back to password type.

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text'; // نمایش رمز عبور
    } else {
        passwordInput.type = 'password'; // مخفی کردن رمز عبور
    }
});


// 🟢 Exercise 5: Change Button Text on Click
// Create a button with the initial text "Start".
// On the first click, change the text to "In Progress...".
// On the second click, change the text to "Stopped!"

const btn1 = document.getElementById('toggleBtn');
let clicked = false;

btn1.addEventListener('click', () => {
    if (!clicked) {
        btn1.textContent = 'در حال اجرا...';
        clicked = true;
    } else {
        btn1.textContent = 'متوقف شد!';
        clicked = false;
    }
});


// 🟢 Exercise 6: Counter with Three Buttons (Increase, Decrease, Reset)
// Display a number on the page with an initial value of 0.
// Create three buttons:
// Increase Button → Increases the number by 1 and changes the text color to green.
// Decrease Button → Decreases the number by 1 and changes the text color to red.
// Reset Button → Resets the number to 0 and changes the text color to yellow.

const counter = document.getElementById('counter');
const increaseBtn1 = document.getElementById('increaseBtn');
const decreaseBtn2 = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count1 = 0;

increaseBtn1.addEventListener('click', () => {
    count1++;
    counter.textContent = count1;
    counter.style.color = 'green'; // رنگ سبز
});

decreaseBtn2.addEventListener('click', () => {
    count1--;
    counter.textContent = count1;
    counter.style.color = 'red'; // رنگ قرمز
});

resetBtn.addEventListener('click', () => {
    count1 = 0;
    counter.textContent = count1;
    counter.style.color = 'yellow'; // رنگ زرد
});

