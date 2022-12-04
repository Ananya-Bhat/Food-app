import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import "./ForgotPasswordSuccess.css";
const ForgotPasswordSuccess = () => {
  const dispatch = useDispatch();
  return (
    <>
      <img
        src={require("../../assets/close_button.png")}
        alt="close"
        className="closeButtonIcn"
        onClick={() => dispatch(closeModal())}
      />
      <div className="passwordSuccessContainer">
        <img
          src={require("../../assets/icn_password_success.png")}
          alt="success"
          className="imgSuccess"
        />
        <div className="successHeading">Great!</div>
        <div className="successText">
          Your password has been successfully reset
        </div>
        <button className="loginNowButton">LOGIN NOW</button>
      </div>
    </>
  );
};

export default ForgotPasswordSuccess;
