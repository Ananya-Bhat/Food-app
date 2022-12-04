import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restaurantListAsyncThunk } from '../../redux/reducers/restaurantListSlice';

const RestaurantDetails = () => {
    const dispatch = useDispatch();
    let data = useSelector((state: any) => state.restaurantList)
    let restDetails = data?.data?.pageResults;
    let e = restDetails;

    useEffect(() => {
        dispatch(restaurantListAsyncThunk())
        console.log(restDetails)
    }, [])
    let i = localStorage.getItem("id");
    return (
        <div>RestaurantDetails{i} </div>
    )
}

export default RestaurantDetails