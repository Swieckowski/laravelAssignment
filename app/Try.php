<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Try extends Model
{
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
