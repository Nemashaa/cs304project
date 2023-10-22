import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DailyEvents.css";

const DailyEvents = () => {
  const navigate = useNavigate();

  const onCancelContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="dailyevents">
      <div className="background1" />
      <div className="topicrow" />
      <div className="row1" />
      <div className="row2" />
      <div className="row3" />
      <div className="row4" />
      <div className="row5" />
      <div className="row6" />
      <div className="row7" />
      <div className="row8" />
      <div className="row81" />
      <div className="row9" />
      <div className="row10" />
      <div className="row11" />
      <div className="row12" />
      <div className="pm-500pm">2.00p.m.-5.00p.m</div>
      <div className="monday">Monday</div>
      <div className="tuesday">Tuesday</div>
      <div className="wednsday">Wednsday</div>
      <div className="monday1">Monday</div>
      <div className="friday">Friday</div>
      <div className="thursday">Thursday</div>
      <div className="monday2">Monday</div>
      <div className="tuesday1">Tuesday</div>
      <div className="friday1">Friday</div>
      <div className="monday3">Monday</div>
      <div className="tuesday2">Tuesday</div>
      <div className="practices">Practices</div>
      <div className="date1">Date</div>
      <div className="time1">Time</div>
      <div className="baseball3">Baseball</div>
      <div className="badminton1">Badminton</div>
      <div className="basketball">Basketball</div>
      <div className="carrom">Carrom</div>
      <div className="chess">Chess</div>
      <div className="cricket">Cricket</div>
      <div className="elle">Elle</div>
      <div className="football">Football</div>
      <div className="hockey">Hockey</div>
      <div className="karate">Karate</div>
      <div className="kick-boxing">Kick Boxing</div>
      <div className="pm-500pm1">2.00p.m.-5.00p.m</div>
      <div className="pm-500pm2">2.00p.m.-5.00p.m</div>
      <div className="line1" />
      <div className="line2" />
      <div className="header3">
        <div className="daily-events1">Daily Events</div>
      </div>
      <div className="cancel6" onClick={onCancelContainerClick}>
        <div className="cancel7">Cancel</div>
      </div>
    </div>
  );
};

export default DailyEvents;
