const { v4: uuidv4 } = require('uuid');

class User {
  constructor({ username, passwordHash, role }) {
    this.id = uuidv4();
    this.username = username;
    this.passwordHash = passwordHash;
    this.role = role; // 'admin' ou 'guest'
    this.criado_em = new Date();
    this.atualizado_em = new Date();
  }
}

module.exports = User;
