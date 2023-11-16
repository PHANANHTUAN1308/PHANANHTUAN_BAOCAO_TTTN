import { Link, useNavigate } from "react-router-dom";


import { useState } from "react";
import brandservice from "../../service/BrandSevice"
function BrandCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    async function brandStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        brand.append("image", image.files[0]);
        await brandservice.create(brand).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/brand", { replace: true });
        });
    }
    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Brand</li>
            </ol>
        </nav></div>
            <form onSubmit={brandStore} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col ">
                                <strong className="text-danger">
                                    THÊM THƯƠNG HIỆU
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
                                    <label htmlFor="metadesc">Tóm tắt</label>
                                    <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card col-md-12 ">
                                    <div className="mb-3">
                                        <label htmlFor="sort_order">Sắp xếp theo</label>
                                        <select name="ort_order" className="form-control" value={sort_order} onChange={(e) => setSortOrder(e.target.value)}>
                                            <option value="0">None</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image">Ảnh</label>
                                        <input type="file" id="image" name="image" className="form-control" />
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

export default BrandCreate;