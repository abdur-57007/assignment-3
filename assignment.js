// feetToMile


function feetToMile (mile){
    var mile = mile / 5280;
    return mile;
}




// // woodCalculator

function woodCalculator (chair, table, bed) {
    const chairWoodCount = chair * 1; 
    const tableWoodCount = table * 3; 
    const bedWoodCount = bed * 5; 
    const totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount; 
    return totalWoodCount;
}



// brickCalculator

function brickCalculator (totalFloorNumber) {
    let firstTenFloor = 10;
    let tenToTwentyFloor;
    let twentyToMore;
    if (totalFloorNumber <= 0) {
        return "This Floor Can Not to be Build"
    }
        else {
            if (totalFloorNumber <= 10) {
                firstTenFloor = totalFloorNumber;
                return firstTenFloor * 15 * 1000;
            } else if ((totalFloorNumber > 10) && (totalFloorNumber <= 20)) {
              firstTenFloor =10;
              tenToTwentyFloor = totalFloorNumber - firstTenFloor;
              return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000)); 
            } else if (totalFloorNumber > 20) {
              firstTenFloor= 10;
              twentyToMore = totalFloorNumber - 20;
              return ((firstTenFloor * 15 * 1000) + (firstTenFloor * 12 * 1000) + (tenToTwentyFloor * 10 * 1000));
            }
        }
}




// tinyFriend

function tinyFriend(names) {
    let smallest = names[0];
    for(let i= 0; i < names.length; i++){

        let nextNumber = names[i];
        if (nextNumber.length < smallest.length){
            smallest = nextNumber;
        }
    }
    return smallest;
}


