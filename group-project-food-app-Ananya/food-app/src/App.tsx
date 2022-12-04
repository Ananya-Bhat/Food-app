import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React from "react";
import "./App.css";
import Home from "./views/home/home";
import { Routes, Route } from "react-router-dom";
import EmailBox from "./components/emailBoxForForgotPassword/emailBox";
import MobileBox from "./components/mobileNumberBoxFor/mobileBox";
import RestaurantList from "./views/restaurantList/restaurantList";
import RestaurantDetails from "./views/restaurantDetails/restaurantDetails";

import OverviewBody from "./components/overviewBody/overviewBody";
import RestaurantsDetailsHeader from "./components/restaurantDetailsHeader/restaurantsDetailsHeader";
import RestaurantSubHeader from "./components/restaurantSubHeader/restaurantSubHeader";
import RestaurantGallery from "./components/restaurantGallery/restaurantGallery";
import ReviewsAndRatings from "./components/reviewsAndRatings/reviewsAndRatings";
function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantSubHeader/>
      <RestaurantsDetailsHeader/>
      {/* <Home /> */}
      {/* <OverviewBody/> */}
      {/* <RestaurantGallery/> */}
      <ReviewsAndRatings/>
      <Footer />

    </div>
  );
}

export default App;
