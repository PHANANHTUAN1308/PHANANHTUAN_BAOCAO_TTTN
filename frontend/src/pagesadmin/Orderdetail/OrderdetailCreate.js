import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import orderdetailservice from "../../service/OrderdetailSevice"
function OrderdetailCreate() {
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [qty, setQty] = useState("");
    const [order_id, setOrder_id] = useState(0);
    const [product_id, setProduct_id] = useState(0);
    const [price, setPrice] = useState(0); 
    async function orderdetailStore(event) {
        event.preventDefault();
        var orderdetail = new FormData();
        orderdetail.append("product_id", product_id);
        orderdetail.append("amount", amount);
        orderdetail.append("qty", qty);
        orderdetail.append("order_id", order_id);
        orderdetail.append("price", price);;
        await orderdetailservice.create(orderdetail).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/orderdetail", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-12 col-md-4 ">
                    <form onSubmit={orderdetailStore} method="post">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-sm  btn-succress me-2 bg-info" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/orderdetail" className="btn-btn-sm btn-info">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="product_id">Tên danh mục</label>
                                            <input type="text" name="order_id" value={order_id} onChange={(e) => setOrder_id(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="product_id">Từ khoá</label>
                                            <textarea name="product_id" value={product_id} onChange={(e) => setProduct_id(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price">Mô tả</label>
                                            <textarea name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="qty">qty</label>
                                            <textarea name="qty" value={qty} onChange={(e) => setQty(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="amount">amount</label>
                                            <textarea name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control"></textarea>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderdetailCreate;