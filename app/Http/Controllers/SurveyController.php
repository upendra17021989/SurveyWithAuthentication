<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Survey;
use DB;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$surveys = Survey::all();
        //return response()->json($surveys);
        $surveyDetails = DB::table('survey_question')->join('survey_option', 
            'survey_option.question_id', '=', 'survey_question.id')->select('survey_question.id as question_id', 'survey_question.description as desc','survey_option.option_id', 'survey_option.description as desc2')->get();
        return $surveyDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $question = DB::table('survey_question')->where('survey_question.id','=', $id)->select('survey_question.id as question_id', 'survey_question.description as question')->get();
         $options = DB::table('survey_option')->where('survey_option.question_id','=', $id)->select('survey_option.option_id as option_id', 'survey_option.description as option')->get();
         $surveyDetails = array_merge($question->toArray(), $options->toArray());
        return $surveyDetails;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
