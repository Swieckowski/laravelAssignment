<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attempt extends Model
{
    protected $fillable = [
        'user_id',
    ];


    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
