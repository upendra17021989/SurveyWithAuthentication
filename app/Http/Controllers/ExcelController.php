<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use DateTime;
use Excel;
use File;

class ExcelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

   public function import(Request $request){
        //validate the xls file
        $this->validate($request, array(
            'file'      => 'required'
        ));

       if($request->hasFile('file')){
            $extension = File::extension($request->file->getClientOriginalName());
            if ($extension == "xlsx" || $extension == "xls" || $extension == "csv") {
 
                $path = $request->file->getRealPath();
                $data = Excel::load($path, function($reader) {
                })->get();
                if(!empty($data) && $data->count()){
 
                    foreach ($data as $key => $value) {
                        $insert[] = [
                        'name' => $value->name,
                        'email' => $value->email,
                        'password' => bcrypt('default'),
                        'company_id' => $request->company_id
                        ];
                    }
 
                    if(!empty($insert)){
 
                        $insertData = DB::table('users')->insert($insert);
                        if ($insertData) {
                            return response()->json('Your Data has successfully imported');
                        }else {                        
                            return response()->json('Error inserting the data..');
                            return back();
                        }
                    }
                }

                return back();
 
            }else {
                return response()->json('File is a '.$extension.' file.!! Please upload a valid xls/csv file..!!');
            }
        }
    }
}
