import React from "react";

export default function GoalCard({ goal, onUpdate, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.savedAmount;
  const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const isWarning = daysLeft <= 30 && !isOverdue && goal.savedAmount < goal.targetAmount;

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
      <p>Remaining: ${remaining}</p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p>Deadline: {goal.deadline} ({daysLeft} days left)</p>
      {isOverdue && <p style={{ color: 'red' }}>❌ Overdue</p>}
      {isWarning && <p style={{ color: 'orange' }}>⚠️ Deadline Approaching</p>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}