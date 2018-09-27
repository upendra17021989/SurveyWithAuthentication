<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formDetails = DB::table('forms')->select('forms.form_id', 'forms.form_name', 'forms.form_description', 'forms.created_at', 'forms.updated_at')->get();
        return $formDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $data)
    {
        DB::table('forms')->insert(
             array(
                    'form_name' => $data['name'], 
                    'form_description' => $data['description']
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
         $formDetails = DB::table('forms')->where('forms.form_id','=',$id)->select('forms.form_id', 'forms.form_name', 'forms.form_description', 'forms.created_at', 'forms.updated_at')->get();
        return $formDetails;
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
        DB::table('forms')->where('form_id', $request['id'])->update([
                'form_name' => $request['name'],
                'form_description' => $request['description']
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
        DB::table('forms')->where('form_id', $id)->delete();
    }
}
