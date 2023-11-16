import { Link } from "react-router-dom";

import brandservice from "../../service/BrandSevice";
import { useEffect,useState } from "react";
import Moment from 'moment';
import { urlImage } from "../../config";
function BrandList() {
    
    const [brands, setBrands] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll()
                .then(function (result) {
                    setBrands(result.data.data);
                }
                );
        })();
    }, [status_delete]);
    function brandDelete($id) {
        brandservice.remove($id)
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
        <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/brand">Brand</Link></li>
      </ol>
    </nav></div>
    <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
      <div className=" col d-flex justify-content-end"><Link className="btn btn-sm btn-success mb-2" to="/admin/brand/create">Add</Link></div></div>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col ">#</th>
              <th scope="col ">Hình</th>
              <th scope="col ">Tên Thương hiệu</th>
              <th scope="col ">Slug</th>
              <th scope="col ">Ngày tạo</th>
              <th scope="col ">Chức năng</th>
            </tr>
          </thead>
          <tbody>
          {brands.map(function (brand, index) {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img src={urlImage+'brand/'+brand.image} alt="hinh.png" classNameName="img-fluid" width="50px" height="50px"/>
                                            </td>
                                            <td>{brand.name}</td>
                                            <td>
                                            {brand.slug}
                                            </td>
                                            <td>
                                            {Moment(brand.created_at).format('DD-MM-yyyy hh:mm')}
                                            </td>
              <td >
                <Link type="button" className="btn  btn-primary mr-2" to={'/admin/brand/show/'+brand.id}><i className="far fa-eye"></i></Link>
                <Link type="button" className="btn  btn-success mr-2" to={'/admin/brand/update/'+brand.id}><i className="fas fa-edit"></i></Link>
              <Link type="button" className="btn  btn-danger mr-2" onClick={() => brandDelete(brand.id)}><i className="far fa-trash-alt"></i></Link>
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




export default BrandList;