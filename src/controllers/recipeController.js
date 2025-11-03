const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../service/recipeService');

exports.create = (req, res, next) => {
  try {
    const recipe = createRecipe(req.body, req.user.id);
    res.status(201).json(recipe);
  } catch (err) {
    next(err);
  }
};

exports.list = (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort = 'criado_em', order = 'desc', ...filters } = req.query;
    if (filters.tags) filters.tags = filters.tags.split(',');
    const result = getRecipes({ filters, page: Number(page), limit: Number(limit), sort, order });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.get = (req, res, next) => {
  try {
    const recipe = getRecipeById(req.params.id);
    if (!recipe) return res.status(404).json({ error: 'Receita não encontrada.' });
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

exports.update = (req, res, next) => {
  try {
    const recipe = updateRecipe(req.params.id, req.body, req.user.id);
    if (!recipe) return res.status(403).json({ error: 'Você só pode editar suas próprias receitas.' });
    res.json(recipe);
  } catch (err) {
    next(err);
  }
};

exports.remove = (req, res, next) => {
  try {
    const ok = deleteRecipe(req.params.id, req.user.id);
    if (!ok) return res.status(403).json({ error: 'Você só pode excluir suas próprias receitas.' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
