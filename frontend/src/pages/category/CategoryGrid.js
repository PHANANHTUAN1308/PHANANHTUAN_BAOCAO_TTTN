import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import { urlImage } from "../../config";
const CategoryGrid=()=> {
  const [product, setProduct] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetchProductsByCategorySlug = async (categorySlug) => {
      try {
          const result = await productservice.getProductByCateSlug(slug); // Assuming productservice is correctly implemented
          setProduct(result.data); // Set the 'products' array in the state
      } catch (error) {
          console.error('Error fetching products:', error);
      }
    };

    fetchProductsByCategorySlug(slug);
  }, [slug]);

  return (
    <>
          <header className="mb-3">
            <div className="form-inline">
              <strong className="mr-md-auto">32 Items found </strong>

            </div>
          </header>
          
          <div className="row">

            {product.map(function (product, index) {
              return (<div className="col-md-3" key={index}>
                <figure className="card card-product-grid">
                  <div className="img-wrap mt-2">
                    <span className="badge badge-danger"></span>
                    <img src={urlImage + 'product/' + product.image} />
                  </div>
                  <figcaption className="info-wrap">
                    <Link to={"/product-detail/" + product.slug} className="title mb-2 text-primary font-weight-bold">
                      {product.name.length <30 ? (
                        <>
                          {product.name}
                          <br/>
                          <br/>
                        </>
                      ) : (
                        product.name
                      )}
                    </Link>
                    <div className="price-wrap">
                      <span className="price">{product.price} $</span>
                      <small className="text-muted"> /per item</small>
                    </div>
                    <p className="mb-2">

                      2 Pieces <small className="text-muted">(Min Order)</small>
                    </p>
                    <p className="text-muted ">{product.metakey}</p>
                    <hr />
                    <p className="mb-3">
                      <span className="tag">

                        <i className="fa fa-check" /> Verified
                      </span>

                    </p>

                    <Link to="#" className=" col-md-5 btn btn-outline-primary mr-2 mb-2">

                      <i className="" /> Buy Now
                    </Link>

                    <Link to="#" className="col-md-7 btn btn-outline-success mr-1 mb-2">

                      <i className="fa fa-shopping-cart" /> Add To Cart
                    </Link>
                  </figcaption>
                </figure>
              </div>);
            })}
          </div>
          
          <div className="">
            
          </div>
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

export default CategoryGrid;
