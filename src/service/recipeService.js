const { recipes } = require('../model/db');
const Recipe = require('../model/Recipe');

function createRecipe(data, userId) {
  const recipe = new Recipe({ ...data, createdBy: userId });
  recipes.push(recipe);
  return recipe;
}

function getRecipes({ filters = {}, page = 1, limit = 10, sort = 'criado_em', order = 'desc' }) {
  let filtered = recipes;
  // Filtering
  if (filters.category) filtered = filtered.filter(r => r.category === filters.category);
  if (filters.calories) filtered = filtered.filter(r => r.calories === filters.calories);
  if (filters.level) filtered = filtered.filter(r => r.level === filters.level);
  if (filters.cost) filtered = filtered.filter(r => r.cost === filters.cost);
  if (filters.tags) filtered = filtered.filter(r => filters.tags.every(tag => r.tags.includes(tag)));
  // Sorting
  filtered = filtered.sort((a, b) => {
    if (order === 'asc') return a[sort] > b[sort] ? 1 : -1;
    return a[sort] < b[sort] ? 1 : -1;
  });
  // Pagination
  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);
  return { total, page, limit, recipes: paginated };
}

function getRecipeById(id) {
  return recipes.find(r => r.id === id);
}

function updateRecipe(id, data, userId) {
  const recipe = recipes.find(r => r.id === id && r.createdBy === userId);
  if (!recipe) return null;
  Object.assign(recipe, data);
  recipe.atualizado_em = new Date();
  return recipe;
}

function deleteRecipe(id, userId) {
  const idx = recipes.findIndex(r => r.id === id && r.createdBy === userId);
  if (idx === -1) return false;
  recipes.splice(idx, 1);
  return true;
}

module.exports = { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe };