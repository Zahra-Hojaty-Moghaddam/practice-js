const display = document.querySelector('.display');
display.setAttribute('maxlength','64');

const numbers = ['+','7','8','9','-','4','5','6','*','1','2','3','/','0','.','=','C'];

const showBtn = document.querySelector(".key");

numbers.forEach((item)=>{
    let btn = document.createElement('button');
    if(['+','-','*','/','=','C'].includes(item)){
        btn.classList.add('operator-btn');
    }   
    btn.textContent = item;
    btn.addEventListener('click', () => appendToDisplay(item));
    showBtn.append(btn);
});

function appendToDisplay(input){
    if(input === 'C'){
        display.value = "";
    }else if(input === "="){
        try{
            display.value = eval(display.value);
        }catch(error){
            display.value = "Error Syntax";

            setTimeout(() => {
                display.value = "";
            }, 3000);
        }
    }else{
        display.value = display.value + input;
    }
}
