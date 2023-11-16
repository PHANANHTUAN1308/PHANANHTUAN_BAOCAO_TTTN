import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import urlImage from "../../config";


const BrandList=() =>{


  const [products, setProducts] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchProductsByBrandSlug = async (brandSlug) => {
      try {
          const result = await productservice.getProductByBrandSlug(slug); // Assuming productservice is correctly implemented
          setProducts(result.data); // Set the 'products' array in the state
      } catch (error) {
          console.error('Error fetching products:', error);
      }
    };

    fetchProductsByBrandSlug(slug);
  }, [slug]);
    return(
<>
  
      <div className="container mt-2"><div className="row">
          {products.map(function(product, index) {
            return(
            <article className="card card-product-list">
            <div className="row no-gutters">
              <aside className="col-md-3">
                <Link to={"/product-detail/" + product.slug} className="img-wrap">
                <img src={urlImage + 'product/' + product.image} width={50} />
                </Link>
              </aside>
              <div className="col-md-6">
                <div className="info-main">
                  <Link to="#" className="h5 title">

                    {product.name}
                  </Link>
                  <div className="rating-wrap mb-2">
                    <ul className="rating-stars">
                      <li style={{ width: "80%" }} className="stars-active">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <div className="label-rating">7/10</div>
                  </div>
                  <p className="mb-3">
                    <span className="tag">
                      
                      <i className="fa fa-check" /> Verified
                    </span>
                    
                  </p>
                  <p>
                  {product.metadesc }
                  </p>
                </div>
              </div>
              <aside className="col-sm-3">
                <div className="info-aside">
                  <div className="price-wrap">
                    <span className="h5 price">{product.price}$</span>
                    <small className="text-muted"> /per item</small>
                  </div>
                  <small className="text-success">Free shipping</small>
                  <p className="mt-3">
                    <Link to="#" className="btn btn-outline-primary">
                      <i className="fa fa-shopping-cart" /> Cart
                    </Link>
                    <Link to="#" className="btn btn-light ml-2">
                      <i className="fa fa-heart" /> Save
                    </Link>
                  </p>
                  <label className="custom-control mt-3 custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <div className="custom-control-label">Add to compare</div>
                  </label>
                </div>
              </aside>
            </div>
          </article>
          )})}
          
          <div></div>
          
      </div></div>
      <nav className="mb-4" aria-label="Page navigation sample">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  5
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
</>
);
            }

export default BrandList;