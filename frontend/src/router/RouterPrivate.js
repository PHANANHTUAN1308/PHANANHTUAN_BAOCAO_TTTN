import BrandCreate from "../pagesadmin/Brand/BrandCreate";
import BrandList from "../pagesadmin/Brand/BrandList";
import BrandShow from "../pagesadmin/Brand/BrandShow";
import BrandUpdate from "../pagesadmin/Brand/BrandUpdate";
import Dashboard from "../pagesadmin/Dashboard";
/*--------------------------*/
import CategoryList from "../pagesadmin/Category/CategoryList"
import CategoryCreate from "../pagesadmin/Category/CategoryCreate"
import CategoryUpdate from "../pagesadmin/Category/CategoryUpdate"
import CategoryShow from "../pagesadmin/Category/CategoryShow"
/*--------------------------*/
import UserList from "../pagesadmin/User/UserList"
import UserCreate from "../pagesadmin/User/UserCreate"
import UserUpdate from "../pagesadmin/User/UserUpdate"
import UserShow from "../pagesadmin/User/UserShow"
/*-------------*/
import ContactList from "../pagesadmin/Contact/ContactList"
import ContactCreate from "../pagesadmin/Contact/ContactCreate"
import ContactUpdate from "../pagesadmin/Contact/ContactUpdate"
import ContactShow from "../pagesadmin/Contact/ContactShow"
/*-------------*/
import ProductList from "../pagesadmin/Product/ProductList"
import ProductCreate from "../pagesadmin/Product/ProductCreate"
import ProductUpdate from "../pagesadmin/Product/ProductUpdate"
import ProductShow from "../pagesadmin/Product/ProductShow"
/*-------------*/
import ProductsaleList from "../pagesadmin/Productsale/ProductsaleList"
import ProductsaleCreate from "../pagesadmin/Productsale/ProductsaleCreate"
import ProductsaleUpdate from "../pagesadmin/Productsale/ProductsaleUpdate"
import ProductsaleShow from "../pagesadmin/Productsale/ProductsaleShow"

import SliderList from "../pagesadmin/Slider/SliderList"
import SliderCreate from "../pagesadmin/Slider/SliderCreate"
import SliderUpdate from "../pagesadmin/Slider/SliderUpdate"
import SliderShow from "../pagesadmin/Slider/SliderShow"
import TopicList from "../pagesadmin/Topic/TopicList"
import TopicCreate from "../pagesadmin/Topic/TopicCreate"
import TopicUpdate from "../pagesadmin/Topic/TopicUpdate"
import TopicShow from "../pagesadmin/Topic/TopicShow"
import PostList from "../pagesadmin/Post/PostList"
import PostCreate from "../pagesadmin/Post/PostCreate"
import PostUpdate from "../pagesadmin/Post/PostUpdate"
import PostShow from "../pagesadmin/Post/PostShow"
/*-------------*/
import OrderList from "../pagesadmin/Order/OrderList"
import OrderCreate from "../pagesadmin/Order/OrderCreate"
import OrderUpdate from "../pagesadmin/Order/OrderUpdate"
import OrderShow from "../pagesadmin/Order/OrderShow"
/*-------------*/
import OrderdetailList from "../pagesadmin/Orderdetail/OrderdetailList"
import OrderdetailCreate from "../pagesadmin/Orderdetail/OrderdetailCreate"
import OrderdetailUpdate from "../pagesadmin/Orderdetail/OrderdetailUpdate"
import OrderdetailShow from "../pagesadmin/Orderdetail/OrderdetailShow"
/*---------------*/
import MenuList from "../pagesadmin/Menu/MenuList"
import MenuCreate from "../pagesadmin/Menu/MenuCreate"
import MenuUpdate from "../pagesadmin/Menu/MenuUpdate"
import MenuShow from "../pagesadmin/Menu/MenuShow"
import LoginAdmin from "../pagesadmin/Login/LoginAdmin";
const RouterPrivate = [
    { path: '/admin', component: Dashboard },
    { path: '/admin/brand', component: BrandList },
    { path: '/admin/brand/create', component: BrandCreate },
    { path: '/admin/brand/update/:id', component: BrandUpdate },
    { path: '/admin/brand/show/:id', component: BrandShow },
    /*----------------------------------------------------*/
    { path: '/admin/category', component: CategoryList },
    { path: '/admin/category/create', component: CategoryCreate },
    { path: '/admin/category/update/:id', component: CategoryUpdate },
    { path: '/admin/category/show/:id', component: CategoryShow },
    /*----------------------------------------------------*/
    { path: '/admin/menu', component: MenuList },
    { path: '/admin/menu/create', component: MenuCreate },
    { path: '/admin/menu/update/:id', component: MenuUpdate },
    { path: '/admin/menu/show/:id', component: MenuShow },
    /*----------------------------------------------------*/
    { path: '/admin/user', component: UserList },
    { path: '/admin/user/create', component: UserCreate },
    { path: '/admin/user/update/:id', component: UserUpdate },
    { path: '/admin/user/show/:id', component: UserShow },
    /*----------------------------------------------------*/
    { path: '/admin/contact', component: ContactList },
    { path: '/admin/contact/create', component: ContactCreate },
    { path: '/admin/contact/update/:id', component: ContactUpdate },
    { path: '/admin/contact/show/:id', component: ContactShow },
    /*----------------------------------------------------*/
    { path: '/admin/product', component: ProductList },
    { path: '/admin/product/create', component: ProductCreate },
    { path: '/admin/product/update/:id', component: ProductUpdate },
    { path: '/admin/product/show/:id', component: ProductShow },
    /*---------------------------------------------------------*/
    { path: '/admin/productsale', component: ProductsaleList },
    { path: '/admin/productsale/create', component: ProductsaleCreate },
    { path: '/admin/productsale/update/:id', component: ProductsaleUpdate },
    { path: '/admin/productsale/show/:id', component: ProductsaleShow },
    /*---------------------------------------------------------*/
    { path: '/admin/slider', component: SliderList },
    { path: '/admin/slider/create', component: SliderCreate },
    { path: '/admin/slider/update/:id', component: SliderUpdate },
    { path: '/admin/slider/show/:id', component: SliderShow },
    /*---------------------------------------------------------*/
    { path: '/admin/topic', component: TopicList },
    { path: '/admin/topic/create', component: TopicCreate },
    { path: '/admin/topic/update/:id', component: TopicUpdate },
    { path: '/admin/topic/show/:id', component: TopicShow },
    /*---------------------------------------------------------*/
    { path: '/admin/post', component: PostList },
    { path: '/admin/post/create', component: PostCreate },
    { path: '/admin/post/update/:id', component: PostUpdate },
    { path: '/admin/post/show/:id', component: PostShow },
    /*---------------------------------------------------------*/
    { path: '/admin/order', component: OrderList },
    { path: '/admin/order/create', component: OrderCreate },
    { path: '/admin/order/update/:id', component: OrderUpdate },
    { path: '/admin/order/show/:id', component: OrderShow },
    /*---------------------------------------------------------*/
    { path: '/admin/orderdetail', component: OrderdetailList },
    { path: '/admin/orderdetail/create', component: OrderdetailCreate },
    { path: '/admin/orderdetail/update/:id', component: OrderdetailUpdate },
    { path: '/admin/orderdetail/show/:id', component: OrderdetailShow },
    /*---------------------------------------------------------*/
    { path: '/admin/login', component: LoginAdmin },

];
export default RouterPrivate;