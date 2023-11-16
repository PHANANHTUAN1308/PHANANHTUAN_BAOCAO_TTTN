import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import brandservice from "../../service/BrandSevice";
import { useEffect, useState } from 'react';
import { urlImage } from '../../config';
function BrandShow() {
    const { id } = useParams("id");
    const [brand, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getById(id).then(function (result) {
                setBrand(result.data.data);
            });
        })();
    }, [id]);

    return (
        <section className="card">
            <form onSubmit={BrandShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/admin/brand" className="btn btn-sm btn-success mr-2">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/brand/update/" + brand.id} className="btn btn-sm btn-primary mr-2">
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
                            <td>{brand.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{brand.slug}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'brand/'+brand.image} alt={brand.name} /></td>
                        </tr>
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{brand.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{brand.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{brand.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{brand.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default BrandShow;