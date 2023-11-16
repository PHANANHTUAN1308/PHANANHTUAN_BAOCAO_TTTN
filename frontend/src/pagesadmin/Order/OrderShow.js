
import { Link, useParams } from "react-router-dom";
import orderservice from "../../service/OrderSevice";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function OrderShow() {
    const { id } = useParams("id");
    const [order, setOrders] = useState([]);
    useEffect(
        function () {
            (async function () {
                await orderservice.getById(id).then(function (result) {
                    setOrders(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(order);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/order/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Hình</th>
                                    <th>Tên thương hiệu</th>
                                    <th>Slug</th>
                                    <th>Ngày tạo</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                    {order.address}
                                    </td>
                                    <td>{order.name}</td>
                                    <td>
                                        {order.note}
                                    </td>
                                    <td>
                                        {order.created_at}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/order/show/'+order.id}><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/order/update/'+order.id}><FaEdit /></Link>
                                        <Link className="btn btn-sm btn-danger"><FaTrashAlt /></Link>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default OrderShow;
