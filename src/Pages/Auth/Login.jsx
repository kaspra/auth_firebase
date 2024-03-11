import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{!loading ? "Sign up" : "Loading..."}</button>
          {error && <span>Check Details Correctly!</span>}
        </form>
        <p>
          <a href="/register">Register</a>
        </p>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
};

export default Login;
