import { Link } from "react-router-dom";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';

function UserList() {
    const [users, setUsers] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll()
                .then(function (result) {
                    setUsers(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function userDelete($id) {
        userservice.remove($id)
            .then(function (res) {
                console.log(res.data.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">User</li>
            </ol>
        </nav></div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <strong className="text-primary">NGƯỜI DÙNG</strong>
                    </div>
                    <div className=" d-flex justify-content-end"><Link className="btn btn-sm btn-success mb-2" to="/admin/user/create">Add</Link></div>
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col ">#</th>
                                        <th scope="col ">Tên người dùng</th>
                                        <th scope="col ">Tài khoản</th>
                                        <th scope="col ">Mật khẩu</th>
                                        <th scope="col ">Vai trò</th>
                                        <th scope="col ">Ngày tạo</th>
                                        <th scope="col ">Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(function (user, index) {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>{user.name}</td>
                                                <td>
                                                    {user.username}
                                                </td>
                                                <td>
                                                    {user.password}
                                                </td>
                                                <td>
                                                    {user.roles}
                                                </td>
                                                <td>
                                                    {Moment(user.created_at).format('DD-MM-yyyy hh:mm')}
                                                </td>
                                                <td >
                                                    <Link type="button" className="btn  btn-primary mr-2" to={'/admin/user/show/' + user.id}><i className="far fa-eye"></i></Link>
                                                    <Link type="button" className="btn  btn-success mr-2" to={'/admin/user/update/' + user.id}><i className="fas fa-edit"></i></Link>
                                                    <Link type="button" className="btn  btn-danger mr-2" onClick={() => userDelete(user.id)}><i className="far fa-trash-alt"></i></Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default UserList;