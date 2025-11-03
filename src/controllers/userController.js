const { registerUser, loginUser } = require('../service/userService');

exports.register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res.status(400).json({ error: 'Campos obrigatórios: username, password, role.' });
    }
    const user = await registerUser({ username, password, role });
    res.status(201).json({ id: user.id, username: user.username, role: user.role });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Campos obrigatórios: username, password.' });
    }
    const result = await loginUser({ username, password });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
