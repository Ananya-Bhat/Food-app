import "./restaurantDetailsHeader.css";

const RestaurantsDetailsHeader = () => {
  let ratingsCases = [4, 4, 3, 4, 2];
  let ratingImg: any;
  return (
    <>
      <div className="HotelDetailsHead">
        <div className="hotelDetailContainer">
          <div className="hotelDetailHeadImg">
            <img
              src={require("../../assets/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png")}
              alt="img"
              className="restaurantLogoIcn"
            />
          </div>
          <div className="hotelNameLocation">
            <div className="hotleName">The Boutique Kitchen</div>
            <div className="hotelLocation">Indian, Pakistani, Kebab</div>
          </div>
          <div className="hotelRatingsTime">
            <div className="hotelRatingContinaer">
              <div className="hotelRating">4.3</div>{" "}
              <span className="dots"></span>
              <div className="hotelMins">63 mins</div>
              <span className="dots"></span>
              <div className="hotelMinOrder">AED30 min order</div>
            </div>
            <div className="hotelTimingsConatiner">
              <div className="timeImg">
                <img
                  src={require("../../assets/time_icon.png")}
                  alt=""
                  className="timeIcon"
                />
              </div>
              <div className="HotelWorkingtimings">11:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="hotelLastRatings">
            <div className="hotelLastRatingText">
              Delivery rating for last 5 orders
            </div>
            <div className="hotelRatingsDiv">
              {ratingsCases.map((ele: any, i: any) => {
                console.log();

                switch (ele) {
                  case 1:
                    ratingImg = "Rating 1.png";
                    break;
                  case 2:
                    ratingImg = "Rating 1.png";
                    break;
                  case 3:
                    ratingImg = "Rating 3.png";
                    break;
                  case 4:
                    ratingImg = "Rating 5.png";
                    break;
                  case 5:
                    ratingImg = "Rating 1.png";
                    break;
                  default:
                    ratingImg = "Rating 1.png";
                    break;
                }
                return (
                  <div className="lastRating">
                    <img src={require(`../../assets/${ratingImg}`)} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hotelsDetailsHeader">
          <div className="hotelDetailMenu">Menu</div>
          <div className="hotelDetailMenu">OverViews</div>
          <div className="hotelDetailMenu">Reviews & Ratings</div>
          <div className="hotelDetailMenu">Gallery</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsDetailsHeader;
