import React, { useState } from "react";

type Props = {
  onLogin: (username: string) => void;
};

const VALID_USERNAME = "jhernandez";
const VALID_PASSWORD = "12345";

export default function Login({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const u = username.trim();
    if (!u) {
      setError("Please enter a username");
      return;
    }

    if (u !== VALID_USERNAME || password !== VALID_PASSWORD) {
      setError("Invalid username or password");
      return;
    }

    onLogin(u);
  }

  return (
    <div className="card" role="region" aria-label="Login form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          autoFocus
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {error && <p style={{ color: "crimson" }}>{error}</p>}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
