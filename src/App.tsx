import React, { useState } from "react";
import Login from "./pages/Login";
import Hello from "./pages/Hello";

export default function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div>
      {!user ? (
        <Login onLogin={(name) => setUser(name)} />
      ) : (
        <Hello username={user} onLogout={() => setUser(null)} />
      )}
    </div>
  );
}
