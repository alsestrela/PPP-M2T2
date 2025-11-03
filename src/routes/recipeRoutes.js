const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { authenticateToken, authorizeRole } = require('../service/auth');

// List and get recipes (admin or guest)
router.get('/', authenticateToken, recipeController.list);
router.get('/:id', authenticateToken, recipeController.get);

// Create, update, delete (admin only)
router.post('/', authenticateToken, authorizeRole('admin'), recipeController.create);
router.put('/:id', authenticateToken, authorizeRole('admin'), recipeController.update);
router.delete('/:id', authenticateToken, authorizeRole('admin'), recipeController.remove);

module.exports = router;
