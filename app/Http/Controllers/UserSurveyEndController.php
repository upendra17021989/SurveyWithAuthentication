<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use DateTime;

class UserSurveyEndController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         /*$userSurveyDetails = DB::table('questions')->join('options', 
            'questions.question_id', '=', 'options.question_id')->select('questions.question_id as question_id', 'questions.question_description as question_description','options.option_id', 'options.option_description as option_description')->get();
        return $userSurveyDetails;*/
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $surveys = $request['surveys'];


        foreach ($surveys as $survey) {
            DB::table('user_survey')->insert(
                 array(
                    'user_id' => $request['user_id'], 
                    'survey_id' => $request['survey_id'],
                    'form_id' => $request['form_id'],
                    'question_id' => $survey['question_id'],
                    'answer_id' => $survey['answer_id'],
                )
            );
        }

        DB::table('user_survey_link')->where('survey_id', $request['survey_id'])->where('user_id', $request['user_id'])->update([
                'status' => 'submitted'
            ]);

        return response()->json('Survey Created Successfully.');
    }

    public function getSurveyStatus($user_id)
    {
        $status = DB::table('user_survey_link')->where('user_id','=',$user_id)->select('status')->get();
        return $status;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $adminSurveyDetails = DB::table('company_survey')->where('company_survey.survey_id','=',$id)->select('company_survey.survey_id', 'company_survey.company_id', 'company_survey.form_id', 'company_survey.survey_name', 'company_survey.start_dt', 'company_survey.end_dt')->get();
        return $adminSurveyDetails;
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
        DB::table('company_survey')->where('survey_id', $request['survey_id'])->update([
                'company_id' => $request['company_id'],
                'form_id' => $request['form_id'],
                'survey_name' => $request['survey_name'],
                'start_dt' =>  new DateTime($request['start_dt']),
                'end_dt' => new DateTime($request['end_dt'])
            ]
        );

        return response()->json('Survey Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($survey_id)
    {
        DB::table('company_survey')->where('survey_id', $survey_id)->delete();
    }
}
