import { Link, useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";
import categoryservice from "../../service/CategorySevice"
function CategoryCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [metakey, setMetakey] = useState('');
  const [metadesc, setMetadesc] = useState('');
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [status, setStatus] = useState(1);
  const [categories, setCategorys] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll()
        .then(function (result) {
          setCategorys(result.data.data);
        }
        );
    })();
  }, []);
  async function categoryStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var category = new FormData();
    category.append("name", name);
    category.append("metakey", metakey);
    category.append("metadesc", metadesc);
    category.append("parent_id", parent_id);
    category.append("sort_order", sort_order);
    category.append("status", status);
    if (image.files.length === 0) {
      category.append("image", "");
    } else
      category.append("image", image.files[0]);
    await categoryservice.create(category).then(function (res) {
      alert(res.data.message);
      navigate("../../admin/category", { replace: true });

    });

  }
  return (
    <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Brand</li>
      </ol>
    </nav></div>

      <form onSubmit={categoryStore} method="post">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <strong className="text-danger">
                  THÊM DANH MỤC
                </strong>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-sm btn-success mr-2">
                  Lưu
                </button>
                <Link to="/admin/category" className="btn btn-sm btn-primary mr-2">Quay lại</Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <div className="md-3">
                  <label htmlFor="name">Tên danh mục</label>
                  <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                </div>

                <div className="md-3">
                  <label htmlFor="metakey">Từ khóa</label>
                  <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                </div>

                <div className="md-3">
                  <label htmlFor="metadesc">Mô tả</label>
                  <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                </div>

              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="parent_id">Danh mục cha</label>
                  <select
                    type="text"
                    name="parent_id"
                    value={parent_id}
                    onChange={(e) => setParentId(e.target.value)}
                    className="form-control"
                  >
                    <option value="0">Danh mục cha</option>
                    {categories.map(function (cat, index) {
                      return (
                        <option key={index} value={cat.id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="sort_order">Sắp xếp</label>
                  <select
                    type="text"
                    name="sort_order"
                    value={sort_order}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="form-control"
                  >
                    <option value="0">None</option>
                    {categories.map(function (cat, index) {
                      return (
                        <option key={index} value={cat.sort_order + 1}>
                          Sau: {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="md-3">
                  <label htmlFor="image">Hình đại diện</label>
                  <input type="file" id="image" className="form-control" />
                </div>
                <div className="md-3">
                  <label htmlFor="status">Trạng thái</label>
                  <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default CategoryCreate;