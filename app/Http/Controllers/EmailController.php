<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use DateTime;

use Mail;
use App\Mail\submission;
use App\Mail\reminder;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFormId($company_id)
    {
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($survey_id)
    {
    }

    public function sendMail(Request $request) {
        $email = $request['email'];
        $title = 'Submission Status';
        $content = 'hi how are you';

        Mail::send('submissionmail', ['title' => $title, 'content' => $content], function ($message) use $email
        {

            $message->from('support@empmetrics.com', 'Survey Support');

            $message->to($email);

        });


        return response()->json(['message' => 'Request completed']);
    }

    public function sendMailAll(Request $request) {
        $email = $request['email'];
        $title = 'Survey Reminder';
        $content = 'hi how are you';

        $emailList = DB::table('user_survey_link')->select('user_id')->where('survey_id','=', $request['survey_id'])->where('company_id','=', $request['company_id'])->where('status','=', 'open')->get()->toArray();

        foreach($emailList as $email) {
            $emailUserId = $email->user_id;
            Mail::send('remindermail', ['title' => $title, 'content' => $content], function ($message) use($emailUserId)
            {
                $message->from('support@empmetrics.com', 'Survey Support');
                $message->to($emailUserId);
            });
        }


        return response()->json(['message' => 'Request completed']);
    }
}
