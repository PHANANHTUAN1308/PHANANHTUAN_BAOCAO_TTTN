
import { Link, useParams } from "react-router-dom";
import sliderservice from "../../service/SliderService";
import { MdAdd } from "react-icons/md";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urlImage } from "../../config";



function SliderShow() {
    const { id } = useParams("id");
    const [slider, setSliders] = useState([]);
    useEffect(
        function () {
            (async function () {
                await sliderservice.getById(id).then(function (result) {
                    setSliders(result.data.data);
                });
            })();
        },
        [id]
    );
    console.log(slider);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Thương hiệu</strong>

                    </div>
                    <div className="col-6 text-end">

                        <Link className="btn btn-sm btn-success" to="/admin/slider/create"><MdAdd />Thêm</Link>

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
                                        <img src={urlImage + 'slider/' + slider.image} alt="hinh.png" className="img-fluid" width="50px" height="50px" />
                                    </td>
                                    <td>{slider.name}</td>
                                    <td>
                                        {slider.link}
                                    </td>
                                    <td>
                                        {slider.created_at}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/slider/show/'+slider.id}><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-info me-2" to={'/admin/slider/update/'+slider.id}><FaEdit /></Link>
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

export default SliderShow;
