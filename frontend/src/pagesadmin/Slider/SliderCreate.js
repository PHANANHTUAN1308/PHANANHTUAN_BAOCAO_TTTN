import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import sliderservice from "../../service/SliderService";
function SliderCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    /*------------------------------------------------*/
    async function sliderStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        slider.append("image", image.files[0]);
        await sliderservice.create(slider).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/slider", { replace: true });
        });
    
    }
    /*------------------------------------------------*/
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Slider</li>
            </ol>
        </nav></div>
            <form onSubmit={sliderStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="text-danger">
                                    THÊM TRANG QUẢNG CÁO
                                </strong>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <button type="submit" className="btn btn-sm btn-success me-2 mr-2">
                                    Lưu
                                </button>
                                <Link to="/admin/product" className="btn btn-sm btn-primary mr-2">Quay lại</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">

                        <div className="card-body">
                            <div className="row" >
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="name">Tên Trang</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

                                    </div>
                                    <div className="md-3">
                                        <label htmlFor="image">Hình ảnh</label>
                                        <input type="file" id="image" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="link">Đường dẫn</label>
                                        <textarea name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="sort_order">Sắp xếp theo</label>
                                        <select name="ort_order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                            <option value="0">None</option>

                                        </select>
                                        <div />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="position">Thứ tự</label>
                                        <textarea name="position" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control"></textarea>

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="status">Trạng thái</label>
                                        <select
                                            type="text"
                                            name="status"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)} className="form-control"
                                        >
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
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

export default SliderCreate;