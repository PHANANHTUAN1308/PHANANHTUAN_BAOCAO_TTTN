import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import orderservice from "../../service/OrderSevice"
function OrderCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [user_id, setUserId] = useState(0);
    const [phone, setPhone] = useState('');
    const [email, setEmaill] = useState('');
    const [status, setStatus] = useState(1);
    async function orderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var order = new FormData();
        order.append("name", name);
        order.append("address", address);
        order.append("note", note);
        order.append("user_id", user_id);
        order.append("phone", phone);
        order.append("email", email);
        order.append("status", status);
        order.append("image", image.files[0]);
        await orderservice.create(order).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/order", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={orderStore} method="post">
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
                                        <Link to="/admin/order" className="btn-btn-sm btn-info">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="name">Tên danh mục</label>
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address">Từ khoá</label>
                                            <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="note">Mô tả</label>
                                            <textarea name="note" value={note} onChange={(e) => setNote(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">EMAIL</label>
                                            <input type="text" name="email" value={email} onChange={(e) => setEmaill(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">phone</label>
                                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">user_id</label>
                                            <input type="text" name="user_id" value={user_id} onChange={(e) => setUserId(e.target.value)} className="form-control" />

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="col-md-12 bg-dark">
                        <div className="mb-3">
                            <label htmlFor="image">Hình đại diện</label>
                            <input type="file" id="image" name="image" className="form-control" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Trạng thái</label>
                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCreate;