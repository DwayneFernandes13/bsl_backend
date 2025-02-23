const db = require('../../../db');

// exports.createPlayer = (data) => {
//     console.log('inserting data')
//     db('players').insert(data)
//   };
exports.createPlayer = async (data) => {
    try {
        console.log('Inserting data...');
        let result = await db('players').insert(data);
        data["changed"] = true;
        return result
    } catch (error) {
        console.error('Error inserting data:', error);
    }
};
