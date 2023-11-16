import { Link, useNavigate, useParams } from "react-router-dom";
import contactservice from "../../service/ContactSevice";
import { useEffect, useState } from "react";

function ContactUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user_id, setUsertId] = useState(0);
    const [replay_id, setReplayId] = useState(0);
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [contact, setContact] = useState([]);
    useEffect(
        function () {
            (async function () {
                await contactservice.getById(id).then(function (result) {
                    setContact(result.data.data);
                });
            })();
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setTitle(contact.title);
            setContent(contact.content);
            setStatus(contact.status);
            setUsertId(contact.user_id);
            setReplayId(contact.replay_id);
            setStatus(contact.status);
        },
        [
            contact.email,
            contact.phone,
            contact.name,
            contact.title,
            contact.content,
            contact.replay_id,
            contact.user_id ,
            contact.status,
            id,
        ]
    );
    async function contactStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("user_id", user_id);
        contact.append("replay_id", replay_id);
        contact.append("title", title);
        contact.append("content", content);
        
        contact.append("status", status);
        await contactservice.update(contact, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/contact", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={contactStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/contact" className="backward">
                                    Go back
                                </Link>
                                <button type="submit" className="save">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="form-container grid -bottom-3  ">
                            <div className="grid__item large--three-quarters">
                                <fieldset className="input-container">
                                    <label htmlFor="name">Tên danh mục</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nhập tên danh mục..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="metakey">Email</label>
                                    <input
                                        name="metakey"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="metadesc">Phone</label>
                                    <textarea
                                        name="metadesc"
                                        className="input1textarea"
                                        id="name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="metadesc">user_id</label>
                                    <textarea
                                        name="metadesc"
                                        className="input1textarea"
                                        id="name"
                                        value={user_id}
                                        onChange={(e) => setUsertId(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="metadesc">replay_id</label>
                                    <textarea
                                        name="metadesc"
                                        className="input1textarea"
                                        id="name"
                                        value={replay_id}
                                        onChange={(e) => setReplayId(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                                <fieldset className="input-container">
                                    <label htmlFor="parent_id">Title</label>
                                    <select
                                        name="parent_id"
                                        className="input"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    >
                                        <option disabled>--Chọn danh mục--</option>
                                        <option value="0">Không có cha</option>
                                    
                                        
                                    
                                    </select>
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="sort_order">Content</label>
                                    <textarea
                                        name="metadesc"
                                        className="input1textarea"
                                        id="name"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="status">Tình trạng xuất bản</label>
                                    <select
                                        name="status"
                                        className="input"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option disabled>--Chọn tình trạng xuất bản--</option>
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Không xuất bản</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUpdate;