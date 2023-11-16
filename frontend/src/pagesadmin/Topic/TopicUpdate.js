import { Link, useNavigate, useParams } from "react-router-dom";
import topicservice from "../../service/TopicSevice";
import { useEffect, useState } from "react";

function TopicUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParent_id] = useState(0);
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopics(result.data.data);
            });
        })();
    }, []);
    const [topic, setTopic] = useState([]);
    useEffect(
        function () {
            (async function () {
                await topicservice.getById(id).then(function (result) {
                    setTopic(result.data.data);
                });
            })();
            setName(topic.name);
            setMetakey(topic.metakey);
            setMetadesc(topic.metadesc);
            setParent_id(topic.parent_id);
            setSort_order(topic.sort_order);
            setStatus(topic.status);
        },
        [
            topic.metadesc,
            topic.metakey,
            topic.name,
            topic.parent_id,
            topic.sort_order,
            topic.status,
            id,
        ]
    );
    async function topicUpdate(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("parent_id", parent_id);
        topic.append("sort_order", sort_order);
        topic.append("status", status);


        await topicservice.update(topic, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/topic", { replace: true });
        });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/topic">Topic</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="">{id}</Link></li>
        </ol>
      </nav></div>
        <form onSubmit={topicUpdate}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">CẬP NHẬT CHỦ ĐỀ</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button type="submit" className="btn btn-sm btn-success mr-2">
                Lưu
              </button>
              <Link to="/admin/category" className="btn btn-sm btn-primary mr-2">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metadesc"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  type="text"
                  name="sort_order"
                  value={sort_order}
                  onChange={(e) => setSort_order(e.target.value)}
                  className="form-control"
                >
                  <option value="0">None</option>
                  {topics.map(function (top, index) {
                    return (
                      <option key={index} value={top.sort_order+1}>
                        Sau: {top.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}className="form-control"
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
                </div>
              </div>
            </div>
          </div>
      
      </form>
</>
    );
}

export default TopicUpdate;