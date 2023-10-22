import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Equipments.css";

const Equipments = () => {
  const navigate = useNavigate();

  const onBadmintonContainerClick = useCallback(() => {
    navigate("/batminton");
  }, [navigate]);

  const onBaseballContainerClick = useCallback(() => {
    navigate("/baseball");
  }, [navigate]);

  return (
    <div className="equipments1">
      <div className="strow">
        <div className="badminton2" onClick={onBadmintonContainerClick}>
          <b className="b">01</b>
          <b className="b">Badminton</b>
        </div>
        <div className="baseball4" onClick={onBaseballContainerClick}>
          <b className="b">02</b>
          <b className="b">Baseball</b>
        </div>
        <button className="basketball3">
          <b className="b2">03</b>
          <b className="b2">Basketball</b>
        </button>
        <div className="netball">
          <b className="b">04</b>
          <b className="b">Carrom</b>
        </div>
        <div className="netball">
          <b className="b">05</b>
          <b className="b">Chess</b>
        </div>
      </div>
      <div className="ndrow">
        <div className="netball">
          <b className="b">06</b>
          <b className="b">Cricket</b>
        </div>
        <div className="netball">
          <b className="b">07</b>
          <b className="b">Elle</b>
        </div>
        <div className="netball">
          <b className="b">08</b>
          <b className="b">Football</b>
        </div>
        <div className="netball">
          <b className="b">09</b>
          <b className="b">Hockey</b>
        </div>
        <div className="netball">
          <b className="b">10</b>
          <b className="b">Karate</b>
        </div>
      </div>
      <div className="rdrow">
        <div className="netball">
          <b className="b">11</b>
          <b className="b">
            <p className="kick-boxing3">Kick Boxing</p>
          </b>
        </div>
        <div className="netball">
          <b className="b">12</b>
          <b className="b">Netball</b>
        </div>
        <div className="netball">
          <b className="b">13</b>
          <b className="b">Power Lifting</b>
        </div>
        <div className="netball">
          <b className="b">14</b>
          <b className="b">Road Race</b>
        </div>
        <div className="netball">
          <b className="b">15</b>
          <b className="rugby-football1">Rugby Football</b>
        </div>
      </div>
      <div className="throw">
        <div className="netball">
          <b className="b">16</b>
          <b className="b">Taekwondo</b>
        </div>
        <div className="netball">
          <b className="b">17</b>
          <b className="b">{`Track & Field`}</b>
        </div>
        <div className="netball">
          <b className="b">18</b>
          <b className="b">Swimming</b>
        </div>
        <div className="netball">
          <b className="b">19</b>
          <b className="b">Table Tennis</b>
        </div>
        <div className="netball">
          <b className="b">20</b>
          <b className="b">Tennis</b>
        </div>
      </div>
      <div className="throw1">
        <div className="netball">
          <b className="b">
            <p className="kick-boxing3">21</p>
          </b>
          <b className="b">Volleyball</b>
        </div>
        <div className="netball">
          <b className="b">22</b>
          <b className="rugby-football1">Weight Lifting</b>
        </div>
        <div className="netball">
          <b className="b">23</b>
          <b className="b">Wrestling</b>
        </div>
      </div>
      <div className="header5" />
      <b className="equipments2">Equipments</b>
      <div className="search-equipment-here-wrapper">
        <input
          className="search-equipment-here"
          placeholder="Search Equipment here "
          type="text"
        />
      </div>
      <img className="searchicon1" alt="" src="/searchicon1@2x.png" />
    </div>
  );
};

export default Equipments;
