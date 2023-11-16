import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import topicservice from "../../service/TopicSevice"
function TopicCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);
    const [topics, setTopic] = useState([]);
    useEffect(function () {
        (async function () {
          await topicservice.getAll()
            .then(function (result) {
                setTopic(result.data.data);
            }
            );
        })();
      }, []);
    async function topicStore(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("parent_id", parent_id);
        topic.append("status", status);
        await topicservice.create(topic).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/topic", { replace: true });
        });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Topic</li>
            </ol>
        </nav></div>

            <form onSubmit={topicStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col ">
                                <strong className="text-danger">
                                    THÊM CHỦ ĐỀ
                                </strong>

                            </div>
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-sm  btn-success  mr-2" type="submit">
                                    Lưu

                                </button>
                                <Link to="/admin/brand" className="btn btn-sm  btn-primary bg-primary mr-2">
                                    Về danh sách
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="card-body">
                        <div className="row" >
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <label htmlFor="name">Tên</label>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

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






                            <div className="col-md-3">
                                <div className="card col-md-12 ">

                        <div className="mb-3">
                  <label htmlFor="parent_id">Danh mục cha</label>
                  <select
                    type="text"
                    name="parent_id"
                    value={parent_id}
                    onChange={(e) => setParentId(e.target.value)}
                    className="form-control"
                  >
                    <option value="0">Danh mục cha</option>
                    {topics.map(function (top, index) {
                      return (
                        <option key={index} value={top.id}>
                          {top.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                                    <div className="mb-3">
                                        <label htmlFor="status">Trạng thái</label>
                                        <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                            <option value="1">Xuất bản </option>
                                            <option value="2">Không xuất bản </option>

                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default TopicCreate;