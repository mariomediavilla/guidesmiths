const {computeRobot} = require('./martians')

describe('Martian Robot Test', function () {
    it('Should execute example moves', function (){
        const execution = [{ robotData: [1, 1, 'E'], instructions: 'RFRFRFRF'}, {robotData: [3, 2, 'N'], instructions: 'FRRFLLFFRRFLL'}, {robotData: [0, 3, 'W'], instructions: 'LLFFFLFLFL'}]
        const lostRobotsCoordinates = [];
        const gridLimits = [5,3];

        execution.forEach(ex => {
            const instructionsArray = ex.instructions.split('');
            computeRobot(ex.robotData, instructionsArray, gridLimits, lostRobotsCoordinates);
        })
    })
});

