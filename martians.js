

var scentedGrid = [[]]
instructions = 'RFRFRFRF'.split('');
gridLimits = [5,3];
var robotData = [1, 1, 'E']

function setRobotLostInCoordinates(x, y, array) {
    array.push([x, y]);
}

function verifyIfRobotLostInCoordinates(x,y, array){
    console.log("1")
    for (let j = 0; j < array.length; j++){
        console.log(array[j], x, y)
        if(array[j][0] == x && array[j][1] == y) {
            console.log("aquiii")

            return true;
        }
    }
    return false;
}

function verifyIfOutOfBounds(positionX, positionY, gridLimits) {
    const isOutOfBounds = positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0;
    const isRobotLostInThisCoordinates = verifyIfRobotLostInCoordinates(positionX, positionY, scentedGrid)

    if(isOutOfBounds && !isRobotLostInThisCoordinates){
            setRobotLostInCoordinates(positionX, positionY, scentedGrid);
    }
    return isOutOfBounds;
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
    return posX, posY;
}

function computeRobot(robotData, instructions, gridLimits) {
    let angleRobot = directionsToAngle[robotData[2]];
    let lost = false;

    for (let i = 0; i < instructions.length; i++) {
        console.log(instructions[i])

        if (instructions[i] === 'F') {
            if (robotData[2] === 'N' && !verifyIfOutOfBounds(robotData[0],robotData[1]+1, gridLimits) && !verifyIfRobotLostInCoordinates(robotData[0],robotData[1]+1, scentedGrid)) {
                robotData[1]++;



            } else if (robotData[2] === 'S' && !verifyIfOutOfBounds(robotData[0],robotData[1]-1, gridLimits)  && !verifyIfRobotLostInCoordinates(robotData[0],robotData[1]-1, scentedGrid)) {
                robotData[1]--;


            } else if (robotData[2] === 'E' && !verifyIfOutOfBounds(robotData[0]+1,robotData[1], gridLimits)  && !verifyIfRobotLostInCoordinates(robotData[0]+1,robotData[1], scentedGrid)) {
                robotData[0]++;


            } else if(robotData[2] === 'W' && !verifyIfOutOfBounds(robotData[0]-1,robotData[1], gridLimits)  && !verifyIfRobotLostInCoordinates(robotData[0]-1,robotData[1], scentedGrid)) {

                robotData[0]--;

            } else{
                lost = true;
            }

        } else if (instructions[i] === 'R') {
            angleRobot += 90;

        } else if (instructions[i] === 'L') {
            angleRobot -= 90;

        }





        angleRobot = angleRobot < 0 ? (angleRobot % 360) + 360 : angleRobot % 360;
        robotData[2] = anglesToDirection[angleRobot]

        const {nextX, nextY} = nextStep(robotData[0], robotData[1], instructions[i+1])

        if (lost && verifyIfRobotLostInCoordinates(nextX,nextY,scentedGrid)){
            console.log(`${robotData} LOST`);
            return robotData;
        }
    }
    //console.log(`${robotData}`);
    return robotData;

}

//computeRobot(robotData,instructions,gridLimits);




const execution = [{ robotData: [1, 1, 'E'], instructions: 'RFRFRFRF'}, {robotData: [3, 2, 'N'], instructions: 'FRRFLLFFRRFLL'}, {robotData: [0, 3, 'W'], instructions: 'LLFFFLFLFL'}]

execution.forEach(ex => {
    const instructionsArray = ex.instructions.split('');
    const lastPosition =  computeRobot(ex.robotData, instructionsArray, gridLimits);
    console.log(lastPosition)
    console.log(scentedGrid)


})