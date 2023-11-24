import "./EventShedule.css";

const EventShedule = () => {
  return (
    <div className="eventshedule">
      <div className="header">
        <div className="department-of-physical-container">
          <p className="department-of-physical">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya">University of Peradeniya</p>
        </div>
        <div className="headerback" />
        <img className="unilogo-icon" alt="" src="/unilogo@2x.png" />
        <div className="logout">
          <b className="log-out">Log out</b>
        </div>
        <div className="navigationbar">
          <div className="naviback" />
          <button className="home">Home</button>
          <button className="about-us">About Us</button>
          <button className="registration">Registration</button>
          <button className="payments">Payments</button>
          <button className="equipments">Equipments</button>
          <button className="sports">Sports</button>
          <button className="locker-system">Locker System</button>
          <button className="facilities">Facilities</button>
          <button className="daily-events">Daily Events</button>
          <button className="classes">Classes</button>
          <button className="special-programmes">Special Programmes</button>
        </div>
        <img className="uopname-icon" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer">
        <img className="mapimage-icon" alt="" src="/mapimage@2x.png" />
        <div className="contactus">
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
      <img className="backpic1-icon" alt="" src="/backpic1@2x.png" />
      <div className="eventbox">
        <div className="eventbutton1">
          <img
            className="pexels-thibault-trillet-167491-icon"
            alt=""
            src="/pexelsthibaulttrillet167491-1@2x.png"
          />
          <div className="musical-events">MUSICAL EVENTS</div>
        </div>
        <div className="eventbutton3">
          <img
            className="pexels-thibault-trillet-167491-icon"
            alt=""
            src="/pexelsthibaulttrillet167491-11@2x.png"
          />
          <div className="special-programmes1">SPECIAL PROGRAMMES</div>
        </div>
        <div className="eventbutton2">
          <img
            className="pexels-thibault-trillet-167491-icon"
            alt=""
            src="/pexelsthibaulttrillet167491-12@2x.png"
          />
          <div className="musical-events">SPORT EVENTS</div>
        </div>
        <div className="eventbutton11">
          <img
            className="pexels-thibault-trillet-167491-icon"
            alt=""
            src="/pexelsthibaulttrillet167491-13@2x.png"
          />
          <div className="musical-events">DAILY EVENTS</div>
        </div>
        <div className="available-events">Available Events</div>
        <img className="line-icon" alt="" src="/line.svg" />
      </div>
    </div>
  );
};

export default EventShedule;
