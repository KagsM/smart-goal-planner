import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [goal, setGoal] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
    savedAmount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({ ...goal, targetAmount: Number(goal.targetAmount) });
    setGoal({
      name: "",
      category: "",
      targetAmount: "",
      deadline: "",
      savedAmount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={goal.name} onChange={handleChange} placeholder="Name" />
      <input name="category" value={goal.category} onChange={handleChange} placeholder="Category" />
      <input name="targetAmount" type="number" value={goal.targetAmount} onChange={handleChange} placeholder="Target Amount" />
      <input name="deadline" type="date" value={goal.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;