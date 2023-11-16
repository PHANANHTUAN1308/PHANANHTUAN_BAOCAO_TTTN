import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";

function UserUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(1);
    const [user, setUser] = useState([]);
    useEffect(
        function () {
            (async function () {
                await userservice.getById(id).then(function (result) {
                    setUser(result.data.data);
                });
            })();
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setUsername(user.username);
            setPassword(user.password);
            setAddress(user.address);
            setRoles(user.roles);
            setStatus(user.status);
        },
        [
            user.phone,
            user.address,
            user.roles,
            user.email,
            user.name,
            user.username,
            user.password,
            user.status,
            id,
        ]
    );
    async function userStore(event) {
        event.preventDefault();
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        await userservice.update(user, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/user", { replace: true });
        });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/user">User</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{id}</li>
            </ol>
        </nav></div>
            <form onSubmit={userStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col ">
                                <strong className="text-danger">
                                    CHỈNH SỬA NGƯỜI DÙNG
                                </strong>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-sm  btn-success  mr-2" type="submit">
                                    Lưu
                                </button>
                                <Link to="/admin/user" className="btn btn-sm  btn-primary bg-primary mr-2">
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
                                    <input name="metakey" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metadesc">SDT</label>
                                    <input name="metadesc" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metadesc">Địa chỉ</label>
                                    <textarea name="metadesc" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="card col-md-12 ">
                                <div className="mb-3">
                                    <label htmlFor="metadesc">Username</label>
                                    <input name="metadesc" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="metadesc">Password</label>
                                    <input name="metadesc" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
                                </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="roles">Roles</label>
                                        <select name="roles" className="form-control" value={roles} onChange={(e) => setRoles(e.target.value)}>

                                            <option value="1">Người dùng</option>
                                            <option value="2">Admin</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="status">Trạng thái</label>
                                        <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                            <option value="1">Xuất bản </option>
                                            <option value="2">Không xuất bản </option>
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

export default UserUpdate;