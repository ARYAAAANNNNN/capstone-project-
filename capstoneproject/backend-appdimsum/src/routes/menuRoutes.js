const express    = require('express');
const router     = express.Router();
const {
  getAllMenu,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} = require('../controllers/menuController');

// GET    /api/menu        → get all menu items
router.get('/', getAllMenu);

// GET    /api/menu/:id    → get a single menu item by id
router.get('/:id', getMenuById);

// POST   /api/menu        → create a new menu item
router.post('/', createMenu);

// PUT    /api/menu/:id    → update an existing menu item by id
router.put('/:id', updateMenu);

// DELETE /api/menu/:id    → delete a menu item by id
router.delete('/:id', deleteMenu);

module.exports = router;