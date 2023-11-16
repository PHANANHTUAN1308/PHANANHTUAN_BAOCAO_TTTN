
import { Link, useParams } from "react-router-dom";
import topicservice from "../../service/TopicSevice";

import {FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";



function TopicShow() {
    const { id } = useParams("id");
    const [topic, setTopics] = useState([]);
    useEffect(
        function () {
            (async function () {
                await topicservice.getById(id).then(function (result) {
                    setTopics(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(topic);
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/topic">Topic</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="">{id}</Link></li>
        </ol>
      </nav></div>
        <section className="card">
            <form onSubmit={TopicShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT CHỦ ĐỀ</strong>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/admin/topic" className="btn btn-sm btn-success mr-2">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/topic/update/" + topic.id} className="btn btn-sm btn-primary mr-2">
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
                            <td className="text-danger"style={{width:300}}><strong>Tên Trường</strong></td>
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
                            <td>{topic.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{topic.slug}  </td>
                        </tr>
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{topic.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{topic.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{topic.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{topic.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section></>
    );
}

export default TopicShow;
