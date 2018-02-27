<?php

namespace App\Http\Controllers\Auth;

use DB;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    public function create()
    {   
        // $email = request()->input('user.email');
        // $password = request()->input('user.password');


        $user = DB::table('users')
            ->where('email', '=', request()->input('email'))
            ->get();

        if($user){
            if (Hash::check(request()->input('password'), $user->pluck('password')[0])) {
                return response()->json($user, 201);
            }
        }

        $returnData = array(
            'status' => 'error',
            'message' => 'Incorrect email or passowrd!'
        );
        return response()->json($returnData, 401);

    }
}
