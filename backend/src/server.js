const express    = require('express');
const cors       = require('cors');
const menuRoutes = require('./routes/menuRoutes');

const app  = express();
const PORT = 5000;

// ── Middleware ─────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────
app.use('/api/menu', menuRoutes);

// ── Root health-check ─────────────────────
app.get('/', (req, res) => {
  res.status(200).json({
    success : true,
    message : '🥟 Dimsum Menu API is running.',
  });
});

// ── 404 handler ───────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success : false,
    message : `Route ${req.originalUrl} not found.`,
  });
});

// ── Global error handler ──────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({
    success : false,
    message : 'Internal server error.',
    error   : err.message,
  });
});

// ── Start server ──────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});