function calculator(C){
    let output=document.getElementById("calcu");
    switch(C){
        case 0:
            output.value+= 0;
            break;
        case 1:
            output.value+= 1;
            break;
        case 2:
            output.value+= 2;
            break;
        case 3:
            output.value+= 3;
            break;
        case 4:
            output.value+= 4;
            break;
        case 5:
            output.value+= 5;
            break;
        case 6:
            output.value+= 6;
            break;
        case 7:
            output.value+= 7;
            break;
        case 8:
            output.value+= 8;
            break;
        case 9:
            output.value+= 9;
            break;
        case '+':
            output.value+= '+';
            break;
        case '-':
            output.value+= '-';
            break;
        case '×':
            output.value+= '*';
            break;
        case '÷':
            output.value+= '/';
            break;
        case '^':
            output.value+= '**';
            break;
        case '%':
            output.value+= '%';
            break;
        case '.':
            output.value+= '.';
            break;  
        case '=':
            try{
                output.value=eval(output.value);
            }
            catch{
                output.value="Error !";
            }
            break;
        case 'C':
            output.value='';
            break;
        case 'DEL':
            output.value=output.value.slice(0,-1);
            break;
    }
}