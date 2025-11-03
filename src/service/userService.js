const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../model/db');
const User = require('../model/User');
const { JWT_SECRET } = require('./auth');

async function registerUser({ username, password, role }) {
  if (users.find(u => u.username === username)) {
    throw { status: 400, message: 'Usuário já existe.' };
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ username, passwordHash, role });
  users.push(user);
  return user;
}

async function loginUser({ username, password }) {
  const user = users.find(u => u.username === username);
  if (!user) throw { status: 401, message: 'Usuário ou senha inválidos.' };
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw { status: 401, message: 'Usuário ou senha inválidos.' };
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '2h' });
  return { token, user: { id: user.id, username: user.username, role: user.role } };
}

module.exports = { registerUser, loginUser };