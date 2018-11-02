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
    public function create(Request $request)
    {
        echo $request;

        DB::table('forms')->insert(
            array(
                'form_name' => $request['name'], 
                'form_description' => $request['description']
            )
        );

        return response()->json('Form Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($formid)
    {
        $formDetails = DB::table('forms')->where('forms.form_id', '=', $formid)->select('forms.form_id', 'forms.form_name', 'forms.form_description', 'forms.created_at', 'forms.updated_at')->get();
        return $formDetails;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function formDropDown()
    {
        $formDropDown = DB::table('forms')->select('forms.form_id', 'forms.form_name')->get();
        return $formDropDown;
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
        DB::table('forms')->where('form_id', $request['form_id'])->update([
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
    public function destroy($form_id)
    {
        DB::table('forms')->where('form_id', $form_id)->delete();
    }
}
