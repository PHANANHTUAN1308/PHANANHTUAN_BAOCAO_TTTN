import { Link } from "react-router-dom";
import urlImage from "../config";
function Categoryitem(props) {
    return (<div className={`carousel-item ${props.location === 0 ? "active" : ""}`}>
        <div className="col">

            <div className="tint text-center" ></div>

            <div className="cat-banner-info tc-animate-me animated zoomIn" data-animation="zoomIn">
                <img className="img-thumbnail" src={urlImage + 'category/' + props.item.image} alt="#" />
            </div>

        </div>

    </div>);
}
export default Categoryitem;