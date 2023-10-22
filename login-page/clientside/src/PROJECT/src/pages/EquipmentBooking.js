import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EquipmentBooking.css";

const EquipmentBooking = () => {
  const navigate = useNavigate();

  const onCancelContainerClick = useCallback(() => {
    navigate("/batminton");
  }, [navigate]);

  const onSubmitContainerClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="equipmentbooking">
      <div className="background" />
      <div className="headerequipmentbooking">Equipment Booking</div>
      <div className="equipmentname">Equipment Name</div>
      <input className="equipmentnameinput" type="text" />
      <input className="paymentinput" type="text" />
      <div className="quantity">Quantity</div>
      <div className="payment-optional">
        <span>{`Payment `}</span>
        <span className="optional">(optional)</span>
      </div>
      <div className="dateinput" />
      <div className="datetoinput" />
      <div className="date">{`Date `}</div>
      <div className="to">To</div>
      <div className="to1">To</div>
      <div className="time">Time</div>
      <input className="quantityinput" type="text" />
      <div className="timeinput" />
      <div className="timetoinput" />
      <input
        className="pm-400"
        placeholder="1.00 p.m - 4.00 p.m "
        type="text"
      />
      <input
        className="pm-4001"
        placeholder="1.00 p.m - 4.00 p.m "
        type="text"
      />
      <img className="dateicon" alt="" src="/dateicon@2x.png" />
      <img className="dateicon1" alt="" src="/dateicon1@2x.png" />
      <input className="input" placeholder="11/13/2024" type="text" />
      <input className="input1" placeholder="11/13/2024" type="text" />
      <div className="cancel2" onClick={onCancelContainerClick}>
        <div className="cancel3">Cancel</div>
      </div>
      <img className="timeicon" alt="" src="/timeicon@2x.png" />
      <img className="timeicon1" alt="" src="/timeicon1@2x.png" />
      <div className="submit" onClick={onSubmitContainerClick}>
        <div className="cancel3">Submit</div>
      </div>
    </div>
  );
};

export default EquipmentBooking;
