import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import productsaleservice from "../../service/ProductsaleSevice";

function ProductsaleCreate() {

    const [product_id, setProductId] = useState('');
    const [qty,setQty] = useState('');
    const [price_sale,setPriceSale] = useState('');
    const [date_begin,setDatebegin] = useState('');
    const [date_end,setDateend] = useState('');
    async function productsaleStore(event){
        event.preventDefault();

        var productsale = new FormData();
        productsale.append ("product_id",product_id);
        productsale.append ("qty",qty);
        productsale.append ("price_sale",price_sale);
        productsale.append ("date_begin",date_begin);
        productsale.append ("date_end",date_end);
        
        try {
            await productsaleservice.create(productsale).then(function (res) {
              alert(res.data.message);
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }

    

    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">ProductSale</li>
        </ol>
      </nav></div>
        <form onSubmit={productsaleStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/productsale" className="btn btn-sm btn-primary mr-2">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Sản phẩm</label>
                                <input onChange={(e) => setProductId(e.target.value)} type="text" name="name" value={product_id} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="qty">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="text" name="qty" value={qty} className="form-control" />
                            </div>
                            
                            

                            <div className="md-3">
                                <label htmlFor="price_sale">Giá Đã Giảm</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="text" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            

                        </div>
                        <div className="col-md-3">
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </form>
        </>
    );
}

export default ProductsaleCreate;