<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductSaleController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\PageController;

/* BRANDS */
Route::get('brand/index', [BrandController::class, 'index']);
Route::get('brand/show/{id}', [BrandController::class, 'show']);
Route::post('brand/store', [BrandController::class, 'store']);
Route::post('brand/brand_list/{parent_id?}/{status?}', [BrandController::class, 'brand_list']);
Route::delete('brand/destroy/{id}', [BrandController::class, 'destroy']);
Route::post('brand/update/{id}', [BrandController::class, 'update']);
Route::get('brand_list/{position}',[BrandController::class,'brand_list']);

/* /BRANDS */

/* CATEGORIES */
Route::get('category/index', [CategoryController::class, 'index']);
Route::get('category/show/{id}', [CategoryController::class, 'show']);
Route::post('category/store', [CategoryController::class, 'store']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);
Route::post('category/category_list/{parent_id?}/{status?}', [CategoryController::class, 'category_list']);
Route::get('category/catebygundam',[CategoryController::class, 'catebygundam']);
Route::get('category/catebytool',[CategoryController::class, 'catebytool']);
Route::get('category/getallpnull',[CategoryController::class, 'getallpnull']);
Route::get('category/menucate',[CategoryController::class, 'menucate']);
Route::get('category/parentcate',[CategoryController::class, 'parentcate']);

/* /CATEGORES */

/* PRODUCT */

Route::get('product/index', [ProductController::class, 'index']);
Route::get('product/index_all/{limit}', [ProductController::class, 'index_all']);
Route::get('product/show/{id}', [ProductController::class, 'show']);
Route::post('product/store', [ProductController::class, 'store']);
Route::post('product/product_list/{limit}/{category_id?}/{status?}', [ProductController::class, 'product_list']);
Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
Route::get('product_category/{category_id}', [ProductController::class, 'product_category']);
Route::get('product_category_slug/{slug}', [ProductController::class, 'getByCategorySlug']);
Route::get('product_brand_slug/{slug}', [ProductController::class, 'getByBrandSlug']);
Route::get('product_brand/{limit}/{brand_id}', [ProductController::class, 'product_brand']);
Route::delete('product/destroy/{id}', [ProductController::class, 'destroy']);
Route::post('product/update/{id}', [ProductController::class, 'update']);
/* /PRODUCT */

/* PRODUCTSALE */

Route::get('productsale/index', [ProductSaleController::class, 'index']);
Route::get('productsale/show/{id}', [ProductSaleController::class, 'show']);
Route::post('productsale/store', [ProductSaleController::class, 'store']);
Route::delete('productsale/destroy/{id}', [ProductSaleController::class, 'destroy']);
Route::post('productsale/update/{id}', [ProductSaleController::class, 'update']);
/* /PRODUCTSALE */

Route::get('user/index', [UserController::class, 'index']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::post('user/store', [UserController::class, 'store']);
Route::post('user/user_list/{parent_id?}/{status?}', [UserController::class, 'user_list']);
Route::delete('user/destroy/{id}', [UserController::class, 'destroy']);
Route::post('user/update/{id}', [UserController::class, 'update']);
Route::get('user_list/{position}',[UserController::class,'brand_list']);
/* /BRANDS */

/* MENU */
Route::get('menu/menu_list/{position}/{table_id?}/{status?}',[MenuController::class,'menu_list']);
Route::get('menu/index',[MenuController::class,'index']);
Route::post('menu/store',[MenuController::class,'store']);
Route::post('menu/update/{id}',[MenuController::class,'update']);
Route::get('menu/show/{id}',[MenuController::class,'show']);
Route::delete('menu/destroy/{id}',[MenuController::class,'destroy']);
/* /MENU */

/* SLIDER */
Route::get('slider/index', [SliderController::class, 'index']);
Route::get('slider/show/{id}', [SliderController::class, 'show']);
Route::post('slider/store', [SliderController::class, 'store']);
Route::post('slider/update/{id}', [SliderController::class, 'update']);
Route::get('slider_list/{position}',[SliderController::class,'slider_list']);
Route::delete('slider/destroy/{id}', [SliderController::class, 'destroy']);
/* /SLIDER */


/* TOPIC */
Route::get('topic/index', [TopicController::class, 'index']);
Route::get('topic/show/{id}', [TopicController::class, 'show']);
Route::post('topic/store', [TopicController::class, 'store']);
Route::post('topic/update/{id}', [TopicController::class, 'update']);
Route::get('topic_list/{position}',[TopicController::class,'topic_list']);
Route::delete('topic/destroy/{id}', [TopicController::class, 'destroy']);
/* /TOPIC */

/* ORDER */
Route::get('order/index', [OrderController::class, 'index']);
Route::get('order/show/{id}', [OrderController::class, 'show']);
Route::get('order_list/{position}',[OrderController::class,'order_list']);
Route::delete('order/destroy/{id}', [OrderController::class, 'destroy']);
/* /ORDER */

/* ORDERDETAIL*/
Route::get('orderdetail/index', [OrderdetailController::class, 'index']);
Route::get('orderdetail/show/{id}', [OrderdetailController::class, 'show']);
Route::get('orderdetail_list/{position}',[OrderdetailController::class,'orderdetail_list']);
Route::delete('orderdetail/destroy/{id}', [OrderdetailController::class, 'destroy']);
/* /ORDERDETAIL */

/* CONTACT*/
Route::get('contact/index', [ContactController::class, 'index']);
Route::get('contact/show/{id}', [ContactController::class, 'show']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::post('contact/update/{id}', [ContactController::class, 'update']);
Route::delete('contact/destroy/{id}', [ContactController::class, 'destroy']);
/* /CONTACT */


/* POST */
Route::get('post/index', [PostController::class, 'index']);
Route::get('post/show/{id}', [PostController::class, 'show']);
Route::post('post/store', [PostController::class, 'store']);
Route::post('post/update/{id}', [PostController::class, 'update']);
Route::get('post_list/{position}',[PostController::class,'post_list']);
Route::delete('post/destroy/{id}', [PostController::class, 'destroy']);
/* /POST */

/* PAGE */
Route::get('page/index', [PageController::class, 'index']);
Route::get('page/show/{id}', [PageController::class, 'show']);
Route::post('page/store', [PageController::class, 'store']);
Route::post('page/update/{id}', [PageController::class, 'update']);
Route::get('page_list/{position}',[PageController::class,'page_list']);
Route::delete('page/destroy/{id}', [PageController::class, 'destroy']);
/* /PAGE */



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
