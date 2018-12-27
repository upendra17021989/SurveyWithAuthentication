<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class OptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($fid, $qid)
    {
        $optionDetails = DB::table('options')->where('options.form_id','=',$fid)->where('options.question_id','=',$qid)->select('options.form_id', 'options.question_id', 'options.option_id', 'options.option_description', 'options.created_at', 'options.updated_at')->get();
        return $optionDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        DB::table('options')->insert(
             array(
                    'form_id' => $request['form_id'], 
                    'question_id' => $request['question_id'], 
                    'option_description' => $request['description']
             )
        );

        return response()->json('Option Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($formid, $questionid, $optionid)
    {
         $optionDetails = DB::table('options')->where('options.form_id', '=', $formid)->where('options.question_id', '=', $questionid)->where('options.option_id', '=', $optionid)->select('options.question_id', 'options.option_id', 'options.option_description', 'options.created_at', 'options.updated_at')->get();
        return $optionDetails;
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

        DB::table('options')->where('form_id','=', $request['fid'])->where('question_id','=',$request['qid'])->where('option_id','=',$request['oid'])->update([
                'option_description' => $request['description']
            ]
        );
        echo $request;
        return response()->json('Option Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($formid, $questionid, $optionid)
    {
        DB::table('options')->where('form_id','=', $formid)->where('question_id','=', $questionid)->where('option_id','=', $optionid)->delete();
        
        return response()->json('Option Deleted Successfully.');
    }
}
