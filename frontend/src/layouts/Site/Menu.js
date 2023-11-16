import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuservice from '../../service/MenuSevice';
import brandservice from '../../service/BrandSevice';
import categoryservice from '../../service/CategorySevice';

function Menu() {
  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const result = await menuservice.getAll();
      setMenus(result.data.data);
    };
    fetchMenus();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categoryservice.getAll();
      setCategories(result.data.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container">
  <div className="navbar-collapse collapse show" id="main_nav">
    <ul className="navbar-nav">
      {menus.map((menu, index) => 
        menu.name === "Thương Hiệu" ? (
          <li className="nav-item dropdown" key={index}>
            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="false">
              {menu.name} <i class="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            <div className="dropdown-menu dropdown-large">
              <nav className="row">
                {menus.map((subMenu, subIndex) => 
                  subMenu.table_id === menu.id ? (
                    <div className="col-6" key={subIndex}>
                      <Link to={"/product" +subMenu.link}>{subMenu.name}</Link>
                    </div>
                  ) : null
                )}
              </nav>
            </div>
          </li>
        )
        : menu.name === "Danh Mục" ? (
          <li className="nav-item dropdown" key={index}>
            <Link className="nav-link" data-toggle="dropdown" to="#" aria-expanded="false">
              {menu.name} <i class="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            <div className="dropdown-menu dropdown-large">
              <nav className="row">
                {menus.map((subMenu, subIndex) => 
                  subMenu.table_id === menu.id ? (
                    <div className="col-6" key={subIndex}>
                      <Link to={subMenu.link}>{subMenu.name}</Link>
                    </div>
                  ) : null
                )}
              </nav>
            </div>
          </li>
        )
        : menu.table_id === 0 ? (
          <li key={index} className="nav-item">
            <Link className="nav-link" to={menu.link}>{menu.name}</Link>
          </li>
        )
        : null
      )}
    </ul>
  </div>
</div>


  );
}


export default Menu;
