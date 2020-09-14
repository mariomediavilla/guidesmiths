//const main = require("./nombre.js")

upperRightCoordinates = new Array(2)
robotData = new Array(3)
instructions = new String(100)
var scentedGrid = new Array()
var lost = false;
scentedGrid = [3,4]
instructions = 'LLFFFLFLFL'.split('');
gridLimits = [5,3];
var robotData = [0, 3, 'W']

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
        }
        console.log(`Esencia de robots:${scentedGrid}`)
        robotData[0] = positionX;
        robotData[1] = positionY;

        lost = true;
    }

    return positionX > gridLimits[0] || positionY > gridLimits[1] || positionX < 0 || positionY < 0;
}


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

    console.log(`Inicio en ${robotData}`);
    for (let i = 0; i < instructions.length; i++) {
        let scentFinded = false;

        if (instructions[i] === 'F') {
            if (robotData[2] === 'N' && !verifyIfOutOfBounds(robotData[0],robotData[1]+1, gridLimits) && verifyScentedCoordinates(robotData[0],robotData[1]+1, scentedGrid)) {
                robotData[1]++;
                //console.log("F111");


                //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]+1} Orientation:  ${robotData[2]} Krrrzzzzt...OOH NOO!..Krzzzzzzzztzzzz...\\n LOST\\n`);

            } else if (robotData[2] === 'S' && !verifyIfOutOfBounds(robotData[0],robotData[1]-1, gridLimits)  && verifyScentedCoordinates(robotData[0],robotData[1]-1, scentedGrid)) {
                robotData[1]--;
                //console.log("F222");


            } else if (robotData[2] === 'E' && !verifyIfOutOfBounds(robotData[0]+1,robotData[1], gridLimits)  && verifyScentedCoordinates(robotData[0]+1,robotData[1], scentedGrid)) {
                robotData[0]++;
                //console.log("F333");


            } else if(robotData[2] === 'W' && !verifyIfOutOfBounds(robotData[0]-1,robotData[1], gridLimits)  && verifyScentedCoordinates(robotData[0]-1,robotData[1], scentedGrid)) {

                    console.log("RESTO X");
                    robotData[0]--;
                }
            else{
                scentFinded = true;
                console.log("ROBOT PERDIDO AQUI, NO AVANZAR\n");
            }



        } else if (instructions[i] === 'R') {
            angleRobot = angleRobot + 90;

        } else angleRobot = angleRobot - 90;

        if (angleRobot === 360 || angleRobot === -360) angleRobot = 0;

        robotData[2] = anglesToDirection[Math.abs(angleRobot)]

        if (lost){
            //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]} Orientation:  ${robotData[2]} Krrrzzzzt...OOH NOO!..Krzzzzzzzztzzzz...\\n LOST\\n`);
            return robotData;

        }
        //console.log(`Lost = ${lost}`);
        if (!scentFinded) console.log(`Despues de ${instructions[i]} me quedo en: ${robotData} \n`);


        if (lost){
            console.log(`Caemos`);

            return robotData;
        }
    }
    if (!lost) //console.log(`X:  ${robotData[0]}  Y:   ${robotData[1]}  Orientation:  ${robotData[2]}`);
    return robotData;

}
const lastPosition =  computeRobot(robotData,instructions,gridLimits);
console.log(`${robotData}`);
if(lost) console.log('LOST')


