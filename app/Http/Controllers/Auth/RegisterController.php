<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    public function store()
    {   
        // $email = request()->input('user.email');
        // $password = request()->input('user.password');
        $this->validate(request(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        $user = User::create([
            'email' => request()->input('email'),
            'password' => Hash::make(request()->input('password')),
        ]);
        return response()->json($user[0], 201);
    }
}
