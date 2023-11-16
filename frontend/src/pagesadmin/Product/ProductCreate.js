import { useState,useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import productservice from "../../service/ProductSevice";
import categoryservice from "../../service/CategorySevice";
import brandservice from "../../service/BrandSevice";
function ProductCreate() {

    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [qty,setQty] = useState('');
    const [price, setPrice] = useState('');
    const [price_sale,setPriceSale] = useState('');
    const [detail,setDetail] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);

    const [brand, setBrand] = useState([]);
    
    const [category, setCategory] = useState([]);
    async function productStore(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
            product.append ("name",name);
            product.append ("qty",qty);
            product.append ("image", image.files[0]);
            product.append ("category_id",category);
            product.append ("brand_id",brand);
            product.append ("price",price);
            product.append ("price_sale",price_sale);
            product.append ("detail",detail);
            product.append ("metadesc",metadesc);
            product.append ("metakey",metakey);
            product.append ("status",status);
        
        try {
            await productservice.create(product).then(function (res) {
              alert(res.data.message);
              Navigate("../../admin/product", { replace: true });
            });
          } catch (error) {
            console.error(error.response.data);
          }
    }

    useEffect(function () {
        (async function () {
        await categoryservice.getAll().then(function (result) {
            setCategories(result.data.data);
        });
        })();
    }, []);
   
    useEffect(function () {
        (async function () {
        await brandservice.getAll().then(function (result) {
            setBrands(result.data.data);
        });
        })();
        
    }, []);
    

    return (
        <><div className="container bg-primary my-3"><nav aria-label="breadcrumb bg-primary">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Product</li>
        </ol>
      </nav></div>
        <form onSubmit={productStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="submit"className="btn btn-sm btn-success me-2 mr-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-primary mr-2">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="qty">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="text" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price">Giá Gốc</label>
                                <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="price_sale">Giá Đã Giảm</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="text" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="detail">Thông tin SP</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} type="text" name="detail" value={detail} className="form-control" ></textarea>
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
                            <div className="md-3">
                            <label htmlFor="parent_id">Danh mục</label>
                                <select
                                    type="text"
                                    name="category_id"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">Danh mục</option>
                                    {categories.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        );
                                    })}
                                </select>
                                <label htmlFor="brand_id">Thương hiệu</label>
                                <select
                                    type="text"
                                    name="category_id"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="form-control"
                                >
                                    <option value="0">Thương hiệu</option>
                                    {brands.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>
                                                {cat.name}
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

export default ProductCreate;