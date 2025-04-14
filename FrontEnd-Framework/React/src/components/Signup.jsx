import React, { useState } from "react";
import apiClient from "../../service/apiClient.js";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setError("");

    // MAKKE A API CALL TO BAACKEND WITH DATA
    //GET RESPONSE FROM BACKEDN
    //TAKE ACTION BASED ON RESPONSE

    try {
      console.log("Trying to do a signup");
      const data = await apiClient.signup(name, email, password);
      console.log("Signup response",data);
      
    } catch (error) {
        console.log("error here");
        
    }
  };

  return (
    <div className="">
      <h1>Welcome to signup page</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* conditional rendering  */}
        {/* { Boolean ? " " : ""} */}
        {/* {loading ?"signup..": "signup.."} */}
        <button type="submit" disabled={loading}>
          {loading ? "signup.." : "signup.."}
        </button>
      </form>
    </div>
  );
}

export default Signup;
