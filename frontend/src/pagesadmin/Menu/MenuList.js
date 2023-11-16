import { Link } from "react-router-dom";
import menuservice from "../../service/MenuSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';
import urlImage from "../../config";

function MenuList() {
    
    const [menus, setMenus] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll()
                .then(function (result) {
                    setMenus(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function menuDelete($id) {
        menuservice.remove($id)
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
        <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/menu">Menu</Link></li>
      </ol>
    </nav></div>
    <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TRANG ĐIỀU HƯỚNG</strong>
                    </div>
      <div className=" col d-flex justify-content-end"><Link className="btn btn-sm btn-success mb-2" to="/admin/menu/create">Add</Link></div></div>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col ">#</th>
              <th scope="col ">Tên Điều Hướng</th>
              <th scope="col ">Link</th>
              <th scope="col ">Bảng</th>
              <th scope="col ">Type</th>
              <th scope="col ">Ngày tạo</th>
              <th scope="col ">Chức năng</th>
            </tr>
          </thead>
          <tbody>
          {menus.map(function (menu, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>{menu.name}</td>
                                            <td>{menu.link}</td>
                                            <td>{menu.table_id}</td>
                                            <td>{menu.type}</td>
                                            <td>
                                            {Moment(menu.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
              <td >
                <Link type="button" className="btn  btn-primary mr-2" to={'/admin/menu/show/'+menu.id}><i className="far fa-eye"></i></Link>
                <Link type="button" className="btn  btn-success mr-2" to={'/admin/menu/update/'+menu.id}><i className="fas fa-edit"></i></Link>
              <Link type="button" className="btn  btn-danger mr-2" onClick={() => menuDelete(menu.id)}><i className="far fa-trash-alt"></i></Link>
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




export default MenuList;