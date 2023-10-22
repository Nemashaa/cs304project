import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onRegistrationClick = useCallback(() => {
    navigate("/registrationform");
  }, [navigate]);

  const onPaymentsClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onEquipmentsClick = useCallback(() => {
    navigate("/equipments");
  }, [navigate]);

  const onLockerSystemClick = useCallback(() => {
    navigate("/lockers");
  }, [navigate]);

  const onFacilitiesClick = useCallback(() => {
    navigate("/facilities");
  }, [navigate]);

  const onDailyEventsClick = useCallback(() => {
    navigate("/dailyevents");
  }, [navigate]);

  const onLoginBackClick = useCallback(() => {
    navigate("/login-form");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/registrationform");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="middle2">
        <img className="homeimage-icon" alt="" src="/homeimage@2x.png" />
        <b className="discription">{`The Department of Physical Education is the governing body of sports & recreational activities of the University of Peradeniya which is the oldest university in Sri Lanka. The University of Peradeniya is well known for renowned athletes and the most picturesque sporting assets which none of other universities within the Sri Lankan university system can challenge. The Department of Physical Education facilitates all the sports & recreational activities within the University and hire sports venues for concessionary rates for outsiders.`}</b>
      </div>
      <div className="middle">
        <div className="welcomeback" />
        <div className="welcome">WELCOME</div>
      </div>
      <div className="header">
        <img className="uopname-icon" alt="" src="/uopname@2x.png" />
        <div className="department-of-physical-container">
          <p className="department-of-physical">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya">University of Peradeniya</p>
        </div>
        <div className="headerback" />
        <img className="unilogo-icon" alt="" src="/unilogo@2x.png" />
        <div className="navigationbar">
          <div className="naviback" />
          <button className="home">Home</button>
          <button className="about-us">About Us</button>
          <button className="registration" onClick={onRegistrationClick}>
            Registration
          </button>
          <button className="payments" onClick={onPaymentsClick}>
            Payments
          </button>
          <button className="equipments" onClick={onEquipmentsClick}>
            Equipments
          </button>
          <button className="sports">Sports</button>
          <button className="locker-system" onClick={onLockerSystemClick}>
            Locker System
          </button>
          <button className="facilities" onClick={onFacilitiesClick}>
            Facilities
          </button>
          <button className="daily-events" onClick={onDailyEventsClick}>
            Daily Events
          </button>
          <button className="classes">Classes</button>
        </div>
        <button className="loginback" onClick={onLoginBackClick}>
          <div className="log-in">Log In</div>
        </button>
        <div className="signup" onClick={onSignUpContainerClick}>
          <button className="signupback" />
          <button className="sign-up">Sign Up</button>
        </div>
        <button className="special-programmes">Special Programmes</button>
      </div>
      <div className="footer">
        <div className="contact-us-departments-container">
          <p className="contact-us">
            <b>Contact Us</b>
          </p>
          <p className="blank-line">
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className="departments-of-physical-educat">
            <b>
              <span>Departments of Physical Education,</span>
            </b>
          </p>
          <p className="peradeniya">
            <b>
              <span>University of Peradeniya,</span>
            </b>
          </p>
          <p className="peradeniya">
            <b>
              <span>Peradeniya</span>
            </b>
          </p>
          <p className="peradeniya">
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className="telephone">
            <b>Telephone</b>
          </p>
          <p className="blank-line2">
            <b>&nbsp;</b>
          </p>
          <p className="peradeniya">
            <b>Office - 081 - 239 2162</b>
          </p>
          <p className="director-081-239-2164">
            <b>Director - 081 - 239 2164</b>
          </p>
        </div>
        <img className="callicon" alt="" src="/callicon@2x.png" />
        <img className="locationicon" alt="" src="/locationicon@2x.png" />
      </div>
    </div>
  );
};

export default Homepage;
