
let divContainer = document.createElement('div');
divContainer.setAttribute('class','container-all');

let divRight = document.createElement('div');
divRight.setAttribute('class','div-right');

let ul = document.createElement('ul');
let items = [
    { link: 'link1', href: 'https://google.com' },
    { link: 'link2', href: 'https://google.com' },
    { link: 'link3', href: 'https://google.com' }
];

items.forEach((item) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = item.link;
    a.href = item.href;
    li.append(a)
    ul.append(li);
});
divRight.append(ul);
divContainer.append(divRight);
document.body.append(divContainer);

// button dark mode:
let divLeft = document.createElement('div');
divLeft.setAttribute('class','div-left');

let btnMode = document.createElement('button');
btnMode.innerText='change mode';
btnMode.setAttribute('class','btn-mode');

divLeft.append(btnMode);
divContainer.append(divLeft);

btnMode.addEventListener('click',function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        btnMode.textContent = 'dark mode';
    }else{
        btnMode.textContent = 'light mode';
    }
})


