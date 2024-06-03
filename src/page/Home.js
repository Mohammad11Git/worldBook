import Banner from "./Banner";
import React from "react";
import BestSellerBook from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBook from "./OtherBooks";
import Review from "./Review";

const Home = () => {
    return (   
       <>   
          <Banner/>
          <BestSellerBook/>
          <FavBook/>
          <PromoBanner/>
          <OtherBook/>
          <Review/>
      </>
     );
}
 
export default Home;