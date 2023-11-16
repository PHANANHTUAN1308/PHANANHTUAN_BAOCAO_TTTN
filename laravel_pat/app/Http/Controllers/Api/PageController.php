<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class PageController extends Controller
{
    function index(){
        $data = Page::all();
        return response()->json($data,200);
    }
    function index_rev(){
        $data = Page::orderBy('created_at','DESC')->get();
        return response()->json($data,200);
    }
    function show($id){
        $data = Page::find($id);
        return response()->json([
            'success' => true,
            'message' => 'thành công',
            'data' => $data,
        ],
        200);
    }
    public function destroy($id)
    {
        $page=Page::find($id+0);
        if($page==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $page->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $page],
            200
        );
    }
    function store(Request $request)
    {
        $page = new Page();
        $page->title = $request->title; //form
        $page->slug = Str::of($request->title)->slug('-');
        $page->content = $request->content;
        $page->created_at = date('Y-m-d H:i:s');
        $page->created_by = 1;
        $page->status = $request->status; //form
        $page->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $page],
            201
        );
    }
    function update(Request $request, $id)
    {
        $page = Page::find($id);
        $page->title = $request->title; //form
        $page->slug = Str::of($request->title)->slug('-');
        $page->content = $request->content;
        $page->updated_at = date('Y-m-d H:i:s');
        $page->updated_by = 1;
        $page->status = $request->status; //form
        $page->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $page],
            201
        );
    }
    public function getBySlug($slug)
    {
        $args =[['slug','=',$slug],['status','=',1]];
        $page = Page::where($args)->first();
        return response()->json(
            $page,200
        );
    }
}