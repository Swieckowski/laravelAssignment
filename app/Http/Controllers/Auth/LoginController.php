<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    public function create()
    {   
        $user = User::where('email', '=', request()->input('email'))
            ->get();

        if($user){
            if (Hash::check(request()->input('password'), $user->pluck('password')[0])) {
                return response()->json($user[0], 201);
            }
        }

        $returnData = array(
            'status' => 'error',
            'message' => 'Incorrect email or passowrd!'
        );
        return response()->json($returnData, 401);

    }
}
