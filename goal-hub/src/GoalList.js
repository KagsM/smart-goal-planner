import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default GoalList;