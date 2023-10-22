import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Baseball.css";

const Baseball = () => {
  const navigate = useNavigate();

  const onBaseBallContainerClick = useCallback(() => {
    navigate("/equipmentbooking");
  }, [navigate]);

  const onBatBookContainerClick = useCallback(() => {
    navigate("/equipmentbooking");
  }, [navigate]);

  const onBaseballBookContainerClick = useCallback(() => {
    navigate("/equipmentbooking");
  }, [navigate]);

  const onCancelContainerClick = useCallback(() => {
    navigate("/lockers");
  }, [navigate]);

  return (
    <div className="baseball">
      <img className="background-icon" alt="" src="/background.svg" />
      <div className="baseball1" onClick={onBaseBallContainerClick}>
        <b className="book">Book</b>
      </div>
      <div className="batbook" onClick={onBatBookContainerClick}>
        <b className="book">Book</b>
      </div>
      <div className="baseballbook" onClick={onBaseballBookContainerClick}>
        <b className="book">Book</b>
      </div>
      <img className="badmintonicon" alt="" src="/badmintonicon@2x.png" />
      <div className="haederback" />
      <div className="header1">
        <div className="header2">
          <b className="book">Locker 02</b>
          <b className="baseball2">Baseball</b>
        </div>
      </div>
      <div className="total-number-of-container">
        <p className="total-number-of">Total number of Baseballs -</p>
        <p className="total-number-of">Available number of Baseballs -</p>
        <p className="total-number-of"></p>
        <p className="total-number-of">&nbsp;</p>
        <p className="total-number-of">&nbsp;</p>
      </div>
      <div className="available-number-of-container">
        <p className="total-number-of">Available number of Baseball Glove -</p>
        <p className="total-number-of">Total number of Baseball Glove -</p>
        <p className="total-number-of"></p>
        <p className="total-number-of">&nbsp;</p>
      </div>
      <div className="div">10</div>
      <div className="div1">10</div>
      <div className="div2">10</div>
      <div className="div3">10</div>
      <div className="div4">10</div>
      <div className="div5">10</div>
      <div className="cancel" onClick={onCancelContainerClick}>
        <div className="book">Cancel</div>
      </div>
      <div className="total-number-of-container1">
        <p className="total-number-of">Total number of Baseball Bat -</p>
        <p className="total-number-of">Available number of Baseball Bat -</p>
        <p className="total-number-of">&nbsp;</p>
        <p className="total-number-of">&nbsp;</p>
      </div>
    </div>
  );
};

export default Baseball;
