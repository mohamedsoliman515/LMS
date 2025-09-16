import { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";

const SignIn = () => {
  const { signinContainer, signinForm, formGroup, btn } = styles;
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post(
        "https://example.com/api/signin",
        formData
      );
      console.log("Success:", response.data);
      alert("Login successful!");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={signinContainer}>
      <form onSubmit={handleSubmit} className={signinForm}>
        <h2>Sign In</h2>

        <div className={formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className={formGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>

        <button className={btn} type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
