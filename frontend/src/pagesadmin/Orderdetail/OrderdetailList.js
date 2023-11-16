import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import orderdetailservice from "../../service/OrderdetailSevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function OrderdetailList() {
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(function () {
        (async function () {
            await orderdetailservice.getAll()
                .then(function (result) {
                    setOrderdetails(result.data.data);
                }
                );
        })();
    }, []);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/orderdetail/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>order_id</th>
                                    <th>product_id</th>
                                    <th>price</th>
                                    <th>qty</th>
                                    <th>amount</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderdetails.map(function (orderdetail, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                {orderdetail.order_id}
                                            </td>
                                            <td>{orderdetail.product_id}</td>
                                            <td>
                                                {orderdetail.price}
                                            </td>
                                            <td>
                                                {orderdetail.qty}
                                            </td>
                                            <td>
                                                {orderdetail.amount}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/orderdetail/show/' + orderdetail.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/orderdetail/update/' + orderdetail.id}><FaEdit /></Link>
                                                <Link className="btn btn-sm btn-danger"><FaTrashAlt /></Link>
                                            </td>
                                            <td>
                                                {orderdetail.id}
                                            </td>
                                        </tr>

                                    )
                                })};
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default OrderdetailList;