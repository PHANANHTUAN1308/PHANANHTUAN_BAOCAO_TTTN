import {Link} from "react-router-dom";

import productservice from "../../service/ProductSevice";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";


function ProductList(){
    const [status_delete, setStatus_delete] = useState([]);
    const [products, setProduct] = useState([]);
    useEffect(function () {
      (async function () {
        await productservice.getAll().then(function (result) {
          setProduct(result.data.data);
        });
      })();
    }, [status_delete]);
    function productDelete($id) {
        productservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return(
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Product</li>
        </ol>
      </nav></div>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">SẢN PHẨM</strong>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <Link className="btn btn-sm btn-success" to="/admin/productsale/create">
                            Thêm
                        </Link>
                        </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hình ảnh</th>
                            <th>Tên Sản phẩm</th>
                            <th>ID Danh mục</th>
                            <th>ID Thương hiệu</th>
                            <th>Slug</th>
                            <th>Giá gốc</th>
                            <th>Giá giảm</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function(product,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>
                                    <img src={urlImage +'product/'+ product.image} width={50}/>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.category_id}
                                </td>
                                <td>
                                    {product.brand_id}
                                </td>
                                <td>
                                    {product.slug}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    {product.price_sale}
                                </td>
                                <td>
                                    {product.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info  far fa-eye mr-2" to={"/admin/product/show/"+product.id}>
                                        
                                    </Link>
                                    <Link className="btn btn-sm btn-primary  far fa-edit mr-2" to={"/admin/product/update/"+product.id}>
                                    
                                    </Link>
                                    <button className="btn btn-sm btn-danger far fa-trash-alt mr-2" onClick={() => productDelete(product.id)}></button>

                                </td>
                                <td>
                                    {product.id}
                                </td>
                            </tr>
                            );
                        })}
                       
                    </tbody>
                </table>
            </div>
        </div></>
    );
}
export default ProductList;