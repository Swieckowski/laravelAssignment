<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Answer;
use DB;

class AnswerController extends Controller
{

    public function store()
    {   
        $answer = Answer::create([
            'user_id' => request()->input('user_id'),
            'attempt_id' => request()->input('attempt_id'),
            'question_id' => request()->input('question_id'),
            'answer' => request()->input('answer')]);
        return response()->json($answer, 201);
    }

    public function change(){
        DB::table('answers')
            ->where('id', request()->input('answer_id'))
            ->update(['answer' => request()->input('answer')]);

        $newAnswer = DB::table('answers')
        ->where('id', request()->input('answer_id')) 
            ->get();
        return response()->json($newAnswer[0], 200);
    }

    public function history($answer,$user_id,$question_id){
        $answerHistory = DB::table('answers')
            ->where('user_id', '=', $user_id)
            ->where('question_id', '=', $question_id)
            ->where('answer', '=', $answer)
            ->orderBy('attempt_id')
            ->pluck('attempt_id');
        return response()->json($answerHistory, 200);
    }
}
