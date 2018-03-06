<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterTest extends TestCase
{
    public function testsRegistersSuccessfully()
    {
        $payload = [
            'email' => 'sorry@theseTestsShouldHaveBeenWrittenSooner.com',
            'password' => 'AbleToAndArthurAreAGreatFit',
        ];

        $this->json('post', '/signup', $payload)
            ->assertStatus(201)
            ->assertJsonStructure([
                    'id',
                    'email',
                    'created_at',
                    'updated_at',
            ]);;
    }
}
