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
                { answerText: 'Kangaroo', musicType: 'electronic' },
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

    const popList = [
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0b1hHYQtJjp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTwnEm1IYyoj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbYM3nMM0oPk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWjGdmeTyeJ6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZQaaqNMbbXa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ]
    let popSelection = popList[Math.floor(Math.random()* popList.length)];

    const rockList= [
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1spT6G94GFC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX82Zzp6AKx64" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX68H8ZujdnN7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWGFQLoP9qlv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ]
    let rockSelection = rockList[Math.floor(Math.random()* rockList.length)];

    const hiphopList= [
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX186v583rmzp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6xZZEgC9Ubl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTJzNR1J5ygQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5hR0J49CmXC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWIfrT204w7E" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ]
    let hiphopSelection = hiphopList[Math.floor(Math.random()* hiphopList.length)];

    const electronicList = [
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0r3x8OtiwEM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdgz8ZB7c2CP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1T3AaSrgy9r" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1jlzMTQ2PY5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX00RdhV73Dbe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
    ]
    let electronicSelection = electronicList[Math.floor(Math.random()* electronicList .length)];


    const [selectedPlaylist, SetSelectedPlaylist] = useState('')

    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [showScore, SetShowScore] = useState(false)

    const [score, SetScore] = useState({
        pop: 0,
        hiphop: 0,
        rock: 0,
        electronic: 0
    })


    const [winner, SetWinner] = useState("")
    // if (winner === 'pop') {
    //     SetSelectedPlaylist(popSelection)
    // } if (winner === 'hiphop') {
    //     SetSelectedPlaylist(hiphopSelection)
    // } if (winner === 'rock') {
    //     SetSelectedPlaylist(rockSelection)
    // } else{
    //     SetSelectedPlaylist(electronicSelection )
    // } 

    const handleAnswerButtonClick = (musicType) => {

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

                    SetWinner(categoryWinner);
                }
            }
            SetShowScore(true);
        }

    }
    

    return (
        <div className="bigcontainerQuiz">
      <iframe src='https://my.spline.design/quizpage-e26d19a63fcfd20fc847893571ab4270/' frameBorder='0' width='100%' height='100%'></iframe>
        <div className ="contentcontainerQuiz">
        <div className="Quiz"> 

            {showScore ? (
                <div>
                <h3 className='score-results d-flex justify-content-center'>You should listen to {winner} music, here is a playlist for you! </h3>
                <div className='d-flex justify-content-center'> {selectedPlaylist} </div>
                <div className="text-center mt-5">
                <Link to="/dashboard" className="text-success">
                  <button className="btn btn-md btn-warning mt-1 big-button-1">Back to Dashboard</button>
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
                            <button className="btn btn-md btn-dark big-button" onClick={()=> handleAnswerButtonClick(answerOption.musicType)} >{answerOption.answerText}</button>
                        ))}
                    </div>
                    {/* <div>Pop Level: {developerState.poplevel}</div>
                    <div>Rock Level: {developerState.rocklevel}</div>
                    <div>Hip-hop Level: {developerState.hiphoplevel}</div>
                    <div>Country Level: {developerState.countrylevel}</div> */}
                </div>
                <div className="text-center mt-5">
                        <Link to="/dashboard" className="text-success">
                          <button className="btn btn-md btn-warning mt-1 big-button-1">Back to Dashboard</button>
                        </Link>
               </div>

                        </>
                    )}


                </div>
            </div>
        </div>
    );

};