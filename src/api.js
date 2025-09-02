const BASE = process.env.REACT_APP_API_BASE ?? "";

export const getUsers = () => fetch(`${BASE}/api/users`).then(r => r.json());

export const createUser = (payload) =>
  fetch(`${BASE}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(r => r.json());
