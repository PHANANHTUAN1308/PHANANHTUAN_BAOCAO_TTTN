
import { Link, useParams } from "react-router-dom";
import postservice from "../../service/PostService";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function PostShow() {
    const { id } = useParams("id");
    const [post, setPosts] = useState([]);
    useEffect(
        function () {
            (async function () {
                await postservice.getById(id).then(function (result) {
                    setPosts(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(post);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/post/create"><MdAdd />Thêm</Link>

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
                                        <img src={urlImage + 'post/' + post.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                    </td>
                                    <td>{post.name}</td>
                                    <td>
                                        {post.slug}
                                    </td>
                                    <td>
                                        {post.created_at}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/post/show/1"><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to="/admin/post/update/1"><FaEdit /></Link>
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

export default PostShow;
