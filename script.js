let calculator = document.getElementById('calc');
let expression = [];

calculator.addEventListener('click', showValue);

function showValue(event){
    let target = event.target;
    
    if(target.className == 'button' && target.textContent != '=' && target.textContent != 'C' && target.id != 'remove'){        
        let buttonValue = target.textContent;
        let screen = document.getElementById('screen');
        screen.innerHTML += buttonValue;
        expression.push(buttonValue); 
          
    }else if(target.className == 'button' && target.textContent == 'C'){
        let screen = document.getElementById('screen');
        expression = [];
        screen.innerHTML = '';
       
    
    }else if(target.className == 'button' && target.id == 'remove'){
        let screen = document.getElementById('screen');
        let newScreenText = screen.textContent.split('');        
        let removed = newScreenText.splice((newScreenText.length - 1), 1);
        expression = newScreenText.join('');         
        screen.innerHTML = expression;    
       

    }else if(target.className == 'button' && target.textContent == '='){
        let screen = document.getElementById('screen');
        let result = 0;        
        result = eval(screen.textContent);
        screen.innerHTML = '';
        screen.innerHTML = result;
    }
}