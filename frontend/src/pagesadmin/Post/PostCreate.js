import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import postservice from "../../service/PostService";
function PostCreate() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [topic_id, setTopicId] = useState(0);
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(1);
    async function postStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("title", title);
        post.append("detail", detail);
        post.append("metakey", metakey);
        post.append("metadesc", metadesc);
        post.append("topic_id", topic_id);
        post.append("type", type);
        post.append("status", status);
        post.append("image", image.files[0]);
        await postservice.create(post).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/post", { replace: true });
        });
    }
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-9 col-md-4 ">
                    <form onSubmit={postStore} method="post">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>
                                            Thêm danh mục
                                        </strong>

                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-sm  btn-succress me-2 bg-info" type="submit">
                                            Lưu

                                        </button>
                                        <Link to="/admin/post" className="btn-btn-sm btn-info">
                                            Về danh sách
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            <div className="card-body">
                                <div className="row" >
                                    <div className="col-md-9">
                                        <div className="mb-3">
                                            <label htmlFor="name">Tên danh mục</label>
                                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name">Chi tiet</label>
                                            <input type="text" name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metakey">Từ khoá</label>
                                            <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="metadesc">Mô tả</label>
                                            <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="col-md-12 bg-dark">
                        <div className="mb-3 ">
                            <label htmlFor="topic_id">Danh mục cha</label>
                            <select name="topic_id" className="form-control" value={topic_id} onChange={(e) => setTopicId(e.target.value)}>
                                <option value="0">Danh mục cha</option>

                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="type">Sắp xếp</label>
                            <select name="ort_order" className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="0">None</option>

                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Hình đại diện</label>
                            <input type="file" id="image" name="image" className="form-control" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status">Trạng thái</label>
                            <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCreate;