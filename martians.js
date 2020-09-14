//const main = require("./nombre.js")

upperRightCoordinates = new Array(2)
robotData = new Array(3)
instructions = new String(100)
var scentedGrid = new Array()
var lost = false;
scentedGrid = []
instructions = 'FRRFLLFFRRFLL'.split('');
gridLimits = [5,3];
var robotData = [3, 2, 'N']

function scentedCoordinates(x, y, array) {
    array.push(x);
    array.push(y);
}

function verifyScentedCoordinates(x,y, array){
    for (let j = 0; j < array.length-1; j += 2){
        if(array[j] == x && array[j+1] == y)
            return false;
    }
    return true;
}


function verifyIfOutOfBounds(positionX, positionY, gridLimits) {
    if(positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0){
        if(verifyScentedCoordinates(positionX,positionY,scentedGrid)){
            scentedCoordinates(positionX, positionY, scentedGrid);
            lost = true;
        }else lost = false;
    }

    return positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0;
}


const directionsToAngle = {
    N: 0,
    E: 90,
    S: 180,
    W: 270
}
const anglesToDirection = {
    0: 'N',
    90: 'E',
    180: 'S',
    270: 'W',
}

function computeRobot(robotData, instructions, gridLimits) {
    let angleRobot = directionsToAngle[robotData[2]];
    let scentArray = new Array();

    for (let i = 0; i < instructions.length; i++) {
        let scentFinded = false;

        if (instructions[i] === 'F') {
            if (robotData[2] === 'N' && !verifyIfOutOfBounds(robotData[0],robotData[1]+1, gridLimits) && verifyScentedCoordinates(robotData[0],robotData[1]+1, scentedGrid)) {
                robotData[1]++;



            } else if (robotData[2] === 'S' && !verifyIfOutOfBounds(robotData[0],robotData[1]-1, gridLimits)  && verifyScentedCoordinates(robotData[0],robotData[1]-1, scentedGrid)) {
                robotData[1]--;


            } else if (robotData[2] === 'E' && !verifyIfOutOfBounds(robotData[0]+1,robotData[1], gridLimits)  && verifyScentedCoordinates(robotData[0]+1,robotData[1], scentedGrid)) {
                robotData[0]++;


            } else if(robotData[2] === 'W' && !verifyIfOutOfBounds(robotData[0]-1,robotData[1], gridLimits)  && verifyScentedCoordinates(robotData[0]-1,robotData[1], scentedGrid)) {

                    robotData[0]--;
                }
            else{
                scentFinded = true;
            }



        } else if (instructions[i] === 'R') {
            angleRobot = angleRobot + 90;

        } else angleRobot = angleRobot - 90;

        if (angleRobot === 360 || angleRobot === -360) angleRobot = 0;

        if(angleRobot<0) angleRobot= angleRobot+360;
        robotData[2] = anglesToDirection[angleRobot]

        if (lost){
            console.log(`${robotData} LOST`);
            return robotData;
        }

    }
    console.log(`${robotData}`)
    if (!lost)
    return robotData;

}
const lastPosition =  computeRobot(robotData,instructions,gridLimits);


