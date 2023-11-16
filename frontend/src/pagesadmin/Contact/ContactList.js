import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import contactservice from "../../service/ContactSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll()
                .then(function (result) {
                    setContacts(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function contactDelete($id) {
        contactservice.remove($id)
            .then(function (res) {
                console.log(res.data.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/contact/create"><MdAdd />Thêm</Link>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên Contact</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Ngày tạo</th>
                                    <th>Chức năng</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(function (contact, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>{contact.name}</td>
                                            <td>
                                            {contact.phone}
                                            </td>
                                            <td>
                                            {contact.email}
                                            </td>
                                            <td>
                                            {contact.title}
                                            </td>
                                            <td>
                                            {contact.content}
                                            </td>
                                            <td>
                                            {Moment(contact.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
                                            <td>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/contact/show/'+contact.id}><FaRegEye /></Link>
                                                <Link className="btn btn-sm btn-info me-2" to={'/admin/contact/update/'+contact.id}><FaEdit /></Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => contactDelete(contact.id)}><FaTrashAlt /></button>
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

export default ContactList;