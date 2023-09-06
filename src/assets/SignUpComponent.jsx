import { useState } from "react";
import "./SignUpComponent.css";

export function SignUpComponent() {
  //sign up button
  const [signUpBool, setSignUpBool] = useState(false);
  const toggleSignUpBool = () => {
    setSignUpBool(!signUpBool);
  };

  //form input
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const acceptFormData = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  //submit the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. New data:", formData);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="sign-up-component-container">
        <button onClick={toggleSignUpBool} className="sign-up-button">
          Sign Up!
        </button>
        {signUpBool && (
          <div className="form-container">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={acceptFormData}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={acceptFormData}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={acceptFormData}
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className="create-account-button">
                Create Account!
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
