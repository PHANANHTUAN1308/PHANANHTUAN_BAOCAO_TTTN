<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Orderdetail;


class OrderdetailController extends Controller
{
    public function index(){
        $orderdetails = ordertaile::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetails],
            200
        );

    }
    public function show($id)
    {
        $ordertaile = Order::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orderdetail],
            200
        );
    }
    public function destroy($id)
    {
        $orderdetail=OrderDetail::find($id);
        if($ordertaile==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $orderdetail->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],
            200
        );
    }
}
