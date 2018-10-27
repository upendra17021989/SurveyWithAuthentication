<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::post('login','Auth\LoginController@login');  
    Route::post('register','Auth\RegisterController@register');  
    Route::post('logout','Auth\LoginController@logout');
    Route::post('password/email','Auth\ForgotPasswordController@sendResetLinkEmail'); 
    Route::post('password/reset','Auth\ResetPasswordController@reset');
    Route::get('user/{id}','Auth\LoginController@getUser');



    
    Route::post('createcompany','CompanyController@create');
    Route::post('createform','FormController@create');
    Route::post('createquestion','QuestionController@create');
    Route::post('createoption','OptionController@create');
    Route::post('createadminsurvey','AdminSurveyController@create');
    
    Route::get('company','CompanyController@index');  
    Route::get('form/{cid}','FormController@index');
    Route::get('adminquestion/{id}','QuestionController@index');
    Route::get('adminoption/{fid}/{qid}','OptionController@index');
    Route::get('adminsurvey','AdminSurveyController@index');

    Route::get('showcompany/{id}','CompanyController@show');  
    Route::get('showform/{cid}/{fid}','FormController@show');
    Route::get('showquestion/{fid}/{qid}','QuestionController@show');  
    Route::get('showoption/{fid}/{qid}/{oid}','OptionController@show');
    Route::get('showadminsurvey/{sid}','AdminSurveyController@show');  
    
    Route::post('updatecompany','CompanyController@update');  
    Route::post('updateform','FormController@update');  
    Route::post('updatequestion','QuestionController@update');  
    Route::post('updateoption','OptionController@update');
    Route::post('updateadminsurvey','AdminSurveyController@update');  
    
    Route::get('deletecompany/{id}','CompanyController@destroy');
    Route::get('deleteform/{cid}/{fid}','FormController@destroy');
    Route::get('deletequestion/{fid}/{qid}','QuestionController@destroy');  
    Route::get('deleteoption/{fid}/{qid}/{oid}','OptionController@destroy');  
    Route::get('deleteadminsurvey/{sid}','AdminSurveyController@destroy');
        
    Route::get('companydropdownlist','CompanyController@companyDropDown');
    Route::get('formdropdownlist/{cid}','FormController@formDropDown');
    Route::resource('survey', 'SurveyController');   

    Route::get('showusersurvey', 'UserSurveyController@index'); 
    Route::get('getaddusersurvey/{cid}', 'AddUserSurveyController@getUsers'); 
    Route::get('getsurveys/{cid}', 'AddUserSurveyController@getSurvey'); 
    Route::post('addusertosurvey', 'AddUserSurveyController@create'); 
    
    Route::get('getformid/{uid}', 'UserSurveyController@getFormId'); 
    
    Route::post('addusersurveydata', 'UserSurveyEndController@create'); 

    Route::get('/mail', 'UserSurveyController@sendMail');

    Route::get('/', 'ExcelController@index')->name('index');
    Route::post('import', 'ExcelController@import')->name('import');
});
  

