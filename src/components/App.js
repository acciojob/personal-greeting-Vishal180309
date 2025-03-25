import React, { useState } from "react";

const PersonalizedGreeting = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <h2>{name ? `Hello, ${name}!` : ""}</h2>
    </div>
  );
};

export default PersonalizedGreeting;
