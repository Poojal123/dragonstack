
const Generation = require('./index');
const GenerationTable = require('./table');


class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timmer = null;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.timmer);
    }

    buildNewGeneration() {
        this.generation = new Generation();

        GenerationTable.storeGeneration(this.generation);

        console.log('new gen', this.generation);

        this.timmer = setTimeout(
            () => this.buildNewGeneration(),
            this.generation.expression.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;