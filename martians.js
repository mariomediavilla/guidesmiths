
function setRobotLostInCoordinates(x, y, array) {
    array.push([x, y]);
}

function verifyIfRobotLostInCoordinates(x,y, array){
    for (let j = 0; j < array.length; j++){
        if(array[j][0] === x && array[j][1] === y) {
            return true;
        }
    }
    return false;
}

function verifyIfOutOfBounds(positionX, positionY, gridLimits) {
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

function nextStep(posX, posY, orientation){
    if (orientation === 'N'){
        posY++;
    } else if(orientation === 'E'){
        posX++;
    }else if(orientation === 'S'){
        posY--;
    }else if(orientation === 'W'){
        posX--;
    }
    return { posX, posY };
}

function computeRobot(robotData, instructions, gridLimits, lostRobotsCoordinates) {
    let angleRobot = directionsToAngle[robotData[2]];

    for (let i = 0; i < instructions.length; i++) {

        if (instructions[i] === 'F') {
            const nextPosition = nextStep(robotData[0], robotData[1], robotData[2])
            if (verifyIfOutOfBounds(nextPosition.posX, nextPosition.posY, gridLimits) && !verifyIfRobotLostInCoordinates(nextPosition.posX, nextPosition.posY, lostRobotsCoordinates)){
                console.log(`${robotData} LOST`);
                setRobotLostInCoordinates(nextPosition.posX, nextPosition.posY, lostRobotsCoordinates)
                return robotData;

            } else if (!verifyIfRobotLostInCoordinates(nextPosition.posX, nextPosition.posY, lostRobotsCoordinates)){
                robotData[0] = nextPosition.posX;
                robotData[1] = nextPosition.posY;
            }

        } else if (instructions[i] === 'R') {
            angleRobot += 90;

        } else if (instructions[i] === 'L') {
            angleRobot -= 90;

        }

        angleRobot = angleRobot < 0 ? (angleRobot % 360) + 360 : angleRobot % 360;
        robotData[2] = anglesToDirection[angleRobot]
    }
    console.log(`${robotData} `);
    return robotData;
}

module.exports = {
    computeRobot
}