import { Accordion, AccordionDetails, AccordionSummary, inputLabelClasses, TextField } from '@mui/material'
import React from 'react'
import RestaurantSubHeader from '../../components/restaurantSubHeader/restaurantSubHeader'
import "./restaurantMenu.css"
const RestaurantMenu = () => {
    let e = [1, 2, 3, 4];
    return (
        <>
            <div className="restaurantMenuContainer">
                <RestaurantSubHeader />
                <div className="restaurantMenuContent">
                    <div className="rcMenuLeftSide"></div>
                    <div className="rcMenuRightSide">
                        <div className="orderSummaryHead">
                            <span className="OrderHead">My Order</span>
                            <span className="clearCart">Clear Cart</span>
                        </div>
                        <div className="orderList">
                            {
                                e.map((e: any, i: any) => {
                                    return (
                                        <div className="eachOrder">
                                            <div className="eachOrderTop">
                                                <div className="topLeftDiv">
                                                    <span className='dishName'><img src={require("../../assets/Group 8 Copy 2.png")} alt="nonVeg" /> Chili Cheese Meal</span>
                                                    <span className='dishPrice'>AED27.00</span>
                                                </div>
                                                <div className="topRightDiv">
                                                    <div className="quantityIncDec">
                                                        <img src={require("../../assets/my_order_minus_inactive.png")} alt="minus" className='minusSign' />
                                                        <span className="quantityValue">2</span>
                                                        <img src={require("../../assets/my_order_plus_active.png")} alt="plus" className='plusSign' />
                                                    </div>
                                                    <span className='totalQuantityPrice'>AED54.00</span>
                                                </div>
                                            </div>
                                            <div className="eachOrderDesc">
                                                <span className="descriptionText">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</span>
                                            </div>
                                            <div className="eachOrderAccordian">
                                                <Accordion sx={{
                                                    boxShadow: "none",
                                                    borderBottom: "none"
                                                }}>
                                                    <AccordionSummary
                                                        expandIcon={<span></span>}
                                                        aria-controls="panel2a-content"
                                                        id="panel2a-header"
                                                    >
                                                        <div className="accordianHeading">
                                                            <span className="leftSideAC">
                                                                customise
                                                            </span>
                                                            <span className='rightSide'>Remove</span>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <TextField id="standard-basic" label="Add Customisation" variant="standard" sx={
                                                            {
                                                                width: 1,
                                                                '& .MuiInput-underline:before': { borderBottomColor: '#f67e03' },
                                                                '& .MuiInput-underline:after': { borderBottomColor: '#f67e03' },
                                                                '& .MuiFormLabel-root.Mui-disabled': {
                                                                    color: 'red',
                                                                },
                                                            }

                                                        }
                                                            InputLabelProps={{
                                                                sx: {
                                                                    // set the color of the label when not shrinked
                                                                    color: "#f67e03",
                                                                    [`&.${inputLabelClasses.shrink}`]: {
                                                                        // set the color of the label when shrinked (usually when the TextField is focused)
                                                                        color: "#f67e03"
                                                                    }
                                                                }
                                                            }} />
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="payMentAccordian">
                            <Accordion sx={{
                                boxShadow: " 0 2px 10px 0 rgba(198,198,198,0.5)",
                                borderBottom: "none",
                            }}>
                                <AccordionSummary
                                    expandIcon={<span></span>}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <div className="paymentaccordianHeading">
                                        <span className="leftSidePAC">
                                            To Pay
                                        </span>
                                        <span className='rightSidePAC'>AED85.76</span>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    bgcolor: "#FCFCFC"
                                }}>
                                    <div className="paymentDescriptionSplit">
                                        <div className="itemsTotalDiv"><span className="leftSide">Items total</span><span className="rightSide">AED118.00</span></div>
                                        <div className="itemsTotalDiv"><span className="leftSide">Fee/ charges</span><span className="rightSide">AED10.00</span></div>
                                        <div className="itemsTotalDiv"><span className="leftSide">Discount</span><span className="rightSide">AED42.24</span></div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="cookingInstructionDiv">
                            <span className="cookinInstructionHead">Cooking instructions?</span>
                            <TextField id="standard-basic" label="Mention it here ..." variant="standard" sx={
                                {
                                    width: 1,
                                    '& .MuiInput-underline:before': { borderBottomColor: '#000000' },
                                    '& .MuiInput-underline:after': { borderBottomColor: '#f67e03' },
                                    '& .MuiFormLabel-root.Mui-disabled': {
                                        color: 'red',
                                    },
                                }

                            }
                                InputLabelProps={{
                                    sx: {
                                        // set the color of the label when not shrinked
                                        color: "#000000",
                                        [`&.${inputLabelClasses.shrink}`]: {
                                            // set the color of the label when shrinked (usually when the TextField is focused)
                                            color: "#f67e03"
                                        }
                                    }
                                }} />
                        </div>
                        <div className='checkOutButton'>PROCEED TO CHECKOUT &#62;</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RestaurantMenu