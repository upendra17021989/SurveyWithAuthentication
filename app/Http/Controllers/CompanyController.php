<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $companyDetails = DB::table('company')->select('company.company_id', 'company.company_name', 'company.address', 'company.created_at', 'company.updated_at')->get();
        return $companyDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $data)
    {
        DB::table('company')->insert(
             array(
                    'company_name' => $data['name'], 
                    'address' => $data['address']
             )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $companyDetails = DB::table('company')->where('company.company_id','=',$id)->select('company.company_id', 'company.company_name', 'company.address', 'company.created_at', 'company.updated_at')->get();
        return $companyDetails;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::table('company')->where('company_id', $request['id'])->update([
                'company_name' => $request['name'],
                'address' => $request['address']
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('company')->where('company_id', $id)->delete();
    }
}
