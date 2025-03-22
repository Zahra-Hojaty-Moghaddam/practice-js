let givDiv =  document.querySelector('.divA');
console.log(givDiv);
console.log(givDiv.innerHTML);
console.log(givDiv.innerText);
console.log(givDiv.textContent);

let givDivs = document.querySelectorAll('div')
console.log(givDivs);
console.log(givDivs[0] + givDivs[1] + givDivs[2]);
console.log(givDivs[1]);


// 1- DOM Selection & Logging
// Select the first <div> element on the page and log it.
// Select all <div> elements and log the second one.
// Select an element with the class "divf" and log its inner HTML.
// Select an element with the id="idSecond" and log its inner text.

let firstDiv = document.querySelector('div');
console.log(firstDiv);

let allDivs = document.querySelectorAll('div');
console.log(allDivs);
console.log(allDivs[1]);

console.log(document.querySelector('.divf').innerHTML);
console.log(document.querySelectorAll('.divf')[0].innerHTML);
console.log(document.getElementsByClassName('divf')[0].innerHTML);

console.log(document.querySelector('#idSecond').innerText);
console.log(document.querySelectorAll('#idSecond')[0].innerText);
console.log(document.getElementById('idSecond').innerText);


// 2. Modifying the DOM
// Select a specific <div> and change its innerText to "Changed Content!".
// Create a new <p> element, set its text to "This is a new paragraph", and append it to the second <div> on the page.
// Create a new <div> with inner HTML containing:
    // <h2>Title</h2>
    // <p>Some content inside the div</p>
    // and append it to the <body>.

console.log(document.querySelector('.divf').innerText = 'changed Content!');

let createP = document.createElement('p');
createP.innerText = "This is a new paragraph";
allDivs[1].appendChild(createP);
console.log(allDivs[1]);

let newDiv = document.createElement('div');
newDiv.innerHTML = `<h2>Title</h2><p>Some content inside the div</p>`
console.log(newDiv);


// 4. Removing Elements
// Select an existing <div> and remove its last child element.
// Select another element and completely remove it from the page.

let div = document.querySelector('div');
console.log(div);
div.removeChild(div.lastElementChild);
// console.log(div.removeChild(div.lastElementChild));
// console.log(div.lastChild);  // ممکن است یک گره متنی خالی باشد
// div.removeChild(div.lastChild);

let removeElement = document.querySelector('.h1');
console.log(removeElement);
removeElement.remove();


// 5. Section Manipulation
// Select a section with class "sectionF".
// Create a new <div> inside this section with inner HTML containing:

// <p>HTML</p>
// <p>CSS</p>
// <p>JavaScript</p>
// Log the text of the first child inside "sectionF".
// Remove all child elements inside "sectionF" using a while loop.

let SectionF = document.getElementsByClassName('sectionF')[0];
console.log(SectionF);
let newDiv2 = document.createElement('div');
console.log(newDiv2);

newDiv2.innerHTML = `
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
`;

SectionF.appendChild(newDiv2)
newDiv2.style.color='red';
// console.log(SectionF);

// while(newDiv2.lastElementChild){
//     newDiv2.removeChild(newDiv2.lastElementChild);
//     // newDiv2.innerHTML = "";
// }
// console.log(SectionF);

// SectionF.remove();

while(SectionF.lastElementChild){
    SectionF.removeChild(SectionF.lastElementChild);
}

// Bonus Challenge:
// Create a button that, when clicked, adds a new <p> element with "New Paragraph added!" inside a div.
// Add an event listener to remove any paragraph inside a specific div when clicked.

let containerParagraph = document.createElement('div');
document.body.appendChild(containerParagraph);


let br = document.createElement('br')
document.body.appendChild(br);

let button = document.createElement('button');
button.innerText = 'Click me!!';
document.body.appendChild(button);

button.addEventListener('click',function(){
    let newParagraph = document.createElement('p');
    newParagraph.innerText = 'new paragraph added'
    newParagraph.setAttribute('class','new');
    // newDiv.classList.add('newDiv');
    containerParagraph.appendChild(newParagraph);
})

containerParagraph.addEventListener('click', function(e) {
    if (e.target.tagName === 'P') {
        e.target.remove(); 
    }
});