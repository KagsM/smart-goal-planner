import React, { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  const addGoal = (newGoal) => {
    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals([...goals, data]));
  };

  const updateGoal = (updatedGoal) => {
    fetch(`http://localhost:3001/goals/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) =>
        setGoals(goals.map((goal) => (goal.id === data.id ? data : goal)))
      );
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: "DELETE",
    }).then(() => setGoals(goals.filter((goal) => goal.id !== id)));
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <Overview goals={goals} />
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
    </div>
  );
}

export default App;