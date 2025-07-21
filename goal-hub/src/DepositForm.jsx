import React, { useState } from "react";

export default function DepositForm({ goals, onUpdateGoal }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();
    const selectedGoal = goals.find(g => g.id === parseInt(goalId));
    if (selectedGoal) {
      const updatedAmount = selectedGoal.savedAmount + parseFloat(amount);
      onUpdateGoal(goalId, { savedAmount: updatedAmount });
    }
    setAmount("");
    setGoalId("");
  };

  return (
    <form onSubmit={handleDeposit}>
      <h3>Make a Deposit</h3>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount}
        onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Deposit</button>
    </form>
  );
}