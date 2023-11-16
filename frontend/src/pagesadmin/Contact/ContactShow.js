
import { Link, useParams } from "react-router-dom";
import contactservice from "../../service/ContactSevice";
import { useEffect, useState } from "react";


function ContactShow() {
    const { id } = useParams("id");
    const [contact, setContact] = useState([]);
    useEffect(
        function () {
            (async function () {
                await contactservice.getById(id).then(function (result) {
                    setContact(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(contact);
    return (
        <div className="container-fluid pb-5">
            <div className="col-lg-7 h-auto mb-30"></div>
            <div className="row px-xl-5">
                <div className="col-lg-7 h-auto mb-30">
                    <div className="h-100 bg-light p-30">
                        <h3>Tên: {contact.name}</h3>
                        <h3>Tên: {contact.user_id}</h3>
                        <h3 className="font-weight-semi-bold mb-4">{contact.status}</h3>
                        <p className="mb-4">{contact.created_at}</p>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Metakey:</strong>
                            <p className="mb-4">{contact.title}</p>
                        </div>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Metakey:</strong>
                            <p className="mb-4">{contact.email}</p>
                        </div>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Metakey:</strong>
                            <p className="mb-4">{contact.phone}</p>
                        </div>
                        <div className="d-flex mb-4">
                            <strong className="text-dark mr-3">Metadesc:</strong>
                            <p className="mb-4">{contact.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactShow;
