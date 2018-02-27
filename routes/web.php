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

Route::get('/attempts/{id}', 'AttemptController@userIndex');

Route::get('{all}', function () {
    return view('welcome');
})->where('all', '.*');

// POST
Route::post('/attempts', 'AttemptController@store');

Route::post('/signup', 'Auth\RegisterController@store');

Route::post('/login', 'Auth\LoginController@create');
