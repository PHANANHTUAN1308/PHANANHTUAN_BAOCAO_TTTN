import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import urlImage from "../../config";
function Category() {
  const [categorys, setCategorys] = useState([]);
  useEffect(function () {
    
    (async function () { 
      await categoryservice.catebygundam()
        .then(function (result) {
          setCategorys(result.data.data);
        }
        );
    })();
  }, []);
  return(<section className="banner-section">
  <div className="container-fluid">
    <div className="row" >
    {categorys.map(function (category, index) {
                                    return (
      <div className="col" key={index}>

          
          <div className="cat-banner-info tc-animate-me animated zoomIn" data-animation="zoomIn">
            <Link to={"/product/category/"+ category.slug}>
          <img className=" img-thumbnail"src={urlImage+'category/'+category.image}  alt="#" /></Link>
          </div>

      </div> )
        })}
    
    </div>
  </div>
</section>);

}
 

export default Category;
