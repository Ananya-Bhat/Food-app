import { TextField } from '@mui/material'
import { inputLabelClasses } from "@mui/material/InputLabel";
import React from 'react'
import "./emailBox.css"
import { useFormik } from 'formik';
import * as yup from "yup";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const EmailBox = () => {

    //yup
    const validationSchema = yup.object({
        email: yup.string().email("Please enter a valid Email").required("Please enter your Email")
    })

    const initialValues = { email: "" };


    const onSubmit = (values: any) => {
        alert(JSON.stringify(values));
    }


    const formik = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });
    console.log(formik.errors)
    const navigate = useNavigate()

    return (
        <>
            <form className="emailBoxContainer" onSubmit={formik.handleSubmit}>
                <div className='relativi'>
                    <TextField name='email' value={formik.values.email} onChange={formik.handleChange} id="standard-basic" label="Email" variant="standard" sx={{
                        width: 1,
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
                        '& .MuiFormLabel-root.Mui-disabled': {
                            color: 'red',
                        },
                    }}
                        InputLabelProps={{
                            sx: {
                                // set the color of the label when not shrinked
                                color: "black",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    // set the color of the label when shrinked (usually when the TextField is focused)
                                    color: "#0000008a"
                                }
                            }
                        }} />
                    <div className='emailErrorMessage'>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</div>
                </div>
                <button className='sendOtpButton' type='submit' onSubmit={() => navigate('/login/forgotpassword')}>SEND OTP</button>
            </form>
        </>
    )
}

export default EmailBox