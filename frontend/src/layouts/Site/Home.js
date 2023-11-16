import Slider from "../../pages/home/Slider";

import React from "react";

import Request from "../../pages/home/Request";

import CategoryHome from "../../pages/home/CategoryHome";
import AllP from "../../pages/home/AllP";




function Home(props) {
  return (
    <div className="container">
      <Slider />
      <CategoryHome/>
      <AllP/>

      

      <Request />

    </div>
  );
}

export default Home;
