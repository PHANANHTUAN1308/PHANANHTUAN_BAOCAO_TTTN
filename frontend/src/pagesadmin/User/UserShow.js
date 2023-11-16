
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa';
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";



function UserShow() {
    const { id } = useParams("id");
    const [user, setUsers] = useState([]);
    useEffect(
        function () {
            (async function () {
                await userservice.getById(id).then(function (result) {
                    setUsers(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(user);
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/user">User</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{id}</li>
            </ol>
        </nav></div>

                    
                    <section className="card">
                        <form onSubmit={UserShow} method="post"></form>
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6">
                                    <strong className="text-danger  ">CHI TIẾT NGƯỜI DÙNG</strong>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <Link to="/admin/user" className="btn btn-sm btn-success mr-2">
                                        Về Danh Sách
                                    </Link>
                                    <Link to={"/admin/user/update/" + id} className="btn btn-sm btn-primary mr-2">
                                        <FaEdit /> Sửa
                                    </Link>
                                    <button className="btn btn-sm btn-danger bg-danger mr-2">
                                        <FaTrash /> Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <td className="text-danger" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                                        <td className="text-danger"><strong>Giá Trị</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ID</td>
                                        <td>{id}  </td>
                                    </tr>
                                    <tr>
                                        <td>Tên Thương Hiệu</td>
                                        <td>{user.name}  </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{user.email}  </td>
                                    </tr>
                                    <tr>
                                        <td>Tài khoản</td>
                                        <td>{user.username}  </td>
                                    </tr>
                                    <tr><td>Mật khẩu</td>
                                        <td>{user.password}  </td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td>{user.address}  </td>
                                    </tr>
                                    <tr>
                                        <td>Vai trò </td>
                                        <td>{user.roles}  </td>
                                    </tr>
                                    <tr>
                                        <td>Trạng Thái</td>
                                        <td>{user.status}  </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </section>
        </>
    );
}

export default UserShow;
