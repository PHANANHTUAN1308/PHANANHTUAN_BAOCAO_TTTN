<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Orderdetail;

class OrderController extends Controller
{
    public function index(){
        $orders = Order::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orders],
            200
        );

    }
    
    public function show($id)
    {
        $order = Order::find($id);
        $args = [['order_id','=',$id]];
        $order_detail = Orderdetail::where($args)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $order,'order_detail'=>$order_detail],
            200
        );
    }
    public function destroy($id)
    {
        $order=Order::find($id);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $order->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }

}
