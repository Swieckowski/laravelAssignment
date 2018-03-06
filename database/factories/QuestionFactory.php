<?php

use Faker\Generator as Faker;

$factory->define(App\Question::class, function (Faker $faker) {
    return [
        'question' => $faker->sentence,
        'a' => $faker->sentence,
        'b' => $faker->sentence,
        'c' => $faker->sentence,
        'd' => $faker->sentence,
    ];
});
