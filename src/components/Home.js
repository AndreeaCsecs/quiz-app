import React from 'react';
import logo from '../imgs/logo.svg';
import sport from '../imgs/category-sport.svg';
import geography from '../imgs/category-geography.svg';
import history from '../imgs/category-history.svg';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-title">
                <img src={logo} alt={'logo'} />
                <h1>Pick your category 👇</h1>
            </div>

            <div className="box-container">
                <h1>Sports</h1>
            </div>
            <div className="box-container">
                {/*holding all boxes start*/}
                <div className="box">
                    <img src={sport} alt={'sport'} />
                    <div className="box-title">
                        <span>5 question | Easy difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/SPORT_EASY">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={sport} alt={'sport'} />
                    <div className="box-title">
                        <span>5 question | Medium difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/SPORT_MEDIUM">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={sport} alt={'sport'} />
                    <div className="box-title">
                        <span>5 question | Hard difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/SPORT_HARD">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                {/*holding all boxes end*/}
            </div>
            <div className="box-container">
                <h1>Geography</h1>
            </div>
            <div className="box-container">
                {/*holding all boxes start*/}
                <div className="box">
                    <img src={geography} alt={'geography'} />
                    <div className="box-title">
                        <span>5 question | Easy difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/GEOGRAPHY_EASY">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={geography} alt={'geography'} />
                    <div className="box-title">
                        <span>5 question | Medium difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/GEOGRAPHY_MEDIUM">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={geography} alt={'geography'} />
                    <div className="box-title">
                        <span>5 question | Hard difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/GEOGRAPHY_HARD">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                {/*holding all boxes end*/}
            </div>
            <div className="box-container">
                <h1>History</h1>
            </div>
            <div className="box-container">
                {/*holding all boxes start*/}
                <div className="box">
                    <img src={history} alt={'history'} />
                    <div className="box-title">
                        <span>5 question | Easy difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/HISTORY_EASY">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={history} alt={'history'} />
                    <div className="box-title">
                        <span>5 question | Medium difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/HISTORY_MEDIUM">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                <div className="box">
                    <img src={history} alt={'history'} />
                    <div className="box-title">
                        <span>5 question | Hard difficulty</span>
                    </div>
                    <Link className="box-link" to="/quiz/HISTORY_HARD">
                        <span>Start Quiz</span>
                    </Link>
                </div>
                {/*holding all boxes end*/}
            </div>
        </div>
    );
}
