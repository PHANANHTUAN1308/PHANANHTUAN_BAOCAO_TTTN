<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;

use App\Http\Controllers\Api\MenuController;

class MenuController extends Controller
{
    public function menu_list($position, $table_id = 0)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $table_id],
            ['status', '=', 1]
        ];
        $menus = Menu::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'menus' => $menus
            ],
            200
        );
    }
    public function index(){
        $menus = Menu::all();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menus],200);
    }
    public function show($id){
        $menus = Menu::find($id);
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menus],200);
    }
    public function pagemenu($table_id){
        $menus = Menu::find($table_id);
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menus],200);
    }
     //Post- them store
     public function store(Request $request)
     {
         $menu = new Menu();
         $menu->name = $request->name; //form
         $menu->link = $request->link;
         $menu->table_id = $request->table_id;
         $menu->type = $request->type;
         $menu->created_at = date('Y-m-d H:i:s');
         $menu->created_by = 1;
         $menu->status = $request->status; //form
         $menu->save(); //lưu vào Csdl
         return response()->json(
             ['success' => true, 'message' => 'Thành công', 'data' => $menu],
             201
         );
     }
     //menu-update
     public function update(Request $request, $id)
 
     {
 
         $menu = Menu::find($id);
         $menu->name = $request->name; //form
         $menu->link = $request->link;
         $menu->table_id = $request->table_id;
         $menu->type = $request->type;
         $menu->updated_at = date('Y-m-d H:i:s');
         $menu->updated_by = 1;
         $menu->status = $request->status; //form
         $menu->save(); //lưu vào Csdl
 
         return response()->json(
 
             ['success' => true, 'message' => 'Thành công', 'data' => $menu],
 
             200
 
         );
     }
     //xoa
     public function destroy ($id)
     {
         $menu = Menu::find($id);
         if($menu == null){
             return response()->json(
                 ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
             );
         }
         $menu->delete();
         return response()->json(['message'=> 'thành công','success'=>true,'id'=>$id],200);
 
     }
}