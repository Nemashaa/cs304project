import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Batminton.css";

const Batminton = () => {
  const navigate = useNavigate();

  const onBookRacketsContainerClick = useCallback(() => {
    navigate("/equipmentbooking");
  }, [navigate]);

  const onBookShuttlecocksContainerClick = useCallback(() => {
    navigate("/equipmentbooking");
  }, [navigate]);

  const onCancelContainerClick = useCallback(() => {
    navigate("/lockers");
  }, [navigate]);

  return (
    <div className="batminton">
      <img className="background-icon1" alt="" src="/background1.svg" />
      <div className="bookrackets" onClick={onBookRacketsContainerClick}>
        <b className="book3">Book</b>
      </div>
      <div
        className="bookshuttlecocks"
        onClick={onBookShuttlecocksContainerClick}
      >
        <b className="book3">Book</b>
      </div>
      <img
        className="badmintonimage-icon"
        alt=""
        src="/badmintonimage@2x.png"
      />
      <div className="headerback1" />
      <div className="locker1header">
        <b className="book3">Locker 01</b>
        <b className="badminton">Badminton</b>
      </div>
      <div className="div6">10</div>
      <div className="div7">10</div>
      <div className="div8">10</div>
      <div className="div9">10</div>
      <div className="total-number-of-container2">
        <p className="total-number-of3">{`Total number of Badminton Rackets         -  `}</p>
        <p className="total-number-of3">{`Available number of Badminton Rackets  - `}</p>
        <p className="total-number-of3">&nbsp;</p>
        <p className="total-number-of3">{`Total number of Shuttlecock          - `}</p>
        <p className="total-number-of3">{`Available number of Shuttlecock   - `}</p>
      </div>
      <div className="cancel4" onClick={onCancelContainerClick}>
        <div className="book3">Cancel</div>
      </div>
    </div>
  );
};

export default Batminton;
