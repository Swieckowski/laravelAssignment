<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{

    public function testUserLoginsSuccessfully()
    {
        $user = factory(User::class)->create([
            'email' => 'testlogin@user.com',
            'password' => bcrypt('AbleToAndArthurAreAGreatFit'),
        ]);

        $payload = ['email' => 'testlogin@user.com', 'password' => 'AbleToAndArthurAreAGreatFit'];

        $this->json('POST', '/login', $payload)
            ->assertStatus(201)
            ->assertJsonStructure([
                    'id',
                    'email',
                    'created_at',
                    'updated_at',
                ]);
    }
}