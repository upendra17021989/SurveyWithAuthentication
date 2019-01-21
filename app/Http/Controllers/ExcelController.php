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
                $errorMessage[] = [
                    'status' => 'error',
                    'message' => 'File is a '.$extension.' file.!! Please upload a valid xls file..!!'
                ];

                return response()->json($errorMessage);
            }
        }
    }

    public function export(Request $request)  {
        $userSurveyDetails = DB::table('user_survey')->select('user_id', 'question_description', 'answer_description')->where('user_id','=', $request['email'])->get()->toArray();

        $user_survey_array[] = array('Email', 'Question', 'Answer');

        foreach($userSurveyDetails as $userSurvey) {
            $user_survey_array[] = array(
                'Email'  => $userSurvey->user_id,
                'Question'  => $userSurvey->question_description,
                'Answer'   => $userSurvey->answer_description
            );
        }

        $myFile = Excel::create('User Data '.$request['email'], function($excel) use ($user_survey_array) {
            $excel->setTitle('User Data');
            $excel->sheet('User Data', function($sheet) use ($user_survey_array){
            $sheet->fromArray($user_survey_array, null, 'A1', false, false);
            });
        });

        $myFile = $myFile->string('xlsx');

        $response =  array(
           'name' => "user_specific_survey_details_".date("Y-m-d",time()), //no extention needed
           'file' => "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,".base64_encode($myFile) //mime type of used format
        );
        return response()->json($response);
    }

     public function exportall(Request $request)  {
        $userSurveyDetails = DB::table('user_survey')->join('users','email', '=', 'user_id')->join('company', 'company.company_id', '=', 'users.company_id')->select('company_name', 'survey_name', 'user_id', 'question_description', 'answer_description')->where('survey_id','=', $request['survey_id'])->get()->toArray();

        $user_survey_array[] = array('Company Name', 'Survey Name', 'Email', 'Question', 'Answer');

        foreach($userSurveyDetails as $userSurvey) {
            $user_survey_array[] = array(
                'Company Name' => $userSurvey->company_name,
                'Survey Name'  => $userSurvey->survey_name,
                'Email'  => $userSurvey->user_id,
                'Question'  => $userSurvey->question_description,
                'Answer'   => $userSurvey->answer_description
            );
        }

        $myFile = Excel::create('User Data '.$request['email'], function($excel) use ($user_survey_array) {
            $excel->setTitle('User Data');
            $excel->sheet('User Data', function($sheet) use ($user_survey_array){
            $sheet->fromArray($user_survey_array, null, 'A1', false, false);
            });
        });

        $myFile = $myFile->string('xlsx');

        $response =  array(
           'name' => "survey_details_".date("Y-m-d h-m-s",time()), //no extention needed
           'file' => "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,".base64_encode($myFile) //mime type of used format
        );
        return response()->json($response);
    }
}
