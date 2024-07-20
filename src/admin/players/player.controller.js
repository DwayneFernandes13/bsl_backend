// Controller to create a new player
exports.createPlayer = (req, res) => {
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
      message: 'Player created successfully',
      data: newPlayer
    });
  };