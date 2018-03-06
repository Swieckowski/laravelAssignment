<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Question;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;


class QuestionTest extends TestCase
{

    public function testQuestionsAreListedCorrectly()
    {
        factory(Question::class)->create([
            'question' => 'What is the best thing ever?',
            'a' => 'Writing tests',
            'b' => 'Running tests',
            'c' => 'See the results of your tests',
            'd' => 'Test driven development',
        ]);

        factory(Question::class)->create([
            'question' => 'What is the worst thing ever?',
            'a' => 'Not writing tests',
            'b' => 'Not running tests',
            'c' => 'Not seeing the results of your tests',
            'd' => 'Not using test driven development',
        ]);

        $response = $this->json('GET', '/questions', [])
            ->assertStatus(200)
            ->assertJson([
                [
                    'question' => 'What is the best thing ever?',
                    'a' => 'Writing tests',
                    'b' => 'Running tests',
                    'c' => 'See the results of your tests',
                    'd' => 'Test driven development',
                ],
                [
                    'question' => 'What is the worst thing ever?',
                    'a' => 'Not writing tests',
                    'b' => 'Not running tests',
                    'c' => 'Not seeing the results of your tests',
                    'd' => 'Not using test driven development',
                ]
            ])
            ->assertJsonStructure([
                '*' => ['id', 'question', 'a', 'b', 'c', 'd'],
            ]);
    }

}
