import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import contactservice from "../../service/ContactSevice";
function ContantCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [user_id, setUsertId] = useState(0);
    const [replay_id, setReplayId] = useState(0);
    const [status, setStatus] = useState(1);
    async function contactStore(event) {
        event.preventDefault();
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("phone", phone);
        contact.append("user_id", user_id);
        contact.append("replay_id", replay_id);
        contact.append("status", status);
        await contactservice.create(contact).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/contact", { replace: true });
        });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Brand</li>
            </ol>
        </nav></div>

            <form onSubmit={contactStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col ">
                                <strong className="text-danger">
                                    THÊM LIÊN HỆ
                                </strong>

                            </div>
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-sm  btn-success  mr-2" type="submit">
                                    Lưu

                                </button>
                                <Link to="/admin/brand" className="btn btn-sm  btn-primary bg-primary mr-2">
                                    Về danh sách
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="card-body">
                        <div className="row" >
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="name">Tên</label>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metakey">Email</label>
                                    <textarea name="metakey" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metadesc">Tiêu đề</label>
                                    <textarea name="metadesc" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metadesc">Nội dung</label>
                                    <textarea name="metadesc" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>

                                </div>

                            </div>






                            <div className="col-md-3">
                                <div className="card col-md-12 ">
                                    <div className="mb-3">
                                        <label htmlFor="metakey">User</label>
                                        <textarea name="metakey" value={user_id} onChange={(e) => setUsertId(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="metakey">SDT</label>
                                        <textarea name="metakey" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="metakey">Replay_id</label>
                                        <textarea name="metakey" value={replay_id} onChange={(e) => setReplayId(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="md-3">
                                        <label htmlFor="status">Trạng thái</label>
                                        <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ContantCreate;