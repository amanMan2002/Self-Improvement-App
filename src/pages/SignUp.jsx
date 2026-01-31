import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function SignIn() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#000000ff" }}>
                <h1 style={{ textAlign: "center" }}>Goon Guard</h1>
                <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto", padding: "2rem", background:"#5bc0eb", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: 4, border: "1px solid #ccc" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: 4, border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{ width: "100%", padding: "0.5rem", background: "#007bff", color: "#fff", border: "none", borderRadius: 4, fontSize: "1rem", cursor: "pointer" }}
      >
        Sign In
      </button>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
        </div>
    )
}

export default SignIn;