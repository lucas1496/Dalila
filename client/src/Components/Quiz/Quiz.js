import React, { useState } from 'react';
import './Quiz.css'


export default function StartQuiz() {
    const questions = [
        {
            questionText: 'Which animal do you like the most?',
            answerOptions: [
                { answerText: 'Hippopotamus', musicType: 'rock' },
                { answerText: 'Cat', musicType: 'pop' },
                { answerText: 'Wolf', musicTypet: 'hiphop' },
                { answerText: 'kangaroo', musicType: 'electronic' },
            ],
        },
        {
            questionText: 'Which activity would you rather do?',
            answerOptions: [
                { answerText: 'Wine tasting', musicType: 'pop' },
                { answerText: 'Weapon Forging', musicType: 'rock' },
                { answerText: 'Working out', musicType: 'hiphop' },
                { answerText: 'Clubbing', musicType: 'electronic' },
            ],
        },
        {
            questionText: 'Which instrument are you most interested in?',
            answerOptions: [
                { answerText: 'I rather sing than play an instrument', musicType: 'pop' },
                { answerText: 'Drums', musicType: 'rock' },
                { answerText: 'Piano', musicType: 'hiphop' },
                { answerText: 'Didgeridoo', musicType: 'electronic' },
            ],

        },
        {
            questionText: 'Which word best describes you?',
            answerOptions: [
                { answerText: 'Outgoing', musicType: 'pop' },
                { answerText: 'Persistent', musicType: 'rock' },
                { answerText: 'Confident', musicType: 'hiphop' },
                { answerText: 'Creative', musicType: 'electronic' },
            ],
        },
        {
            questionText: 'Which country would you like to visit?',
            answerOptions: [
                { answerText: 'South Korea', musicType: 'pop' },
                { answerText: 'United Kingdom', musicType: 'rock' },
                { answerText: 'Mexico', musicType: 'hiphop' },
                { answerText: 'Germany', musicType: 'electronic' },
            ],
        },

    ];
    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [showScore, SetShowScore] = useState(false)

    const [score, SetScore] = useState({
        pop: 0,
        hiphop: 0,
        rock: 0,
        electronic: 0
    })

    const [winner, SetWinner] = useState("")

    const handleAnswerButtonClick = (musicType,) => {

        switch (musicType) {
            case 'pop':

                SetScore({ ...score, pop: score.pop + 1500, })
                break;

            case 'rock':

                SetScore({ ...score, rock: score.rock + 1550, })
                break;

            case 'hiphop':

                SetScore({ ...score, hiphop: score.hiphop + 1600, })
                break;

            case 'electronic':

                SetScore({ ...score, electronic: score.electronic + 1650, })
                break;

        }


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            SetCurrentQuestion(nextQuestion);
        } else {
            // SetShowScore(true);
            const highestScore = Object.entries(score);
            console.log(highestScore)
            let biggest = 0;
            let categoryWinner = null;
            for (let i = 0; i < highestScore.length; i++) {
                if (highestScore[i][1] > biggest) {
                    biggest = highestScore[i][1];

                    categoryWinner = highestScore[i][0];
                    console.log(categoryWinner);

                    SetWinner(categoryWinner);

                }
            }
            SetShowScore(true);



        }

    }
    return (
        <div className="bigcontainerQuiz">
            <iframe src='https://my.spline.design/quizpage-e26d19a63fcfd20fc847893571ab4270/' frameborder='0' width='100%' height='100%'></iframe>
            <div className="contentcontainerQuiz">
                <div className="Quiz">
                    {showScore ? (
                        <div className='score-results d-flex justify-content-center'> You should listen to {winner} music, here is a playlist for you</div>
                    ) : (
                        <>
                            <div className='container'>
                                <div className='question-section d-flex justify-content-center'>
                                    <div>Dalila wants to know...</div>
                                </div>
                                <div className='question-text d-flex justify-content-center'>{questions[currentQuestion].questionText}</div>
                                <div className='answer-section d-flex justify-content-center'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button onClick={() => handleAnswerButtonClick(answerOption.musicType)} >{answerOption.answerText}</button>
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