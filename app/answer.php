<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class answer extends Model
{
    protected $fillable = [
        'attempt_id', 'question_id', 'answer', 'user_id',
    ];

}
