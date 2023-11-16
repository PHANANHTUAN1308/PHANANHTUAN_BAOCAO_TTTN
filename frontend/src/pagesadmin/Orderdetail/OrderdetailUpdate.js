import { Link, useNavigate, useParams } from "react-router-dom";
import orderdetailservice from "../../service/OrderdetailSevice";
import { useEffect, useState } from "react";

function OrderdetailUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [amount, setAmount] = useState("");
    const [qty, setQty] = useState("");
    const [order_id, setOrder_id] = useState(0);
    const [product_id, setProduct_id] = useState(0);
    const [price, setPrice] = useState(0);
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(function () {
        (async function () {
            await orderdetailservice.getAll().then(function (result) {
                setOrderdetails(result.data.data);
            });
        })();
    }, []);
    const [orderdetail, setOrderdetail] = useState([]);
    useEffect(
        function () {
            (async function () {
                await orderdetailservice.getById(id).then(function (result) {
                    setOrderdetail(result.data.data);
                });
            })();
            setAmount(orderdetail.amount);
            setQty(orderdetail.qty);
            setOrder_id(orderdetail.order_id);
            setProduct_id(orderdetail.product_id);
            setPrice(orderdetail.price);
        },
        [
            orderdetail.qty,
            orderdetail.amount,
            orderdetail.order_id,
            orderdetail.product_id,
            orderdetail.price,
            id,
        ]
    );
    async function orderdetailStore(event) {
        event.preventDefault();
        var orderdetail = new FormData();
        orderdetail.append("product_id", product_id);
        orderdetail.append("amonut", amount);
        orderdetail.append("qty", qty);
        orderdetail.append("order_id", order_id);
        orderdetail.append("price", price);
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={orderdetailStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/orderdetail" className="backward">
                                    Go back
                                </Link>
                                <button type="submit" className="save">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="form-container grid -bottom-3  ">
                            <div className="grid__item large--three-quarters">
                                <fieldset className="input-container">
                                    <label htmlFor="amount">amonut</label>
                                    <input
                                        name="amount"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="Qty">Mô tả</label>
                                    <textarea
                                        name="qty"
                                        className="input1textarea"
                                        id="name"
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    <label htmlFor="order_id">Danh mục cha</label>
                                    <select
                                        name="order_id"
                                        className="input"
                                        value={order_id}
                                        onChange={(e) => setOrder_id(e.target.value)}
                                    >
                                        <option disabled>--Chọn danh mục--</option>
                                        <option value="0">Không có cha</option>
                                        {orderdetails.map((orderdetail, index) => {
                                            return (
                                                <option key={index} value={orderdetail.id}>
                                                    {orderdetail.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="product_id">Product_id</label>
                                    <textarea
                                        name="product_id"
                                        className="input1textarea"
                                        id="name"
                                        value={product_id}
                                        onChange={(e) => setProduct_id(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="product_id">Giá</label>
                                    <textarea
                                        name="price"
                                        className="input1textarea"
                                        id="name"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default OrderdetailUpdate;