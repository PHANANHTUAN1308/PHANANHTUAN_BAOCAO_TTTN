import { Link } from "react-router-dom";

import topicservice from "../../service/TopicSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';

function TopicList() {
    const [topics, setTopics] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll()
                .then(function (result) {
                    setTopics(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function topicDelete($id) {
        topicservice.remove($id)
            .then(function (res) {
                console.log(res.data.data);
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/topic">Topic</Link></li>
        </ol>
      </nav></div>
      <div className="card">
              <div className="card-header">
                  <div className="row">
                      <div className="col-6">
                          <strong className="text-primary">CHỦ ĐỀ</strong>
                      </div>
        <div className=" col d-flex justify-content-end"><Link className="btn btn-sm btn-success mb-2" to="/admin/topic/create">Add</Link></div></div>
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col ">#</th>
                <th scope="col ">Tên Chủ Đề</th>
                <th scope="col ">Danh mục cha</th>
                <th scope="col ">Slug</th>
                <th scope="col ">Ngày tạo</th>
                <th scope="col ">Chức năng</th>
              </tr>
            </thead>
            <tbody>
            {topics.map(function (topic, index) {
                                      return (
                                          <tr key={index}>
                                              <td>
                                                  <input type="checkbox" />
                                              </td>
                                              <td>{topic.name}</td>
                                              <td>{topic.parent_id}</td>
                                              <td>
                                              {topic.slug}
                                              </td>
                                              <td>
                                              {Moment(topic.created_at).format('DD-MM-yyyy hh:mm')}
                                              </td>
                <td >
                  <Link type="button" className="btn  btn-primary mr-2" to={'/admin/topic/show/'+topic.id}><i className="far fa-eye"></i></Link>
                  <Link type="button" className="btn  btn-success mr-2" to={'/admin/topic/update/'+topic.id}><i className="fas fa-edit"></i></Link>
                <Link type="button" className="btn  btn-danger mr-2" onClick={() => topicDelete(topic.id)}><i className="far fa-trash-alt"></i></Link>
                </td>
              </tr>
              )
          })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  
    </>
    );
}

export default TopicList;