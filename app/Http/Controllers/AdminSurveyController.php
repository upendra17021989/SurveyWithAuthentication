<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use DateTime;

class AdminSurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $adminSurveyDetails = DB::table('company_survey')->join('company', 
            'company_survey.company_id', '=', 'company.company_id')->join('forms', 
            'forms.form_id', '=', 'company_survey.form_id')->select('company_survey.company_id as company_id','company_survey.survey_id as survey_id', 'company.company_name as company_name', 'forms.form_name as form_name','company_survey.survey_name', 'company_survey.start_dt', 'company_survey.end_dt')->get();
        return $adminSurveyDetails;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        echo $request;
        DB::table('company_survey')->insert(
             array(
                'company_id' => $request['company_id'], 
                'form_id' => $request['form_id'],
                'survey_name' => $request['survey_name'],
                'start_dt' => new DateTime($request['start_dt']),//DateTime::createFromFormat('d/m/Y', $request['start_dt']),
                'end_dt' => new DateTime($request['end_dt']) //DateTime::createFromFormat('d/m/Y', $request['end_dt'])
             )
        );

        $companySurveyDetails = DB::table('company_survey')->select('survey_id')->where('company_id', '=', $request['company_id'] )->where('form_id','=', $request['form_id'])->get();

        $companySurveyDetail = $companySurveyDetails->toArray();
        
        DB::table('user_survey_link')->where('company_id', '=', $request['company_id'])->where('survey_id', '=', 0)->update([
            'survey_id' => $companySurveyDetail[0]->survey_id
        ]);

        return response()->json('Survey Created Successfully.');
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
