# laravelAssignment
Simple code assignment for AbleTo

>Think of this exercise as if someone goes through a set of questions day after day that he/she needs to answer and then sees the results. Once users log in, have them answer a set of "behavioral" questions (how they feel, what they did today, what they had for breakfast - 3-4 questions is fine) and then please display their answers.

This requirement is met by the questionnaire view, where a user gets all available questions. There, once a user answers a question, it's added to the answered list.
Both answered and unanswered questions are in this view, and a user can choose to edit their answers if they please.

>The answers to the questions should be multiple-choice / structured format (not free form where you can type in your answer). This way you can build a report or some dashboard around answer's history.

This requirement is met in that answers are all multiple choice, and once a user has answered a question, they can click the View Answer History button to check what other questionnaires they responded to the same way.

>For example, the question could be asked "what did you eat today for breakfast ?" with answers "eggs, cereal, toast" and you could select a different answer each "day" (for the purposes of this exercise a concept of each "day" could mean each "try" ). 

This requirement is met in the questionnaire system I've implemented, where you can create a new questionnaire and answer the same questions however many times you please.

>The exercise doesn't have to have many models or controllers -  what's important is that the code is tested / documented / we can run it (so dependencies are clearly defined and well explained). 

The models are as follows: Users, Questions, Attempts (Questionnaires), and Answers.
The routes(not counting API) are all handled on the front-end with react-router, in the spirit of a SPA.
There are two seperate routing mechanism in routes.js, one for logged in users and one for logged out users.

The API is quite self explanatory, as it is RESTFUL, however, there is one route (/answerHistory/...) which I wish I wrote more restfully, but it did not lend itself that way due to how I set up my models. IE, to get the questionnaires for which a user answered a specific question in a specific way, the route needs /user_id/answer/question_id.

The frontend views are reasonably component based for the scale of this project, the only slightly confusing implementation could be Question.js, which chooses the correct component for each question and passes it the right thunk. For example, the edit view uses the same component as the unanswered question view, but Question.js passes it the right thunk for post v put requests. 

An operation found in Questionnaire.js that could be slightly confusing is the filtering performed to seperate Answered and Unanswered questions in the same view. The operation is O(n^2) and basically just checks which questions have an answer with that ID and which do not then filter accordingly.

Information in this project is called only as necessary. For example, the answers for a given questionnaire are only requested and stored once that questionnaire is viewed, and only one set of answers is stored at a time. 

The backend is supported entirely by Laravel, and the front end necessitated ordinary dependencies such as redux for storage, axios for API requests, and React in general. There is also a redux middleware that shows what's going on in Redux that was a great development tool, which I decided to keep for you guys to easily see what's going on there through dev tools.

However, I do wish I had another dependency. That being laravel passport, which I did not have the time to figure out and implement.

Some major challenges of this assignment were working in a new framework. Especially since I have never used PHP or a convention over configuration framework before. Laracasts was incredibly useful, despite the videos that I found being centered around using blade, which did not need API to work around in. I found the process of learning Laravel very enjoyable,
and found that convention was a great safeguard. 

Unfortunately, I ran into unexpected deployment issues and a Mixed Content bug that ate up the majority of this last day working on the project. This was a hard lesson in deployment not being a last minute venture. New issues can pop up in deployment, and I suffered for that mistake in that what I thought was going to be a day spent learning how to test in Laravel and writing those tests was spent on debugging.

Though I realize that I will most likely still be penalized for the lack of tests as of right now, I will write some tests tomorrow for the sake of my own learning experience.

Thank you for the opportunity.


