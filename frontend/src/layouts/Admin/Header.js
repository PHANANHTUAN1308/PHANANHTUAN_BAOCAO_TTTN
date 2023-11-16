import { Component } from "react";
import "../../assets/css/dashboard.css";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (<header>
      <nav class="navbar navbar-dark bg-dark">
  <Link class="navbar-brand" to="/admin">Anh Tuan</Link>
  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse" id="navbarsExample01" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/admin">Dashboard <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin/brand">Thương Hiệu</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin/category">Danh mục</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin/menu">Menu</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-expanded="false">Sản Phẩm</Link>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="/admin/product">Quản lý sản phẩm</Link>
          <Link class="dropdown-item" to="/admin/productsale">Quản lý sản phẩm hạ giá</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin/menu">Quản lý trang liên hệ</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin/user">Quản lý người dùng</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-md-0">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
  </header>
    );
  }
}

export default Header;
