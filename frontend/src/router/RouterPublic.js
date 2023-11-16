
import Home from "../layouts/Site/Home";
import ProductDetail from "../pages/product/ProductDetail";
import ProfileMain from "../pages/profile/ProfileMain";
import ProfileSetting from "../pages/profile/ProfileSetting";
import ProfileAddress from "../pages/profile/ProfileAddress";
import ProfileWishlist from "../pages/profile/ProfileWishlist";
import ProfileSeller from "../pages/profile/ProfileSeller";
import ProfileOrder from "../pages/profile/ProfileOrder";
import ShoppingCart from "../pages/cart/Cart";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import ListingGrid from "../pages/category/CategoryGrid";
import ListingList from "../pages/category/CategoryList";
import CategoryView from "../pages/category/CategoryView";
import Contact from "../pages/contact/Contact";
import ProductView from "../pages/product/ProductView";
import BrandView from "../pages/brand/BrandView";

const RouterPublic=[
    {path: '/', component:Home},
    {path: '/product-detail/:slug', component:ProductDetail},
    {path: '/product/category/:slug', component:CategoryView},
    {path: '/product/brand/:slug', component:BrandView},
    {path: '/product/', component:ProductView},
    {path: '/profile-main', component:ProfileMain},
    {path: '/profile-order', component:ProfileOrder},
    {path: '/profile-setting', component:ProfileSetting},
    {path: '/profile-address', component:ProfileAddress},
    {path: '/profile-wishlist', component:ProfileWishlist},
    {path: '/profile-seller', component:ProfileSeller},
    {path: '/shopping-cart', component:ShoppingCart},
    {path: '/login', component:Login},
    {path: '/register', component:Register},
    {path: '/contact', component:Contact},
    {path: '/listing-grid', component:ListingGrid},
    {path: '/category', component:CategoryView},
    {path: '/listing-large', component:ListingList},


];
export default RouterPublic;