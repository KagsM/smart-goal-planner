import React, { useEffect, useState } from "react";
import { fetchGoals, createGoal, updateGoal, deleteGoal } from "./api";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAddGoal = (goal) => {
    createGoal(goal).then(newGoal => setGoals([...goals, newGoal]));
  };

  const handleUpdateGoal = (id, updates) => {
    updateGoal(id, updates).then(updated =>
      setGoals(goals.map(g => (g.id === id ? updated : g)))
    );
  };

  const handleDeleteGoal = (id) => {
    deleteGoal(id).then(() =>
      setGoals(goals.filter(g => g.id !== id))
    );
  };

  return (
    <div className="App">
      <h1>🎯 Goal Management Dashboard</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onUpdateGoal={handleUpdateGoal} />
      <GoalList
        goals={goals}
        onUpdate={handleUpdateGoal}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
}

export default App;