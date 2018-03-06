<?php

use Faker\Generator as Faker;

$factory->define(App\Attempt::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(0, 9000)
    ];
});