import { Link } from "react-router-dom";
import urlImage from "../config";
function Productitem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="card card-sm card-product-grid">
                <div className="col">
                    <div className="product-grid">
                        <div className="product-image">
                            <Link to={"/product-detail/" + props.product.slug} className="image">
                                <img className="pic-1" src={urlImage + "/product/" + props.product.image} />
                                <img className="pic-2" src={urlImage + "/product/" + props.product.image} />
                            </Link>
                            <Link to="" className="product-like-icon" data-tip="Add to Wishlist">
                                <i className="far fa-heart" />
                            </Link>
                            <ul className="product-links">
                                <li>
                                    <Link to="">
                                        <i className="fa fa-search" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <i className="fas fa-shopping-cart" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <i className="fa fa-random" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="product-content d-block">
                            <h3 className="title">
                                <Link to="">
                                     {props.product.name}
                                </Link>
                            </h3>
                            {props.product.name.length > 40
                                        ? <><div className="price mb-auto">$ {props.product.price}</div></>
                                        : props.product.name.length > 25 && props.product.name.length < 30
                                            ? <>
                                                <br />
                                                <div className="price mb-auto">
                                                $ {props.product.price}</div>
                                                
                                            </>
                                            : <>
                                                <div className="price mb-auto">
                                                $ {props.product.price}</div>
                                                
                                            </>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Productitem;