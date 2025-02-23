const players = []

const playerModel = require('./player.model');

// Controller to create a new player
exports.createPlayer = async (req, res) => {
    const { name, age, position, phone } = req.body;
    const newPlayer = {
      name,
      age,
      position,
      phone
    };
    
    let dbResponse = await playerModel.createPlayer(newPlayer); 
    console.log(dbResponse);

    if(dbResponse?.length > 0){
      res.json({
        status: true,
        message: 'Player created successfully',
        index: dbResponse[0]
      });
    }else{
      
    res.json({
      status: false,
      message: 'Player creation FAILED'
    });
    }
  };
// Controller to create a new player
exports.editPlayer = (req, res) => {
  const { name, age, position, phone } = req.body;
  const newPlayer = {
    id: players.length + 1,
    name,
    age,
    position,
    phone
  };
  players.push(newPlayer);
  res.json({
    message: 'Player edited successfully',
    data: newPlayer
  });
};
// Controller to create a new player
exports.deletePlayer = (req, res) => {
  const { name, age, position, phone } = req.body;
  const newPlayer = {
    id: players.length + 1,
    name,
    age,
    position,
    phone
  };
  players.push(newPlayer);
  res.json({
    message: 'Player deleted successfully',
    data: newPlayer
  });
};