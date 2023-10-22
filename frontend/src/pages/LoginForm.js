import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const onCreatesAnAccountClick = useCallback(() => {
    navigate("/registrationform");
  }, [navigate]);

  return (
    <div className="login-form">
      <div className="background5" />
      <div className="loginback1" />
      <img className="loginlogo-icon" alt="" src="/loginlogo@2x.png" />
      <a className="creates-an-account" onClick={onCreatesAnAccountClick}>
        Creates an Account
      </a>
      <div className="sign-in-to">Sign in to start your session</div>
      <b className="login">Login</b>
      <div className="usernameinput" />
      <img className="usernameicon" alt="" src="/usernameicon@2x.png" />
      <div className="passwordinput" />
      <img className="passwordicon" alt="" src="/passwordicon@2x.png" />
      <input className="password1" placeholder="Password" type="text" />
      <input
        className="email-username"
        placeholder="Email / Username"
        type="text"
      />
      <button className="signinbox" />
      <div className="login1">LOGIN</div>
    </div>
  );
};

export default LoginForm;
