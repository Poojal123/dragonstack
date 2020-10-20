const Dragon = require('../dragon');
const { REFRESH_RATE, SECONDS } = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;
class Gereration {
    constructor() {
        this.expression = this.calculateExpression();
        console.log(this.expression);
    }

    calculateExpression() {
        const expressionPeriod = Math.floor(Math.random() * (refreshRate / 2));

        const msUnitlExpression = Math.random() < 0.5 ?
            refreshRate - expressionPeriod :
            refreshRate + expressionPeriod;

        return new Date(Date.now() + msUnitlExpression);

    }

    newDragon() {
        if (Date.now() > this.expression) {
            throw new Error('this generation expired on ' + this.expression);
        }
        return new Dragon();
    }
}

module.exports = Gereration;