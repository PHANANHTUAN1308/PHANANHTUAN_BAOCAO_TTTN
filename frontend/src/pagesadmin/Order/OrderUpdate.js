import { Link, useNavigate, useParams } from "react-router-dom";
import orderservice from "../../service/OrderSevice";
import { useEffect, useState } from "react";

function OrderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [address, setAddress] = useState("");
    const [user_id, setUserId] = useState(0);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(1);
    const [orders, setOrders] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getAll().then(function (result) {
                setOrders(result.data.data);
            });
        })();
    }, []);
    const [order, setOrder] = useState([]);
    useEffect(
        function () {
            (async function () {
                await orderservice.getById(id).then(function (result) {
                    setOrder(result.data.data);
                });
            })();
            setName(order.name);
            setNote(order.note);
            setAddress(order.address);
            setPhone(order.phone);
            setEmail(order.email);
            setUserId(order.user_id);
            setStatus(order.status);
        },
        [
            order.address,
            order.note,
            order.name,
            order.phone,
            order.email,
            order.user_id,
            order.status,
            id,
        ]
    );
    async function orderStore(event) {
        event.preventDefault();
        var order = new FormData();
        order.append("name", name);
        order.append("note", note);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("user_id", user_id);
        order.append("status", status);
        await orderservice.update(order, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/order", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={orderStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/order" className="backward">
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
                                    <label htmlFor="name">Tên danh mục</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nhập tên danh mục..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="note">Từ khóa</label>
                                    <input
                                        name="note"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="address">Mô tả</label>
                                    <textarea
                                        name="address"
                                        className="input1textarea"
                                        id="name"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    <label htmlFor="user_id">Danh mục cha</label>
                                    <select
                                        name="user_id"
                                        className="input"
                                        value={user_id}
                                        onChange={(e) => setUserId(e.target.value)}
                                    >
                                        <option disabled>--Chọn danh mục--</option>
                                        <option value="0">Không có cha</option>
                                        {orders.map((order, index) => {
                                            return (
                                                <option key={index} value={order.id}>
                                                    {order.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="sort_order">Vị trí sắp xếp</label>
                                    <select
                                        name="sort_order"
                                        className="input"
                                    >
                                        <option disabled>--Chọn vị trí sắp xếp--</option>
                                        <option value="0">None</option>
                                        <option value="1">Đứng đầu</option>
                                        {orders.map((order, index) => {
                                            return (
                                                <option key={index} value={order.sort_order + 1}>
                                                    Sau {order.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="status">Tình trạng xuất bản</label>
                                    <select
                                        name="status"
                                        className="input"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option disabled>--Chọn tình trạng xuất bản--</option>
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Không xuất bản</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default OrderUpdate;