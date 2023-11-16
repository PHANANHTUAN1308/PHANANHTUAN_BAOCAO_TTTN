import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../service/CategorySevice";
import { useEffect, useState } from "react";

function CategoryUpdate() {
  const { id } = useParams("id");
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOder] = useState(0);
  const [status, setStatus] = useState(1);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id).then(function (result) {
        const tmp = result.data.data;
        setName(tmp.name)
        setMetakey(tmp.metakey)
        setMetadesc(tmp.metadesc)
        setStatus(tmp.status)
        setParentId(tmp.parent_id)
        setSortOder(tmp.sort_order)
      });
    })();
  }, [id]);
  //
  const navigate = useNavigate();
  const [categories, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.data);
      });
    })();
  }, []);


  async function categoryEdit(event) {
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
    }
    else {
      category.append("image", image.files[0]);
    }
    await categoryservice.update(category, id).then(function (res) {
      alert(res.data.message);
      navigate('/admin/category', { replace: true });
    });
  }

  return (
    <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/category">Category</Link></li>

      </ol>
    </nav></div>


          
          <form onSubmit={categoryEdit}>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">
                    <strong className="text-danger">CHỈNH SỬA DANH MỤC</strong>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end">
                    <button type="submit" className="btn btn-sm btn-success mr-2">
                      Lưu
                    </button>
                    <Link to="/admin/category" className="btn btn-sm btn-primary mr-2">
                      Về danh sách
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <div className="mb-3"><label htmlFor="name">Tên danh mục</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="metakey">Từ khóa</label>
                      <textarea
                        name="metakey"
                        value={metakey}
                        onChange={(e) => setMetakey(e.target.value)}
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="metadesc">Mô tả</label>
                      <textarea
                        name="metadesc"
                        value={metadesc}
                        onChange={(e) => setMetadesc(e.target.value)}
                        className="form-control"
                      ></textarea>
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
                        onChange={(e) => setSortOder(e.target.value)}
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
          </form>
</>
  );
}

export default CategoryUpdate;