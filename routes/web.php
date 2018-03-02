<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// GET
Route::get('/questions', 'QuestionsController@index');

Route::get('/attempts/{user_id}', 'AttemptController@userIndex');

Route::get('/attempt/answers/{attempt_id}', 'AttemptController@attemptAnswersIndex');

Route::get('/answer/history/{answer}/{user_id}/{question_id}', 'AnswerController@history');


Route::get('{all}', function () {
    return view('index');
})->where('all', '.*');

// POST
Route::post('/attempts', 'AttemptController@store');

Route::post('/answer', 'AnswerController@store');

Route::post('/signup', 'Auth\RegisterController@store');

Route::post('/login', 'Auth\LoginController@create');

// PUT
Route::put('/answer', 'AnswerController@change');
