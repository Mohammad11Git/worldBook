import Banner from "./Banner";
import React from "react";
import BestSellerBook from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
    return (   
       <>   
          <Banner/>
          <BestSellerBook/>
          <FavBook/>
          <PromoBanner/>

      </>
     );
}
 
export default Home;