const color = 'redi';
if(color === 'white'){
    console.log('The color is white');
}else if(color === 'blue'){
    console.log('The color is blue');
}else if(color === 'green'){
    console.log('The color is green');
}else if(color === 'red'){
    console.log('The color is red');
}else{
    console.log('There is something wrong')
}

// switch
switch(color){
    case 'white':
        console.log('The color is white');
        break;
    case 'blue':
        console.log('The color is blue');
        break;
        case 'green':
            console.log('The color is green')  ;
            break;
            case 'red':
                console.log('The color is red')  ;
                break;
                default:
                    console.log('There is something wrong!')
}
