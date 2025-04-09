
// let divContainer = document.createElement('div');
// divContainer.setAttribute('class','container-all');

// let divRight = document.createElement('div');
// divRight.setAttribute('class','div-right');

// let ul = document.createElement('ul');
// let items = [
//     { link: 'link1', href: 'https://google.com' },
//     { link: 'link2', href: 'https://google.com' },
//     { link: 'link3', href: 'https://google.com' }
// ];

// items.forEach((item) => {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.textContent = item.link;
//     a.href = item.href;
//     li.append(a)
//     ul.append(li);
// });
// divRight.append(ul);
// divContainer.append(divRight);
// document.body.append(divContainer);

// // button dark mode:
// let divLeft = document.createElement('div');
// divLeft.setAttribute('class','div-left');

// let btnMode = document.createElement('button');
// btnMode.innerText='change mode';
// btnMode.setAttribute('class','btn-mode');

// divLeft.append(btnMode);
// divContainer.append(divLeft);

// btnMode.addEventListener('click',function(){
//     document.body.classList.toggle('dark');
//     if(document.body.classList.contains('dark')){
//         btnMode.textContent = 'dark mode';
//     }else{
//         btnMode.textContent = 'light mode';
//     }
// })

// ایجاد یک کانتینر اصلی
let divContainer = document.createElement('div');
divContainer.classList.add('container-all');

// ساخت بخش راست (لیست لینک‌ها)
let divRight = document.createElement('div');
divRight.classList.add('div-right');

let ul = document.createElement('ul');
let items = [
    { link: 'link1', href: 'https://google.com' },
    { link: 'link2', href: 'https://google.com' },
    { link: 'link3', href: 'https://google.com' }
];

// استفاده از documentFragment برای بهینه‌سازی
let fragment = document.createDocumentFragment();
items.forEach(({ link, href }) => {
    let li = document.createElement('li');
    li.innerHTML = `<a href="${href}">${link}</a>`; // استفاده از template literal
    fragment.appendChild(li);
});
ul.appendChild(fragment);
divRight.appendChild(ul);
divContainer.appendChild(divRight);

// ساخت دکمه تغییر حالت (تم تاریک/روشن)
let divLeft = document.createElement('div');
divLeft.classList.add('div-left');

let btnMode = document.createElement('button');
btnMode.classList.add('btn-mode');
btnMode.innerText = 'Light Mode'; 

btnMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnMode.textContent = document.body.classList.contains('dark') ? 'Dark Mode' : 'Light Mode';
});

divLeft.appendChild(btnMode);
divContainer.appendChild(divLeft);

// اضافه کردن کانتینر به بدنه
document.body.appendChild(divContainer);
