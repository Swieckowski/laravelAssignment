<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    public function index()
    {   
        $questions = Question::all()
        return response()->json($questions, 200);
    }
}
