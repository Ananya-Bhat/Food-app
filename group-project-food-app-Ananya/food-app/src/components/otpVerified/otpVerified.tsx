import { inputLabelClasses, TextField } from "@mui/material";
import "./otpVerified.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { regDetailsAsyncThunk } from "../../redux/reducers/regDetailsSlice";
import { useNavigate } from "react-router-dom";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  mobileNumber: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  //   email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const OtpVerified = () => {
  const dispatch = useDispatch();
  const enteredEmail = useSelector((state: any) => state.verifyEmail.email);
  const initialValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  };
  const resRegDetails = useSelector((state: any) => state.verifyOtpReg);
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  const submitHandler = (e: any) => {
    const mobile = "+91" + e.target.mobileNumber.value;
    console.log(mobile);

    e.preventDefault();
    dispatch(
      regDetailsAsyncThunk({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        emailId: enteredEmail,
        mobileNo: mobile,
        password: e.target.password.value,
      })
    );
    if (
      resRegDetails &&
      resRegDetails.data &&
      resRegDetails.data.status === 200
    ) {
      // console.log("200");
      navigate("/signup/verifyotp/verified/done");
    } else {
      alert(resRegDetails && resRegDetails.message);
    }
  };
  // console.log("formik", formik);

  return (
    <>
      <div className="OtpVerifiedContainer">
        <div className="verifiedBack">
          <img
            src={require("../../assets/back.png")}
            alt=""
            className="backButton"
          />
        </div>
        <div className="verifiedBodyContent">
          <div className="verifiedHeader">
            <div className="verifiedTitle">Verified!</div>
            <div className="verifiedText">
              <div className="verifiedTextOne">Your Email is verified.</div>
              <div className="verifiedTextTwo">
                Finally enter details below to create account.
              </div>
            </div>
          </div>
          {/* <div className="verifiedFormParent"> */}
          <form
            className="otpVerifiedForm"
            onSubmit={(e: any) => {
              handleSubmit();
              submitHandler(e);
            }}
          >
            <div className="verifiedFirstName">
              <TextField
                id="standard-basic"
                name="firstName"
                label="First Name"
                variant="standard"
                value={values.firstName}
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
              {errors.firstName && touched.firstName ? (
                <p className="form-error">{errors.firstName}</p>
              ) : null}
            </div>

            <div className="verifiedLastName">
              <TextField
                id="standard-basic"
                label="Last Name"
                name="lastName"
                variant="standard"
                value={values.lastName}
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
              {errors.lastName && touched.lastName ? (
                <p className="form-error">{errors.lastName}</p>
              ) : null}
            </div>

            <div className="verifiedMobileNumber">
              <div className="countryList">
                <img
                  src={require("../../assets/flag.png")}
                  alt="flg"
                  className="classNameIcon"
                />
                <span className="code">+91</span>
                <img src={require("../../assets/icn_arrow_drop.png")} alt="" />
              </div>
              <TextField
                id="standard-basic"
                label="."
                variant="standard"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{
                  width: 0.75,
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
                    color: "transparent",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "transparent",
                    },
                  },
                }}
              />
              {errors.mobileNumber && touched.mobileNumber ? (
                <p className="form-error">{errors.mobileNumber}</p>
              ) : null}
            </div>

            <div className="verifiedPassword">
              <TextField
                id="standard-basic"
                label="Create Password"
                name="password"
                variant="standard"
                value={values.password}
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

              <img
                src={require("../../assets/eye_on.png")}
                alt="eye"
                className="toggleEye"
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <div className="VerifiedButton">
              <input type="submit" value="DONE" className="verifiedDoneText" />
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default OtpVerified;
