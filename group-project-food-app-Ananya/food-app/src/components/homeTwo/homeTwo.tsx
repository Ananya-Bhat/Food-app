import "./homeTwo.css";

const HomeTwo = () => {
  return (
    <>
      <div className="homeTwoContainer">
        <div className="homeTwoContents">
          <div className="popularBrands">
            <div className="popularHead">Popular Brands</div>
            <div className="popularContent">
              Find out more about the world's top food brands are available all
              over the world today.
            </div>
          </div>
          <div className="popularHotel">
            {false ? (
              <div className="noPopularBrands">
                <div className="noPopularBrandsImg">
                  <img
                    src={require("../../assets/icn_no_restaurants.jpg")}
                    alt=""
                  />
                </div>
                <div className="oops">OOPS!</div>
                <div className="noPopularBrandsText">
                  No brands nearby change to other locations and try.
                </div>
              </div>
            ) : (
              <div className="popularHotelDetails">
                <div className="popularPresent">
                  <div className="popularHotelImg">
                    <img
                      src={require("../../assests/Bitmap.png")}
                      alt="img"
                      className="popularHeartPhoto"
                    />
                  </div>
                  <div className="popularDetails">
                    <div className="popularNames">
                      <div className="popularNameImg">
                        <img
                          src={require("../../assests/Oval 6.png")}
                          alt="img"
                        />
                      </div>{" "}
                      <div className="popularBrandsLoc">
                        {" "}
                        <div className="popularBrand">KFC</div>
                        <div className="popularNameLocation">
                          Latin American, Bakery
                        </div>
                      </div>
                    </div>
                    <div className="popularNameDetails">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus
                      <br /> consequat purus sit amet lectus bibendum finbus
                      vel.{" "}
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="allBrands">
                    <div className="allBrandsText">All Brands</div>
                    <div className="nextBtn">
                      <i className="fa-solid fa-angle-right angleRight"></i>
                    </div>
                  </div>
                  <div className="nextBrands">
                    {" "}
                    <div className="previousBtn">
                      <img
                        src={require("../../assests/previous button.png")}
                        alt=""
                        className="previousRight"
                      />
                    </div>{" "}
                    <div className="nextBtn">
                      <img
                        src={require("../../assests/next button.png")}
                        alt=""
                        className="previousRight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwo;
