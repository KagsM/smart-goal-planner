import React, { useState } from "react";

export default function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
    savedAmount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({ ...formData, targetAmount: +formData.targetAmount });
    setFormData({ name: "", targetAmount: "", category: "", deadline: "", savedAmount: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Goal</h3>
      <input placeholder="Name" value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Target Amount" type="number" value={formData.targetAmount}
        onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })} />
      <input placeholder="Category" value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
      <input type="date" value={formData.deadline}
        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })} />
      <button type="submit">Add Goal</button>
    </form>
  );
}