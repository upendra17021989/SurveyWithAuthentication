<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $questionDetails = DB::table('questions')->where('questions.form_id','=',$id)->select('questions.question_id', 'questions.question_description', 'questions.created_at', 'questions.updated_at')->get();
        return $questionDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        DB::table('questions')->insert(
             array(
                    'form_id' => $request['form_id'], 
                    'question_description' => $request['description']
             )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($form_id, $question_id)
    {
         $quesitonDetails = DB::table('questions')->where(['questions.form_id','=',$form_id],['questions.question_id', '=', $question_id])->select('questions.question_id', 'questions.question_description', 'questions.created_at', 'questions.updated_at')->get();
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
        DB::table('questions')->where(['form_id','=', $request['form_id']],['question_id','=',$request['question_id']])->update([
                'question_description' => $request['description']
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($form_id, $question_id)
    {
        DB::table('questions')->where(['form_id','=', $form_id],['question_id','=', $question_id])->delete();
    }
}
