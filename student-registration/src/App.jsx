
import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>Student Registration Form</h1>
      <p>Please fill in your details below.</p>

      <form>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <label>Address</label>
        <textarea placeholder="Enter your address"></textarea>

        <label>State</label>
        <input type="text" placeholder="Enter your state" />

        <label>Country</label>
        <input type="text" placeholder="Enter your country" />

        <label>Occupation</label>
        <select>
          <option value="">Select occupation</option>
          <option>Student</option>
          <option>Employee</option>
          <option>Business</option>
          <option>Freelancer</option>
          <option>Other</option>
        </select>

        <label>Message / Suggestions</label>
        <textarea placeholder="Write your suggestions"></textarea>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default App;

