import React from "react";
import GoalCard from "./GoalCard";

export default function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}