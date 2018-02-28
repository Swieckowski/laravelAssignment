<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;

class QuestionsController extends Controller
{
    public function index()
    {   
        $questions = Question::all();
        return response()->json($questions, 200);
    }
}
