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
        $questionDetails = DB::table('questions')->where('questions.form_id','=',$id)->select('questions.form_id', 'questions.question_id', 'questions.question_description', 'questions.question_type', 'questions.created_at', 'questions.updated_at')->get();

            foreach ($questionDetails as $key => $value) {
                       

                $optionDetails = DB::table('options')->where('options.form_id','=',$id)->where('options.question_id','=', $value->question_id)->select('options.form_id', 'options.question_id', 'options.option_id', 'options.option_description', 'options.created_at', 'options.updated_at')->get();

                $insert[] = [
                    'question_id' => $value->question_id,
                    'question_description' => $value->question_description,
                    'form_id' => $value->form_id,
                    'question_type' => $value->question_type,
                    'created_at' => $value->created_at,
                    'updated_at' => $value->updated_at,
                    'optionDetails' => $optionDetails
                ];
            }

        return $insert;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        echo $request;
        DB::table('questions')->insert(
             array(
                'form_id' => $request['form_id'], 
                'question_description' => $request['questionDescription'],
                'question_type' => $request['question_type']
             )
        );

        $questionId = DB::table('questions')->max('question_id');

        if ($request['question_type'] == 'MCQ') {

            $options = $request['options'];

            foreach ($options as $option) {
                $insert[] = [
                    'form_id' => $request['form_id'], 
                    'question_id' => $questionId, 
                    'option_description' => $option
                ];
            }

            DB::table('options')->insert($insert);
        }

        return response()->json('Question and Options Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($formid, $questionid)
    {
         $questionDetails = DB::table('questions')->where('questions.form_id', '=', $formid)->where('questions.question_id', '=', $questionid)->select('questions.question_id', 'questions.question_description', 'questions.question_type', 'questions.created_at', 'questions.updated_at')->get();
        return $questionDetails;
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
        echo $request;
        
        DB::table('questions')->where('form_id','=', $request['fid'])->where('question_id','=',$request['qid'])->update([
                'question_description' => $request['description'],
                'question_type' => $request['question_type']
            ]
        );
        echo $request;
        return response()->json('Question Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($formid, $questionid)
    {
        DB::table('questions')->where('form_id','=', $formid)->where('question_id','=', $questionid)->delete();
        return response()->json('Question Deleted Successfully.');
    }
}
