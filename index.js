module.exports.getUsers = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id:1, name: 'Sofiya'}])
  };
};

module.exports.createUsers = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id:2, name: 'Mark'}])
  };
};

module.exports.getCars = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id:1, model: 'Audi'}])
  };
};

module.exports.createCars = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify([{id:2, module: ''}])
  };
};
