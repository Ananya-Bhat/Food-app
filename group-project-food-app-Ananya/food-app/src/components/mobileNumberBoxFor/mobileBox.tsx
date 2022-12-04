import { Autocomplete, inputLabelClasses, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import countries from '../../data/countryList'
import "./mobileBox.css"
import { useFormik } from 'formik';
import * as yup from "yup";
import { NavLink, useNavigate } from 'react-router-dom'

const MobileBox = () => {
    let countriesList: any = countries;
    console.log(countriesList);

    //yup
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object({
        number: yup.string().matches(phoneRegExp, "Please Enter a valid Mobile Number").required("Please enter your Mobile Number")
    })

    const initialValues = { number: "" };


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

    const navigate = useNavigate();
    return (
        <>
            <form className="emailBoxContainer" onSubmit={formik.handleSubmit}>
                <div className='mobileInputDiv'>
                    <div className='countryList'>
                        <img src={require("../../assets/flag.png")} alt="flg" className='classNameIcon' />
                        <span className='code'>+91</span>
                        <img src={require("../../assets/icn_arrow_drop.png")} alt="" />
                    </div>
                    <TextField name="number" value={formik.values.number} onChange={formik.handleChange} id="standard-basic" label="." variant="standard" sx={{
                        width: 0.75,
                        '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                        '& .MuiInput-underline:after': { borderBottomColor: '#0000007f' },
                        '& .MuiFormLabel-root.Mui-disabled': {
                            color: 'red',
                        },
                    }}
                        InputLabelProps={{
                            sx: {
                                // set the color of the label when not shrinked
                                color: "transparent",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    // set the color of the label when shrinked (usually when the TextField is focused)
                                    color: "transparent"
                                }
                            }
                        }} />
                    <div className='phoneErrorMessage'>{formik.touched.number && formik.errors.number ? formik.errors.number : ""}</div>
                </div>
                <button className='sendOtpButton' type='submit' onSubmit={() => navigate('/login/forgotpassword')}>SEND OTP</button>

            </form>
        </>
    )
}

export default MobileBox