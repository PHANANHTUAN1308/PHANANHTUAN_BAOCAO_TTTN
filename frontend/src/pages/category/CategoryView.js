import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandservice from "../../service/BrandSevice";
import categoryservice from "../../service/CategorySevice";
import CategoryGrid from "./CategoryGrid";
import CategoryList from "./CategoryList";

const CategoryView = () => {
    const [isGridActive, setIsGridActive] = useState(true);
    const [brands, setBrands] = useState([]);
    const [category, setCate] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await brandservice.getAll();
                setBrands(result.data.data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        })();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const result = await categoryservice.getAll();
                setCate(result.data.data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        })();
    }, []);

    const handleGridClick = () => {
        setIsGridActive(true);
    };

    const handleListClick = () => {
        setIsGridActive(false);
    };

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <ol className="breadcrumb float-left">
                            <li className="breadcrumb-item">
                                <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Product</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <aside className="col-md-2">
                        <article className="filter-group">
                            <h6 className="title">
                                <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-toggle="collapse"
                                    data-target="#collapse_1"
                                >
                                    Brands
                                </Link>
                            </h6>
                            <div className="filter-content collapse show" id="collapse_1">
                                <div className="inner">
                                    {brands.map((brand, index) => (
                                        <label key={index} className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                defaultChecked=""
                                                className="custom-control-input"
                                            />
                                            <div className="custom-control-label">{brand.name}</div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </article>
                        <article className="filter-group">
                            <h6 className="title">
                                <Link
                                    to="#"
                                    className="dropdown-toggle"
                                    data-toggle="collapse"
                                    data-target="#collapse_2"
                                >
                                    Category
                                </Link>
                            </h6>
                            <div className="filter-content collapse show" id="collapse_2">
                                <div className="inner">
                                    {category.map((cate, index) => (
                                        cate.parent_id !== 0 ? (
                                            <label key={index} className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked=""
                                                    className="custom-control-input"
                                                    id={cate.id}
                                                />
                                                <div className="custom-control-label">{cate.name}</div>
                                            </label>
                                        ) : null
                                    ))}
                                </div>
                            </div>
                        </article>
                    </aside>
                    <main className="col-md-10">
                        <div className="d-flex justify-content-end"><div className="btn-group">
                            <Link
                                to="#"
                                className={`btn btn-light ${isGridActive ? 'active' : ''}`}
                                onClick={handleGridClick}
                            >
                                <i class="fas fa-th"></i>
                            </Link>
                            <Link
                                to="#"
                                className={`btn btn-light ${!isGridActive ? 'active' : ''}`}
                                onClick={handleListClick}
                            >
                                <i class="fas fa-list"></i>
                            </Link>
                        </div></div>
                        {isGridActive ? <CategoryGrid /> : <CategoryList />}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default CategoryView;