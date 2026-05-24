'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Статические файлы (CSS, JS, assets) ──────────────
app.use(express.static(path.join(__dirname)));

// ── Роут для главной страницы ─────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Fallback — всё остальное тоже отдаёт index.html ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Запуск сервера ─────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ✦  ARCHIVE сервер запущен`);
  console.log(`  ✦  http://localhost:${PORT}\n`);
});
