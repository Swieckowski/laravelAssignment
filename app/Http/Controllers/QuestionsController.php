<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use DB;

class QuestionsController extends Controller
{
    public function index()
    {   
        $questions = DB::table('questions')->get();
        return response()->json($questions, 200);
    }
}
