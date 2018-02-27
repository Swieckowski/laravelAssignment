<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Attempt;
use DB;

class AttemptController extends Controller
{
    public function userIndex($id)
    {   
        $userAttempts = DB::table('attempts')
            ->where('user_id', '=', $id)
            ->orderBy('id')
            ->get();
        return response()->json($userAttempts, 200);
    }

    public function store()
    {   
        $newAttempt = Attempt::create([
            'user_id' => request()->input('id'),
        ]);
        return response()->json($newAttempt, 201);
    }
}