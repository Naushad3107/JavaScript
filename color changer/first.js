const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target.id);

        if(e.target.id === 'Primary'){
            body.style.backgroundColor = 'aquamarine';
        }
        if(e.target.id === 'Primary'){
            body.style.backgroundColor = 'aquamarine';
        }
        if(e.target.id === 'Secondary'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'Success'){
            body.style.backgroundColor = 'green';
        }
        if(e.target.id === 'Danger'){
            body.style.backgroundColor = 'Red';
        }
        if(e.target.id === 'Warning'){
            body.style.backgroundColor = 'yellow';
        }
    })
})