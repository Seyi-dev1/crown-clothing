import "./PaymentDetails.scss";
import crown from "../../assets/161 favicon.ico";
import { useDispatch } from "react-redux";
import { changeVisibility } from "../../redux/payment/paymentReducer";
import React from "react";
import { PaystackButton } from "react-paystack";

const PaymentDetails = (props) => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const dispatch = useDispatch();

  const amount = Number(props.total * 100);

  const publicKey = "pk_test_4e2534745af410dd0f5f59dcf2edfb30cd4995fb";

  const { name, email, phone } = inputs;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="payment-details">
      <div className="card">
        <div className="header">
          <div className="image">
            <img src={crown} alt="crown" className="image" />
            <h3>Regal</h3>
          </div>
          <span className="cancel" onClick={() => dispatch(changeVisibility())}>
            &#10005;
          </span>
        </div>
        <div className="form">
          <label htmlFor="name">NAME</label>
          <br />
          <input
            name="name"
            id="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">EMAIL</label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">PHONE</label>
          <br />
          <input
            name="phone"
            id="phone"
            type="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
          <p className="money">Your total is ₦{props.total}</p>
          <PaystackButton className="paystack" {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
