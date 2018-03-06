<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Attempt;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AttemptsTest extends TestCase
{
    public function testsAttemptsAreCreatedCorrectly()
    {
        $payload = [
            'user_id' => '5',
        ];

        $this->json('POST', '/attempts', $payload)
            ->assertStatus(201)
            ->assertJson(['id' => 1, 'user_id' => '5']);
    }

    public function testAttemptsAreListedCorrectly()
    {
        factory(Attempt::class)->create([
            'user_id' => '1'
        ]);

        factory(Attempt::class)->create([
            'user_id' => '1'
        ]);

        $response = $this->json('GET', '/attempts/1', [])
            ->assertStatus(200)
            ->assertJson([
                ['user_id' => '1'],
                ['user_id' => '1'],
            ])
            ->assertJsonStructure([
                '*' => ['id', 'user_id'],
            ]);
    }

}
