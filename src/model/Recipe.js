const { v4: uuidv4 } = require('uuid');

class Recipe {
  constructor({
    title,
    description,
    category,
    calories,
    level,
    cost,
    tags = [],
    nutrition = {},
    createdBy
  }) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.category = category; // e.g., 'Pães', 'Bolos', etc.
    this.calories = calories; // e.g., '0-200', '200-500', etc.
    this.level = level; // 'Fácil', 'Médio', 'Difícil'
    this.cost = cost; // '$', '$$', '$$$'
    this.tags = tags; // e.g., ['sem glúten', 'vegana']
    this.nutrition = nutrition; // { protein, carbs, fat, etc. }
    this.createdBy = createdBy; // user id
    this.criado_em = new Date();
    this.atualizado_em = new Date();
  }
}

module.exports = Recipe;
