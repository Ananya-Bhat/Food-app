import { inputLabelClasses, TextField } from "@mui/material";
import React from "react";
import "./loginOne.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import { useFormik } from "formik";
import * as yup from "yup"
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import ForgotPassword from "../forgotPassword/forgotPassword";
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter a Email"),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter strong password")
    .required("Please enter password"),
});

const LoginOne = () => {
  const initialvalues = {
    email: "",
    password: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  const [password, setPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setPassword(!password);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className="loginContainer">
        <div className="loginClose">
          <img
            src={require("../../assets/close_button.png")}
            alt=""
            onClick={handleClose}
          />
        </div>
        <div className="LoginOneContent">
          <div className="loginOneText">Lets get started!</div>
          <form className="loginOneFormM" onSubmit={handleSubmit}>
            <div className="loginOneForm">
              <div className="loginOneFeild">
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    width: 1,
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "black",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0000007f",
                    },
                    "& .MuiFormLabel-root.Mui-disabled": {
                      color: "red",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      // set the color of the label when not shrinked
                      color: "#0000008a",
                      [`&.${inputLabelClasses.shrink}`]: {
                        // set the color of the label when shrinked (usually when the TextField is focused)
                        color: "#0000008a",
                      },
                    },
                  }}
                />
                <div className="loginOneError">{errors.email}</div>
              </div>
              <div className="loginTxtImg">
                <div className="loginOneFeild">
                  <TextField
                    id="standard-basic"
                    label="Password"
                    type={password ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    sx={{
                      width: 1,
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#0000007f",
                      },
                      "& .MuiFormLabel-root.Mui-disabled": {
                        color: "red",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: "#0000008a",
                        [`&.${inputLabelClasses.shrink}`]: {
                          // set the color of the label when shrinked (usually when the TextField is focused)
                          color: "#0000008a",
                        },
                      },
                    }}
                  />
                </div>
                <div className="loginOneError">{errors.password}</div>
                <img
                  src={require("../../assets/icn_view_inactive.png")}
                  alt=""
                  className="passwordImg"
                  onClick={togglePassword}
                />
              </div>
            </div>
            <div className="forgetText">Forgot Password?</div>
            <button className="loginOneLogin">LOGIN</button>
          </form>
          <div className="loginWhole">
            <div className="googleFace">
              <button className="facebookBtn">Facebook</button>
              <button className="googleBtn">Google+</button>
            </div>
            <div className="LoginAccount">
              <div className="noAccount">Dont have an account?</div>
              <div className="getOne">Get one now!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOne;
