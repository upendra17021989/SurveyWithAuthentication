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
                        'department' => $value->dep,
                        'level' => $value->level,
                        'password' => bcrypt('default'),
                        'company_id' => $request->company_id
                        ];

                        $insert1[] = [
                        'company_id' => $request->company_id,
                        'user_id' => $value->email
                        ];
                    }
 
                    if(!empty($insert)){
                        DB::beginTransaction();
                        try {
                            DB::table('users')->insert($insert);
                            DB::table('user_survey_link')->insert($insert1);
                            DB::commit();
                            return response()->json('Your Data has successfully imported');    
                        } catch (Exception $e) {
                            DB:: rollBack();
                            return $e->getMessage();
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
