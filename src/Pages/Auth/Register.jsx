import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      setLoading(true);

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);

      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        name,
        email,
      });
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
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{!loading ? "Sign up" : "Loading..."}</button>
          {error && <span>Check Details Correctly!</span>}
        </form>
        <p>
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
