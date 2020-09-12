upperRightCoordinates = new Array(2)
robotData = new Array(3)
instructions = new String(100)
var scent = [[1,1],[2,1],[3,2],[5,2]];
var coordX, coordY, orientation;

instructions = ['RFRFRFRFRF']
gridLimits = [5,1];
robotData = [coordX, coordY, orientation]

for (var i = 0; i < instructions.length; i++) {
    if (instructions.charAt(i) == 'F'){
        if (robotData[2] == 'N'){
            robotData[1]++;

        } else if (robotData[2] == 'S'){
            robotData[1]--;

        } else if (robotData[2] == 'E'){
            robotData[0]++;

        } else robotData[0]--;

    } else if (instructions.charAt(i) == 'R') {
        if (robotData[2] == 'N') {
            robotData[2] = 'E';

        } else if (robotData[2] == 'S') {
            robotData[2] = 'O';

        } else if (robotData[2] == 'E') {
            robotData[2] = 'S';

        } else robotData[2] = 'N';
    } else {
        if (robotData[2] == 'N') {
            robotData[2] = 'O';

        } else if (robotData[2] == 'S') {
            robotData[2] = 'E';

        } else if (robotData[2] == 'E') {
            robotData[2] = 'N';

        } else robotData[2] = 'S';
    }
    if (robotData[0] > gridLimits[0] || robotData[1] > gridLimits[1] || robotData[0] < 0 || robotData[1] < 0 ) {
        scentCount = 0
        scent[]
        scentCount++
        break;
    }



}