import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/detail.css";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";
import productservice from "../../service/ProductSevice";
import brandservices from "../../service/BrandSevice";
import Productitem from "../../component/Productitem";
function ProductDetail() {
  const { slug } = useParams("slug");
  const [product, setProducts] = useState([]);
  const [brand, setBrands] = useState([]);
  const [product_orther, setProductOrther] = useState([]);
  useEffect(
    function () {
      (async function () {
        await productservice.getProductBySlug(slug).then(function (result) {
          setProducts(result.data.product);
          setProductOrther(result.data.product_other);
        });
      })();
    },
    [slug]
  );
  useEffect(
    function () {
      (async function () {
        await brandservices.getAll().then(function (result) {
          setBrands(result.data.data);
        });
      })();
    },
    []
  );
  return (
    <div>
      <div className="row hedding m-0 pl-3 pt-0 pb-3"></div>

      <div className="row m-0">
        <div className="col-lg-4 left-side-product-box pb-3">
          <img
            src={urlImage + "/product/" + product.image}
            className="border p-3"
          />
        </div>
        <div className="col-lg-8">
          <div className="right-side-pro-detail border p-3 m-0">
            <div className="row">
              <div className="col-lg-12">
                <span>{ }</span>
                <p className="m-0 p-0">{product.name}</p>
              </div>
              <div className="col-lg-12">
                <p className="m-0 p-0 price-pro">{product.price} $</p>
                <hr className="p-0 m-0" />
              </div>
              <div className="col-lg-12 pt-2">
                <h5>Chi tiết sản phẩm</h5>
                <span>{product.detail}</span>
                <hr className="m-0 pt-2 mt-2" />
              </div>
              <div className="col-lg-12 pt-2">
                <h5>Mô tả</h5>
                <span>{product.metadesc}</span>
                <hr className="m-0 pt-2 mt-2" />
              </div>
              <div className="col-lg-12">
                <p className="tag-section">
                  <strong>Tag: {
                    brand.map(function (bran, index) {
                      return (bran.id === product.brand_id ? bran.name : null);
                    })
                  }</strong>
                </p>
              </div>
              <div className="col-lg-12">
                <h6>Quantity :</h6>
                <input
                  type="number"
                  className="form-control text-center w-100"
                  defaultValue={1}
                />
              </div>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6 pb-2">
                    <a href="#" className="btn btn-danger w-100">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#" className="btn btn-success w-100">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center pt-3">
          <h4>Sản phẩm cùng loại</h4>
        </div>
      </div>

      <div className="row">
        {product_orther.map(function (product, index) {
          return <Productitem key={index} product={product} />
        })}


      </div>


    </div>
  );
}
export default ProductDetail;
