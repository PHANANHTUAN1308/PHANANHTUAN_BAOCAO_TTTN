import { Link, useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";
import menuservice from "../../service/MenuSevice"
function MenuCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [table_id, setTableId] = useState(0);
    const [status, setStatus] = useState(1);
    const [menus, SetMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll()
                .then(function (result) {
                    SetMenu(result.data.data);
                }
                );
        })();
    }, []);
    async function menuStore(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("type", type);
        menu.append("table_id", table_id);
        menu.append("status", status);
        await menuservice.create(menu).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/menu", { replace: true });
        });
    }
    return (

        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Menu</li>
            </ol>
        </nav></div>

            <form onSubmit={menuStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col ">
                                <strong className="text-danger">
                                    THÊM ĐIỀU HƯỚNG
                                </strong>

                            </div>
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-sm  btn-success  mr-2" type="submit">
                                    Lưu

                                </button>
                                <Link to="/admin/menu" className="btn btn-sm  btn-primary bg-primary mr-2">
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
                                    <label htmlFor="link">Link</label>
                                    <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="type">Kiểu</label>
                                    <textarea name="type" value={type} onChange={(e) => setType(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">

                                <div className="mb-3">
                                    <label htmlFor="table_id">Danh mục cha</label>
                                    <select
                                        type="text"
                                        name="table_id"
                                        value={table_id}
                                        onChange={(e) => setTableId(e.target.value)}
                                        className="form-control"
                                    >
                                        <option value="0">Danh mục cha</option>
                                        {menus.map(function (menu, index) {
                                            return (
                                                <option key={index} value={menu.id}>
                                                    {menu.name}
                                                </option>
                                            );
                                        })}
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

            </form>

        </>
    );
}

export default MenuCreate;