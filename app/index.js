const express = require('express');
const GenerationEngin = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');


const app = express();
const engine = new GenerationEngin();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);


engine.start();



module.exports = app;



// const Dragon = require('./dragon');

// const fooey = new Dragon({birthdate: new Date(), nickname: 'fooey'});
// const baloo = new Dragon({birthdate: new Date(), nickname: 'baloo'});
// const unnamed = new Dragon();

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('unnamed', unnamed);

// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log(gooby);
// }, 3000);

// const Generation = require('./generation');
// const generation = new Generation();

// console.log('generation ', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => {
//     const mm = generation.newDragon();
//     console.log(mm);
// }, 15000);

// setTimeout(() => {
//     const mm = generation.newDragon();
//     console.log(mm);
// }, 16000)

// console.log('generation ', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => {
//     const mm = generation.newDragon();
//     console.log(mm);
// }, 15000);

// setTimeout(() => {
//     const mm = generation.newDragon();
//     console.log(mm);
// }, 16000)


// generationEngine.start();

// setTimeout(() => {
//     generationEngine.stop();
// }, 20000);