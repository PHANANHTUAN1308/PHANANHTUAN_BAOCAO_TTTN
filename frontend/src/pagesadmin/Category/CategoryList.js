import { Link } from "react-router-dom";

import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";

function CategoryList() {
    const [categorys, setCategorys] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll()
                .then(function (result) {
                    setCategorys(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function categoryDelete($id) {
        categoryservice.remove($id)
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
          <li className="breadcrumb-item active" aria-current="page">Category</li>
        </ol>
      </nav></div>
      <div className="card">
            <div className="card-header">
                <div className="row">
                        <strong className="text-primary">DANH MỤC</strong>
                    </div>
      <div className=" d-flex justify-content-end"><Link className="btn btn-sm btn-success mb-2" to="/admin/category/create">Add</Link></div>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col ">#</th>
              <th scope="col ">Hình</th>
              <th scope="col ">Tên Danh mục</th>
              <th scope="col ">Slug</th>
              <th scope="col ">Ngày tạo</th>
              <th scope="col ">Chức năng</th>
            </tr>
          </thead>
          <tbody>
          {categorys.map(function (category, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img src={urlImage+'category/'+category.image} alt="hinh.png" classNameName="img-fluid" width="50px" height="50px"/>
                                            </td>
                                            <td>{category.name}</td>
                                            <td>
                                            {category.slug}
                                            </td>
                                            <td>
                                            {Moment(category.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
              <td >
                <Link type="button" className="btn  btn-primary mr-2" to={'/admin/category/show/'+category.id}><i className="far fa-eye"></i></Link>
                <Link type="button" className="btn  btn-success mr-2" to={'/admin/category/update/'+category.id}><i className="fas fa-edit"></i></Link>
              <Link type="button" className="btn  btn-danger mr-2" onClick={() => categoryDelete(category.id)}><i className="far fa-trash-alt"></i></Link>
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

export default CategoryList;