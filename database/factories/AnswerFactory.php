<?php

use Faker\Generator as Faker;

$factory->define(App\Answer::class, function (Faker $faker) {
    return [
        'answer' => $faker->sentence,
        'user_id' => $faker->numberBetween(0, 9000),
        'question_id' => $faker->numberBetween(0, 9000),
        'attempt_id' => $faker->numberBetween(0, 9000)
    ];
});