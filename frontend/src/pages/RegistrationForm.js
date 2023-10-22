import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const onCancelContainerClick = useCallback(() => {
    navigate("/login-form");
  }, [navigate]);

  return (
    <div className="registrationform">
      <div className="background4" />
      <div className="formbackground" />
      <div className="first-name">First Name</div>
      <div className="last-name">Last Name</div>
      <div className="gender">Gender</div>
      <div className="contact">Contact</div>
      <div className="address">Address</div>
      <div className="email">Email</div>
      <div className="new-password">New password</div>
      <div className="re-enter-password">Re-enter password</div>
      <div className="which-sport-and">
        Which Sport and Practice you are attendant in Gymnasium
      </div>
      <input className="fname" type="text" />
      <input className="lname" type="text" />
      <input className="gender1" type="text" />
      <input className="contact1" type="text" />
      <input className="adress" type="text" />
      <input className="email1" type="text" />
      <input className="password" type="text" />
      <input className="password2" type="text" />
      <input className="sports1" type="text" />
      <div className="save">
        <div className="save1">save</div>
      </div>
      <div className="cancel10" onClick={onCancelContainerClick}>
        <div className="save1">Cancel</div>
      </div>
      <div className="headerback3" />
      <div className="user-registration-form">User Registration Form</div>
      <img className="info-icon-2" alt="" src="/info-icon-2@2x.png" />
      <img className="info-icon-1" alt="" src="/info-icon-1@2x.png" />
    </div>
  );
};

export default RegistrationForm;
