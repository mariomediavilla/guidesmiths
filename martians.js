upperRightCoordinates = new Array(2)
robotData = new Array(3)
instructions = new String(100)
var scent = [[1,1],[2,1],[3,2],[5,2]];
var coordX, coordY, orientation;


function scentCoordinate(x, y, array) {
    array.push(x);
    array.push(y);
    return array;
}


function verifyScentCoordinates(coordX, coordY,array) {
    for (var i = 0; i < array.length; i++) {
        if (coords[i].x == coordX && coords[i].y == coordY)
            return false;
        return true;
    }
}



instructions = ['RFRFRFRFRF']
gridLimits = [5,1];
robotData = [coordX, coordY, orientation]

function movement() {
    var angleRobot;
    var scentArray;
    if (robotData[2] == 'N') {
        angleRobot = 0;

    } else if (robotData[2] == 'E') {
        angleRobot = 90;

    } else if (robotData[2] == 'S') {
        angleRobot = 180;

    } else angleRobot = 270;

    for (var i = 0; i < instructions.length; i++) {
        if (instructions.charAt(i) == 'F') {
            if (robotData[2] == 'N') {
                robotData[1]++;

            } else if (robotData[2] == 'S') {
                robotData[1]--;

            } else if (robotData[2] == 'E') {
                robotData[0]++;

            } else robotData[0]--;

        } else if (instructions.charAt(i) == 'R') {
            angleRobot = angleRobot + 90;
        } else angleRobot = angleRobot - 90;

        if (angleRobot == 360 || angleRobot == -360) angleRobot = 0;

        angleRobot = Math.abs(angleRobot);

        if (angleRobot == 0) {
            robotData[2] = 'N';

        } else if (angleRobot == 90) {
            robotData[2] = 'E';

        } else if (angleRobot == 180) {
            robotData[2] = 'S';

        } else robotData[2] = 'W';

        if (robotData[0] > gridLimits[0] || robotData[1] > gridLimits[1] || robotData[0] < 0 || robotData[1] < 0) {
            scentCount = 0;
            scentCoordinate(robotData[0], robotData[1], scentArray)
            scentCount++;
            print("Krrrzzzzt...OOH NOO!..Krzzzzzzzztzzzz...");
            break;
        }
    }
}




