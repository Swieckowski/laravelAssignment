<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Answer;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AnswersTest extends TestCase
{
    public function testsAnswersAreCreatedCorrectly()
    {
        $payload = [
            'answer' => 'Lorem',
            'question_id' => '1',
            'user_id' => '1',
            'attempt_id' => '1',
        ];

        $this->json('POST', '/answer', $payload)
            ->assertStatus(201)
            ->assertJson([ 
                'answer' => 'Lorem', 
                'question_id' => '1',
                'attempt_id' => '1',
                'user_id' => '1'
            ]);
    }

    public function testsAnswersAreUpdatedCorrectly()
    {
        $answer = factory(Answer::class)->create([
            'answer' => 'Lorem',
            'question_id' => '2',
            'user_id' => '2',
            'attempt_id' => '2',
        ]);

        $payload = [
            'answer_id' => '1',
            'answer' => 'Ipsum',
        ];

        $response = $this->json('PUT', '/answer', $payload)
            ->assertStatus(200)
            ->assertJson([ 
                'id' => '1', 
                'answer' => 'Ipsum',
                'question_id' => '2',
                'user_id' => '2',
                'attempt_id' => '2'
            ]);
    }


}
