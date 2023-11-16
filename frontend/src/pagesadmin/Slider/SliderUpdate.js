import { Link, useNavigate, useParams } from "react-router-dom";
import sliderservice from "../../service/SliderService";
import { useEffect, useState } from "react";

function SliderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [position, setPosition] = useState("");
    const [sort_order, setSort_order] = useState(0);
    const [status, setStatus] = useState(1);
    const [sliders, setSliders] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll().then(function (result) {
                setSliders(result.data.data);
            });
        })();
    }, []);
    const [slider, setSlider] = useState([]);
    useEffect(
        function () {
            (async function () {
                await sliderservice.getById(id).then(function (result) {
                    setSlider(result.data.data);
                });
            })();
            setName(slider.name);
            setLink(slider.link);
            setPosition(slider.position);
            setSort_order(slider.sort_order);
            setStatus(slider.status);
        },
        [
            slider.position,
            slider.link,
            slider.name,
            slider.sort_order,
            slider.status,
            id,
        ]
    );
    async function sliderEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "");
        } else {
            slider.append("image", image.files[0]);
        }

        await sliderservice.update(slider, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/slider", { replace: true });
        });
    }
    return (
<><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Product</li>
        </ol>
      </nav></div>
        <form onSubmit={sliderEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">SỬA TRANG</strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit" className="btn btn-sm btn-success me-3 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-primary mr-2">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3"><label htmlFor="name">Tên Trang</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            

                            <div className="md-3">
                                <label htmlFor="price">Link</label>
                                <input onChange={(e) => setLink(e.target.value)} type="text" name="price" value={link} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price_sale">Thứ tự</label>
                                <input onChange={(e) => setPosition(e.target.value)} type="text" name="price_sale" value={position} className="form-control" />
                            </div>
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
                  {sliders.map(function (sli, index) {
                    return (
                      <option key={index} value={sli.sort_order+1}>
                        Sau: {sli.name}
                      </option>
                    );
                  })}
                </select>
              </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form"></input>
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
        </form></>


        
    );
}

export default SliderUpdate;