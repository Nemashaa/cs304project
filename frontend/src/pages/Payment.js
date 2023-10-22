import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onSubmitContainerClick = useCallback(() => {
    navigate("/payment-receipt");
  }, [navigate]);

  const onCancelContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="payment">
      <div className="background3" />
      <div className="payments1">Payments</div>
      <div className="select-method">Select Method</div>
      <div className="card-holders-name">Card Holders Name</div>
      <div className="card-number">Card Number</div>
      <div className="expire-date">Expire Date</div>
      <div className="cvc">CVC</div>
      <input className="nameinput" type="text" />
      <input className="cardnuminput" type="text" />
      <input className="monthinput" type="text" />
      <input className="yearinput" type="text" />
      <input className="cvcinput" type="text" />
      <div className="submit2" onClick={onSubmitContainerClick}>
        <div className="submit3">Submit</div>
      </div>
      <input className="amountinput" type="text" />
      <input className="paymentinput1" type="text" />
      <div className="payment-description">Payment Description</div>
      <div className="amount1">Amount</div>
      <a
        className="gpay"
        href={`https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwipjueWjYqCAxUExzgGHUNwDdMQFnoECAoQAQ&url=https%3A%2F%2Fpay.google.com%2Fgp%2Fw%2Fu%2F0%2Fhome%2Fsignup&usg=AOvVaw0XzBJGrK-9vj4-J1M3dbYI&opi=89978449`}
      >
        <div className="paypalpay" />
        <img className="gpayimage-icon" alt="" src="/gpayimage@2x.png" />
      </a>
      <a className="applepay" href="https://www.apple.com/apple-pay/">
        <div className="paypalpay" />
        <img
          className="applepayimage-icon"
          alt=""
          src="/applepayimage@2x.png"
        />
      </a>
      <a className="paypal" href="https://www.paypal.com/us/signin">
        <div className="paypalpay" />
        <img className="paypalimage-icon" alt="" src="/paypalimage@2x.png" />
      </a>
      <div className="visacard">
        <div className="paypalpay" />
        <img
          className="visacardimage-icon"
          alt=""
          src="/visacardimage@2x.png"
        />
      </div>
      <div className="mastercard">
        <div className="paypalpay" />
        <img
          className="mastercardimage-icon"
          alt=""
          src="/mastercardimage@2x.png"
        />
      </div>
      <div className="line11" />
      <div className="m-y">M | Y</div>
      <div className="cancel8" onClick={onCancelContainerClick}>
        <div className="submit3">Cancel</div>
      </div>
    </div>
  );
};

export default Payment;
