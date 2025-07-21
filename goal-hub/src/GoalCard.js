// GoalCard.js
import React from "react";

function GoalCard({ goal, onUpdate, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.savedAmount;
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const isOverdue = !isCompleted && daysLeft < 0;
  const isCloseToDeadline = daysLeft <= 30 && daysLeft >= 0;

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${remaining}</p>
      <p>Deadline: {goal.deadline}</p>
      <div style={{ width: "100%", background: "#eee" }}>
        <div
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: isCompleted ? "green" : "blue",
            height: 10,
          }}
        ></div>
      </div>
      {isCompleted && <p style={{ color: "green" }}>Goal Completed!</p>}
      {isOverdue && <p style={{ color: "red" }}>Overdue!</p>}
      {isCloseToDeadline && !isCompleted && <p style={{ color: "orange" }}>Hurry! Less than 30 days left!</p>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;