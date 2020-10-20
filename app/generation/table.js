const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        // return new Promise((resolve, reject) => {
        pool.query('INSERT INTO generation(expiration) VALUES($1)', [generation.expiration], (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Data insert successful');
            // client.end();
        });

        // pool.query(
        //     'INSERT INTO generation(expiration) VALUES($1)',
        //     [generation.expiration],
        //     (error, response) => {
        //         // if (error) return reject(error);
        //         if (error) return console.error(error);

        //         // const generationId = response.rows[0].id;

        //         // resolve({ generationId });
        //     }
        // );
        // });
    }
}

module.exports = GenerationTable;
