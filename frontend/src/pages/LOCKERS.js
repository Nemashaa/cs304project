import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LOCKERS.css";

const LOCKERS = () => {
  const navigate = useNavigate();

  const onBadmintonContainerClick = useCallback(() => {
    navigate("/batminton");
  }, [navigate]);

  const onBaseballContainerClick = useCallback(() => {
    navigate("/batminton");
  }, [navigate]);

  return (
    <div className="lockers">
      <img className="background-icon2" alt="" src="/background2.svg" />
      <div className="strow1">
        <div className="badminton4" onClick={onBadmintonContainerClick}>
          <b className="b23">01</b>
          <b className="b23">Badminton</b>
        </div>
        <div className="baseball6" onClick={onBaseballContainerClick}>
          <b className="b23">02</b>
          <b className="b23">Baseball</b>
        </div>
        <button className="basketball5">
          <b className="b25">03</b>
          <b className="b25">Basketball</b>
        </button>
        <div className="carrom3">
          <b className="b23">04</b>
          <b className="b23">Carrom</b>
        </div>
        <div className="carrom3">
          <b className="b23">05</b>
          <b className="b23">Chess</b>
        </div>
      </div>
      <div className="ndrow1">
        <div className="cricket3">
          <b className="b23">06</b>
          <b className="b23">Cricket</b>
        </div>
        <div className="cricket3">
          <b className="b23">07</b>
          <b className="b23">Elle</b>
        </div>
        <div className="cricket3">
          <b className="b23">08</b>
          <b className="b23">Football</b>
        </div>
        <div className="cricket3">
          <b className="b23">09</b>
          <b className="b23">Hockey</b>
        </div>
        <div className="cricket3">
          <b className="b23">10</b>
          <b className="b23">Karate</b>
        </div>
      </div>
      <div className="rdrow1">
        <div className="kick-boxing4">
          <b className="b23">11</b>
          <b className="b23">
            <p className="kick-boxing6">Kick Boxing</p>
          </b>
        </div>
        <div className="kick-boxing4">
          <b className="b23">12</b>
          <b className="b23">Netball</b>
        </div>
        <div className="kick-boxing4">
          <b className="b23">13</b>
          <b className="b23">Power Lifting</b>
        </div>
        <div className="kick-boxing4">
          <b className="b23">14</b>
          <b className="b23">Road Race</b>
        </div>
        <div className="kick-boxing4">
          <b className="b23">15</b>
          <b className="rugby-football3">Rugby Football</b>
        </div>
      </div>
      <div className="throw2">
        <div className="taekwondo2">
          <b className="b38">16</b>
          <b className="b23">Taekwondo</b>
        </div>
        <div className="taekwondo2">
          <b className="b23">17</b>
          <b className="b23">{`Track & Field`}</b>
        </div>
        <div className="taekwondo2">
          <b className="b23">18</b>
          <b className="b23">Swimming</b>
        </div>
        <div className="taekwondo2">
          <b className="b23">19</b>
          <b className="b23">Table Tennis</b>
        </div>
        <div className="taekwondo2">
          <b className="b23">20</b>
          <b className="b23">Tennis</b>
        </div>
      </div>
      <div className="throw3">
        <div className="volleyball2">
          <b className="b23">
            <p className="kick-boxing6">21</p>
          </b>
          <b className="b23">Volleyball</b>
        </div>
        <div className="volleyball2">
          <b className="b23">
            <p className="kick-boxing6">22</p>
          </b>
          <b className="rugby-football3">Weight Lifting</b>
        </div>
        <div className="volleyball2">
          <b className="b23">23</b>
          <b className="b23">Wrestling</b>
        </div>
      </div>
      <div className="lockerheader">
        <div className="headerback2" />
        <div className="lockerheader1">
          <div className="locker-system1">LOCKER SYSTEM</div>
        </div>
      </div>
    </div>
  );
};

export default LOCKERS;
