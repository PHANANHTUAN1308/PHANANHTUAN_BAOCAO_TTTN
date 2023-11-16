import { Link } from "react-router-dom";
import urlImage from "../config";

function SliderItem(props) {
    return ( <div className={`carousel-item ${props.location === 0 ? "active" : ""}`}>
    <Link to="product/"><img
      src={`${urlImage}slider/${props.item.image}`}
      alt={props.item.name}
      className="slider-image"
    /></Link>

  </div> );
}

export default SliderItem;