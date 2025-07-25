import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [goalId, setGoalId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find((g) => g.id.stringify() === Number(goalId).stringify());
    if (goal) {
      const updatedGoal = {
        ...goal,
        savedAmount: goal.savedAmount + Number(amount),
      };
      onDeposit(updatedGoal);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select onChange={(e) => setGoalId(e.target.value)} value={goalId}>
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;