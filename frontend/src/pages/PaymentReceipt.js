import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentReceipt.css";

const PaymentReceipt = () => {
  const navigate = useNavigate();

  const onBackToHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="payment-receipt">
      <div className="background2" />
      <div className="payment-receipt1">
        <div className="reference-number-container">
          <p className="reference-number">Reference Number :</p>
          <p className="reference-number">&nbsp;</p>
          <p className="reference-number">Payment For :</p>
          <p className="reference-number">&nbsp;</p>
          <p className="reference-number">Date :</p>
          <p className="reference-number">&nbsp;</p>
          <p className="reference-number">Submitter :</p>
          <p className="reference-number">
            <a
              className="blank-line13"
              href="mailto:s18377@sci.pdn.ac.lk"
              target="_blank"
            >
              <span className="blank-line14">&nbsp;</span>
            </a>
          </p>
          <p className="reference-number">Currency :</p>
          <p className="reference-number">&nbsp;</p>
          <p className="reference-number">Amount :</p>
        </div>
        <div className="this-is-the-container">
          <p className="reference-number">
            This is the e-receipt issued by the Gymnasium of, University of
            Peradeniya.
          </p>
          <p className="reference-number">
            Make sure you received this email from a verified university email.
          </p>
        </div>
        <div className="faculty-of-physical">
          ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
        </div>
        <div className="headerpart1" />
        <div className="headerpart2" />
        <div className="receipt-online">Receipt - Online Payment</div>
        <div className="div10">2023120612789</div>
        <div className="booking-netball-court-2023-4-4">
          Booking_Netball_Court_2023_4_4
        </div>
        <div className="s18554scipdnaclk">s18554@sci.pdn.ac.lk</div>
        <div className="lkr">LKR</div>
        <div className="div11">3500.00</div>
        <div className="div12">2023-10-11</div>
      </div>
      <div className="faculty-of-physical-container">
        <p className="reference-number">Faculty of Physical Education</p>
        <p className="reference-number">University of Peradeniya</p>
      </div>
      <div className="headerline" />
      <img className="unilogo-icon1" alt="" src="/unilogo1@2x.png" />
      <div className="backtohome" onClick={onBackToHomeContainerClick}>
        <div className="back-to-home">Back to Home</div>
      </div>
    </div>
  );
};

export default PaymentReceipt;
