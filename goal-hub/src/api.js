const API_URL = "http://localhost:3000/goals";

export const fetchGoals = () => fetch(API_URL).then(res => res.json());

export const createGoal = (goal) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  }).then(res => res.json());

export const updateGoal = (id, updates) =>
  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then(res => res.json());

export const deleteGoal = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });