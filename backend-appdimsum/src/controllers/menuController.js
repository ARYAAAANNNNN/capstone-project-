const db = require('../config/database');

// ──────────────────────────────────────────
// GET /api/menu  →  retrieve all menu items
// ──────────────────────────────────────────
const getAllMenu = (req, res) => {
  const sql = 'SELECT * FROM menu';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success : false,
        message : 'Failed to retrieve menu items.',
        error   : err.message,
      });
    }

    res.status(200).json({
      success : true,
      message : 'Menu items retrieved successfully.',
      data    : results,
    });
  });
};

// ──────────────────────────────────────────
// GET /api/menu/:id  →  retrieve one menu item
// ──────────────────────────────────────────
const getMenuById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM menu WHERE id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        success : false,
        message : 'Failed to retrieve menu item.',
        error   : err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success : false,
        message : `Menu item with id ${id} not found.`,
      });
    }

    res.status(200).json({
      success : true,
      message : 'Menu item retrieved successfully.',
      data    : results[0],
    });
  });
};

// ──────────────────────────────────────────
// POST /api/menu  →  create a new menu item
// ──────────────────────────────────────────
const createMenu = (req, res) => {
  const { name, price, description, image, status } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success : false,
      message : 'Fields "name" and "price" are required.',
    });
  }

  const sql = 'INSERT INTO menu (name, price, description, image, status) VALUES (?, ?, ?, ?, ?)';
  const values = [name, price, description || null, image || null, status || 'available'];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({
        success : false,
        message : 'Failed to create menu item.',
        error   : err.message,
      });
    }

    res.status(201).json({
      success : true,
      message : 'Menu item created successfully.',
      data    : { id: result.insertId, name, price, description, image, status },
    });
  });
};

// ──────────────────────────────────────────
// PUT /api/menu/:id  →  update a menu item
// ──────────────────────────────────────────
const updateMenu = (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, status } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success : false,
      message : 'Fields "name" and "price" are required.',
    });
  }

  const sql = `
    UPDATE menu
    SET name = ?, price = ?, description = ?, image = ?, status = ?
    WHERE id = ?
  `;
  const values = [name, price, description || null, image || null, status || 'available', id];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({
        success : false,
        message : 'Failed to update menu item.',
        error   : err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success : false,
        message : `Menu item with id ${id} not found.`,
      });
    }

    res.status(200).json({
      success : true,
      message : 'Menu item updated successfully.',
      data    : { id: Number(id), name, price, description, image, status },
    });
  });
};

// ──────────────────────────────────────────
// DELETE /api/menu/:id  →  delete a menu item
// ──────────────────────────────────────────
const deleteMenu = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM menu WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        success : false,
        message : 'Failed to delete menu item.',
        error   : err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success : false,
        message : `Menu item with id ${id} not found.`,
      });
    }

    res.status(200).json({
      success  : true,
      message  : `Menu item with id ${id} deleted successfully.`,
    });
  });
};

module.exports = {
  getAllMenu,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};