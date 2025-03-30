
//  ✅ Easy Level:
//  1️⃣ Create a new <div>, add it to the body, and set its text to "Hello, DOM!".

//  2️⃣ Select an unordered list (<ul>) in your HTML and use JavaScript to add three list items (<li>) to it.

//  3️⃣ Create an image (<img>), set its src to "https://via.placeholder.com/150", and append it to the body.


// =============================== Question1 : =================================================

//  1️⃣ Create a new <div>, add it to the body, and set its text to "Hello, DOM!".

let easyDiv = document.createElement('div');
document.body.appendChild(easyDiv);
easyDiv.innerText = 'Hello , DOM!';
// easyDiv.style.color = 'gray';

// =============================== Question2 : =================================================

//  2️⃣ Select an unordered list (<ul>) in your HTML and use JavaScript to add three list items (<li>) to it.

let containerList = document.querySelector('.container-list');
console.log(containerList);
for( let i = 0 ; i < 3 ; i++ ){
    let newLi = document.createElement('li');
    newLi.innerHTML = `Item ${i + 1}`;
    // newLi.style.listStyle = 'none';
    containerList.appendChild(newLi);
}

// let containerList = document.querySelector('.container-list');
// const fragment = document.createDocumentFragment(); // Create a document fragment
// for (let i = 0; i < 3; i++) {
//     let newLi = document.createElement('li');
//     newLi.innerText = `Item ${i + 1}`;
//     fragment.appendChild(newLi);
// }

// containerList.appendChild(fragment); 

// What is DocumentFragment?
// DocumentFragment is a lightweight and temporary node in the DOM that allows elements to be added inside it and then transferred to the main DOM without making multiple direct changes to the DOM.

// What is Rendering (Render) in the Web?
// In the web world, rendering (Render) means converting HTML, CSS, and JavaScript code into a visual page that the user can see and interact with.


// =============================== Question3 : =================================================

//  3️⃣ Create an image (<img>), set its src to "https://via.placeholder.com/150", and append it to the body.

let createIMG = document.createElement('img');
// createIMG.src = "https://via.placeholder.com/150";
createIMG.alt = 'this is image';
document.body.appendChild(createIMG);

// document.body.appendChild(Object.assign(document.createElement('img'), {
//     src: "https://via.placeholder.com/150",
//     alt: "this is image"
// }));

// =============================== Question4 : =================================================

//  4️⃣ Create a table (<table>) with 3 rows and 3 columns. Each cell's text should be "Cell X-Y", where X is the row number and Y is the column number.

let createTable = document.createElement('table');
// createTable.style.border = '1px solid black'; // اضافه کردن مرز به جدول
// createTable.style.borderCollapse = 'collapse'; // برای هم‌پوشانی مرزهای جدول

for (let i = 1; i <= 3; i++) {
    let createTr = document.createElement('tr');

    for (let j = 1; j <= 3; j++) {
        let createTd = document.createElement('td');
        createTd.innerHTML = `Row ${i}, Column ${j}`;  
        createTd.style.border = '1px solid black';
        createTd.style.padding = '10px'; 
        createTr.appendChild(createTd);
    }

    createTable.appendChild(createTr);
}
document.body.appendChild(createTable);

// =============================== Question5 : =================================================

//  5️⃣ Select all paragraphs (<p>) in the document and change their text to "Updated Paragraph".

let allParagraphs = document.querySelectorAll('.paragraph');
allParagraphs.forEach(paragraph => {
    paragraph.textContent = 'updated paragraph';
});

// =============================== Question6 : =================================================

//  6️⃣ Select an ordered list (<ol>) and remove its last item.

let orderedList = document.querySelector('ol');
orderedList.lastElementChild.remove();
// orderedList.removeChild(orderedList.lastElementChild);

// =============================== Question7 : =================================================

//  7️⃣ Select all links (<a>) on the page and change their href attribute to "https://example.com".

let allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    // link.href = 'https://www.google.com';
    link.setAttribute('href', 'https://www.google.com'); //standard 
});

// =============================== Question8 : =================================================

//  8️⃣ In a div containing multiple child elements, remove both the first and last child.

let containerChilds = document.querySelector('.remove-ch');
for( let i = 0 ; i < 2 ; i++ ){
    containerChilds.lastElementChild.remove();
    containerChilds.firstElementChild.remove();
}

// =============================== Question9 : =================================================

//  9️⃣ Create an input field (<input>), set its value to "Default Text", and append it to the body.

let createInput = document.createElement('input');
createInput.setAttribute('value','Default Text');
document.body.appendChild(createInput);
createInput.style.margin = '20px';

// =============================== Question10 : =================================================

//  🔟 Create a nested list (<ul> inside another <ul>) and append it to the body.

let ulList1 = document.createElement('ul');
ulList1.setAttribute('class','ul1');

let ulList2 = document.createElement('ul');
ulList2.setAttribute('class','ul2');
let newLi = document.createElement('li')
newLi.innerHTML = 'just one item';
ulList2.appendChild(newLi)
ulList2.style.setProperty('background-color', 'orange', 'important');

ulList1.appendChild(ulList2);
document.body.appendChild(ulList1);
































// let button1 = document.createElement('button');
// button1.innerHTML = 'click me !!';
// document.body.appendChild(button1);

// let paragraph = document.createElement('p');
// document.body.appendChild(paragraph);
// paragraph.innerText = 'lorem ';

// button1.addEventListener('click',function(){
//     paragraph.innerText = 'Hello , DOM !';
// })