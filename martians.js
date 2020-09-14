//const main = require("./nombre.js")

upperRightCoordinates = new Array(2)
robotData = new Array(3)
instructions = new String(100)
var scentRobots = new Array(50)
var lost = false;
function scentedCoordinates(x, y, array) {
    array.push(x);
    array.push(y);
}




function verifyIfOutOfBounds(positionX, positionY, gridLimits) {
    if(positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0){
        scentedCoordinates(positionX,positionY,scentRobots); //como rompo el bucle de abajoo, con lost = true?
        robotData[0] = positionX;
        robotData[1] = positionY;

        lost = true;
    }

    return positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0;
}

instructions = 'FRRFLLFFRRFLL'.split('');
gridLimits = [5,3];
robotData = [3, 2, 'N']

const directionsToAngle = {
    N: 0, // ¿¿¿N o 'N'???
    E: 90,
    S: 180,
    W: 270
}
const anglesToDirection = {
    0: 'N',
    90: 'E',
    180: 'S',
    270: 'W'
}

function computeRobot(robotData, instructions, gridLimits) {
    let angleRobot = directionsToAngle[robotData[2]];
    let scentArray = new Array();
    //let lost = false;


    for (let i = 0; i < instructions.length; i++) {
        console.log(instructions[i]);
        console.log(robotData);
        console.log(scentArray)

        if (instructions[i] === 'F') {
            if (robotData[2] === 'N' && !verifyIfOutOfBounds(robotData[0],robotData[1]+1, gridLimits)) {
                robotData[1]++;
                console.log("F111");


                //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]+1} Orientation:  ${robotData[2]} Krrrzzzzt...OOH NOO!..Krzzzzzzzztzzzz...\\n LOST\\n`);

            } else if (robotData[2] === 'S' && !verifyIfOutOfBounds(robotData[0],robotData[1]-1, gridLimits)) {
                robotData[1]--;
                console.log("F222");


            } else if (robotData[2] === 'E' && !verifyIfOutOfBounds(robotData[0]+1,robotData[1], gridLimits)) {
                robotData[0]++;
                console.log("F333");


            } else {
                if (!verifyIfOutOfBounds(robotData[0]-1,robotData[1], gridLimits)){
                    robotData[0]--;
                }
                console.log("Fcalvo");

            }

        } else if (instructions[i] === 'R') {
            angleRobot = angleRobot + 90;

        } else angleRobot = angleRobot - 90;

        if (angleRobot === 360 || angleRobot === -360) angleRobot = 0;

        robotData[2] = anglesToDirection[Math.abs(angleRobot)]

        if (lost){
            scentArray = scent(robotData[0], robotData[1], scentArray);
            //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]} Orientation:  ${robotData[2]} Krrrzzzzt...OOH NOO!..Krzzzzzzzztzzzz...\\n LOST\\n`);
            return robotData;

        }
        console.log(`Lost = ${lost}`);
        if (lost) return robotData;
    }
    if (!lost) //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]}  Orientation:  ${robotData[2]}`);
    return robotData;

}
const lastPosition =  computeRobot();
console.log(lastPosition)
if(lost) console.log('LOST')


