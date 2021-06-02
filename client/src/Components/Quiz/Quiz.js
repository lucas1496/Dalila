import React, { useState } from 'react';
import './Quiz.css'


export default function StartQuiz() {
    const questions = [
        {
            questionText: 'Which animal do you like the most?',
            answerOptions: [
                { answerText: 'Hippopotamus', isCorrect: false },
                { answerText: 'Cat', isCorrect: false },
                { answerText: 'Wolf', isCorrect: false },
                { answerText: 'Kangaroo', isCorrect: true },
            ],
        },
        {
            questionText: 'Which activity would you rather do?',
            answerOptions: [
                { answerText: 'Wine tasting', isCorrect: false },
                { answerText: 'Weapon Forging', isCorrect: false },
                { answerText: 'Working out', isCorrect: false },
                { answerText: 'Clubbing', isCorrect: true },
            ],
        },
        {
            questionText: 'Which instrument are you most interested in?',
            answerOptions: [
                { answerText: 'I rather sing than play an instrument', isCorrect: false },
                { answerText: 'Drums', isCorrect: false },
                { answerText: 'Piano', isCorrect: false },
                { answerText: 'Didgeridoo', isCorrect: true },
            ],

        },
        {
            questionText: 'Which word best describes you?',
            answerOptions: [
                { answerText: 'Outgoing', isCorrect: false },
                { answerText: 'Persistent', isCorrect: false },
                { answerText: 'Confident', isCorrect: false },
                { answerText: 'Creative', isCorrect: true },
            ],
        },
        {
            questionText: 'Which country would you like to visit?',
            answerOptions: [
                { answerText: 'South Korea', isCorrect: false },
                { answerText: 'United Kingdom', isCorrect: false },
                { answerText: 'Mexico', isCorrect: false },
                { answerText: 'Germany', isCorrect: true },
            ],
        },

    ];
    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [showScore, SetShowScore] = useState(false)

    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            SetCurrentQuestion(nextQuestion);
        } else {
            SetShowScore(true)
        }

    }

    return (
        <div className="bigcontainerQuiz">
      <iframe src='https://my.spline.design/quizpage-e26d19a63fcfd20fc847893571ab4270/' frameborder='0' width='100%' height='100%'></iframe>
        <div className ="contentcontainerQuiz">
        <div className="Quiz"> 
            {showScore ? (
                <div className='score-results'> here goes your playlist suggestion </div>
            ) : (
                <>
                <div className='container'>
                    <div className='question-section d-flex justify-content-center'>
                        <div>Dalila wants to know...</div>
                    </div>
                    <div className='question-text d-flex justify-content-center'>{questions[currentQuestion].questionText}</div>
                    <div className='answer-section d-flex justify-content-center'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={handleAnswerButtonClick} >{answerOption.answerText}</button>
                        ))}
                    </div>
                </div>

                </>
            )}


        </div>
        </div>
        </div>
    );

};