const controller = {
  get: (req, res) => {
    res.send('hello from get');
  },
  post: (req, res) => {
    res.send('hello from post');
  },
  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = controller;
