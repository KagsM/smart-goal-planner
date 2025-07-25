const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const DB_FILE = './db.json';

// Helper to read db.json
function readDB() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

// Helper to write db.json
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// GET all goals
app.get('/goals', (req, res) => {
  const db = readDB();
  res.json(db.goals || []);
});

// POST new goal
app.post('/goals', (req, res) => {
  const db = readDB();
  const newGoal = req.body;
  db.goals.push(newGoal);
  writeDB(db);
  res.status(201).json(newGoal);
});

// PATCH goal by id
app.patch('/goals/:id', (req, res) => {
  const db = readDB();
  const id = req.params.id;
  const goal = db.goals.find(g => String(g.id) === id);
  if (!goal) return res.status(404).json({ error: 'Goal not found' });
  Object.assign(goal, req.body);
  writeDB(db);
  res.json(goal);
});

// DELETE goal by id
app.delete('/goals/:id', (req, res) => {
  const db = readDB();
  const id = req.params.id;
  db.goals = db.goals.filter(g => String(g.id) !== id);
  writeDB(db);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});