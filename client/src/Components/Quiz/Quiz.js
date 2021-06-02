import React, { useState } from 'react';
import Jumbotron from "../../Components/Jumbotron";
import { Link, withRouter } from 'react-router-dom';
import './Quiz.css'


export default function StartQuiz() {
    const questions = [
        {
            questionText: 'Which animal do you like the most?',
            answerOptions: [
                { answerText: 'Hippopotamus', musicType: 'rock' },
                { answerText: 'Cat', musicType: 'pop' },
                { answerText: 'Wolf', musicType: 'hiphop' },
                { answerText: 'Kangaroo', musicType: 'country' },
            ],
        },
        {
            questionText: 'Which activity would you rather do?',
            answerOptions: [
                { answerText: 'Wine tasting', musicType: 'pop' },
                { answerText: 'Weapon Forging', musicType: 'rock' },
                { answerText: 'Working out', musicType: 'hiphop' },
                { answerText: 'Clubbing', musicType: 'country' },
            ],
        },
        {
            questionText: 'Which instrument are you most interested in?',
            answerOptions: [
                { answerText: 'I rather sing than play an instrument', musicType: 'pop' },
                { answerText: 'Drums', musicType: 'rock' },
                { answerText: 'Piano', musicType: 'hiphop' },
                { answerText: 'Didgeridoo', musicType: 'country' },
            ],

        },
        {
            questionText: 'Which word best describes you?',
            answerOptions: [
                { answerText: 'Outgoing', musicType: 'pop' },
                { answerText: 'Persistent', musicType: 'rock' },
                { answerText: 'Confident', musicType: 'hiphop' },
                { answerText: 'Creative', musicType: 'country' },

            ],
        },
        {
            questionText: 'Which country would you like to visit?',
            answerOptions: [
                { answerText: 'South Korea', musicType: 'pop' },
                { answerText: 'United Kingdom', musicType: 'rock' },
                { answerText: 'Mexico', musicType: 'hiphop' },
                { answerText: 'Germany', musicType: 'country' },

            ],
        },

    ];
    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [developerState, setDeveloperState] = useState({
        poplevel: 0,
        rocklevel: 0,
        hiphoplevel: 0,
        countrylevel: 0
    });
    
    const [showScore, SetShowScore] = useState(false)



    const [winner, SetWinner] = useState("")

    const handleAnswerButtonClick = (musicType,) => {

    console.log(developerState.poplevel);
      

      
    const handleAnswerButtonClick = (musicType,) => {
          
      switch(musicType){
          case 'pop':

            setDeveloperState({...developerState,poplevel: developerState.poplevel + 1,});
            break;

            case 'rock':


                SetScore({ ...score, rock: score.rock + 1550, })

                setDeveloperState({...developerState,rocklevel: developerState.rocklevel + 1,});


                break;

            case 'hiphop':


                SetScore({ ...score, hiphop: score.hiphop + 1600, })
                break;

                setDeveloperState({...developerState,rocklevel: developerState.hiphoplevel + 1900,});
                    break;

            case 'country':

                setDeveloperState({...developerState,rocklevel: developerState.country + 1650,});
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

            SetShowScore(true)
        }}




    return (
        <div className="bigcontainerQuiz">
      <iframe src='https://my.spline.design/quizpage-e26d19a63fcfd20fc847893571ab4270/' frameborder='0' width='100%' height='100%'></iframe>
        <div className ="contentcontainerQuiz">
        <div className="Quiz"> 

            {showScore ? (
                <div>
                <h3 className='score-results d-flex justify-content-center'> Here is your playlist suggestion!  {} </h3>
                <div className="text-center mt-5">
                <Link to="/dashboard" className="text-success">
                  <button className="btn btn-md btn-warning mt-1">Back to Dashboard</button>
                </Link>
                </div>
                </div>
            ) : (
                <>

                <div className='container'>
                    <div className='question-section d-flex justify-content-center'>
                        <h3>Dalila wants to know...</h3>
                    </div>
                    <h4 className='question-text d-flex justify-content-center'>{questions[currentQuestion].questionText}</h4>
                    <div className='answer-section d-flex justify-content-center'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className="btn btn-md btn-success" onClick={()=> handleAnswerButtonClick(answerOption.musicType)} >{answerOption.answerText}</button>
                        ))}
                    </div>
                    {/* <div>Pop Level: {developerState.poplevel}</div>
                    <div>Rock Level: {developerState.rocklevel}</div>
                    <div>Hip-hop Level: {developerState.hiphoplevel}</div>
                    <div>Country Level: {developerState.countrylevel}</div> */}
                </div>
                <div className="text-center mt-5">
                        <Link to="/dashboard" className="text-success">
                          <button className="btn btn-md btn-warning mt-1">Back to Dashboard</button>
                        </Link>
               </div>

                </>
            )}

         
        </div>
        </div>
        </div>
    );

};