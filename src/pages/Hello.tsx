import React from "react";

type Props = {
  username: string;
  onLogout: () => void;
};

export default function Hello({ username, onLogout }: Props) {
  return (
    <div className="card" role="main">
      <h2>Hello World</h2>
      <p>Welcome, {username}! This is the Hello World page.</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
}
