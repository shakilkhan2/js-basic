// is leapYear
function isLeapYear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    return true;
    }
    return false;
    }
    let year = 2028;
    console.log(isLeapYear(year));
    
    let year2 = 2030;
    console.log(isLeapYear(year2));

    // 
    function getLeapYear(arrYear){
        let arrayOfLeapYear = [];
        for(let i = 0; i < arrYear.length; i++){
            if((arrYear[i] % 4 ===0) && (arrYear[i] % 100 !== 0) || (arrYear[i] % 400 === 0)){
                arrayOfLeapYear.push(arrYear[i])
            }
            
        }
        return arrayOfLeapYear;
    }
    let arr = [2023, 2024, 2025, 2028, 2030]
    let myArray = getLeapYear(arr);
    console.log(myArray);