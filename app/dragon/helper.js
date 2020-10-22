const pool = require('./../../databasePool');
const DragonTable = require('./table');
const Dragon = require('./index');

const getDragonWithTraits = ({ dragonId }) => {
    return Promise.all([
        DragonTable.getDragon({ dragonId }),
        new Promise((resolve, reject) => {
            pool.query(`SELECT "traitType", "traitValue" from
             trait
             INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId" 
             WHERE dragonTrait."dragonId" = $1`, [dragonId],
                (err, res) => {
                    if (err) return reject(err);

                    resolve(res.rows);
                })
        })
    ]).then(([dragon, dragonTraits]) => {

        return new Dragon({ ...dragon, dragonId, traits: dragonTraits });
    }).catch(err => console.error(err));
};

// getDragonWithTraits({ dragonId: 1 }).then(dragon => {
//     console.log('dragon  ---- ', dragon);
// }).catch(err => console.error(err));

module.exports = { getDragonWithTraits };