import React, {createContext, useContext, useState} from 'react';

const QuizContext = createContext();

function Provider({children}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = {
        SPORT_EASY: [
            {
                id: 1,
                question: 'Which sport is associated with Wimbledon?',
                answers: [
                    {answer: 'Golf', trueAnswer: false},
                    {answer: 'Soccer', trueAnswer: false},
                    {answer: 'Tennis', trueAnswer: true},
                    {answer: 'Basketball', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'In which country did the sport of basketball originate?',
                answers: [
                    {answer: 'Brazil', trueAnswer: false},
                    {answer: 'Spain', trueAnswer: false},
                    {answer: 'China', trueAnswer: false},
                    {answer: 'United States', trueAnswer: true},
                ],
            },
            {
                id: 3,
                question: "Which athlete is known as 'The Greatest' in boxing?",
                answers: [
                    {answer: 'Mike Tyson', trueAnswer: false},
                    {answer: 'Muhammad Ali', trueAnswer: true},
                    {answer: 'Floyd Mayweather Jr.', trueAnswer: false},
                    {answer: 'Manny Pacquiao', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question: 'How many players are on a soccer team?',
                answers: [
                    {answer: '11', trueAnswer: true},
                    {answer: '10', trueAnswer: false},
                    {answer: '9', trueAnswer: false},
                    {answer: '12', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'Which country has won the most Olympic gold medals in the history of the Summer Olympics?',
                answers: [
                    {answer: 'United States', trueAnswer: true},
                    {answer: 'China', trueAnswer: false},
                    {answer: 'Russia', trueAnswer: false},
                    {answer: 'Germany', trueAnswer: false},
                ],
            },
        ],
        SPORT_MEDIUM: [
            {
                id: 1,
                question: "Which player has won the most Grand Slam titles in men's tennis?",
                answers: [
                    {answer: 'Roger Federer', trueAnswer: false},
                    {answer: 'Rafael Nadal ', trueAnswer: false},
                    {answer: 'Novak Djokovic', trueAnswer: true},
                    {answer: 'Pete Sampras', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'Who holds the record for the most home runs in Major League Baseball (MLB) history?   ',
                answers: [
                    {answer: 'Babe Ruth', trueAnswer: false},
                    {answer: 'Barry Bonds', trueAnswer: true},
                    {answer: 'Hank Aaron', trueAnswer: false},
                    {answer: 'Alex Rodriguez', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question: 'Which country has won the FIFA World Cup the most times?',
                answers: [
                    {answer: 'Germany', trueAnswer: false},
                    {answer: 'Italy', trueAnswer: false},
                    {answer: 'Argentina', trueAnswer: false},
                    {answer: 'Brazil', trueAnswer: true},
                ],
            },
            {
                id: 4,
                question: 'In which sport would you find the term "slam dunk"?',
                answers: [
                    {answer: 'Volleyball', trueAnswer: false},
                    {answer: 'Basketball', trueAnswer: true},
                    {answer: 'Tennis', trueAnswer: false},
                    {answer: 'Baseball', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question:
                    'Which athlete has won the most Olympic gold medals in the history of the Summer Olympics?   ',
                answers: [
                    {answer: 'Usain Bolt', trueAnswer: false},
                    {answer: 'Carl Lewis', trueAnswer: false},
                    {answer: 'Michael Phelps', trueAnswer: true},
                    {answer: 'Simone Biles', trueAnswer: false},
                ],
            },
        ],
        SPORT_HARD: [
            {
                id: 1,
                question: "Which country has won the most FIFA Women's World Cup titles?",
                answers: [
                    {answer: 'Germany ', trueAnswer: false},
                    {answer: 'Brazil', trueAnswer: false},
                    {answer: 'Norway', trueAnswer: false},
                    {answer: 'United States', trueAnswer: true},
                ],
            },
            {
                id: 2,
                question:
                    'Who is the all-time leading scorer in the history of the National Basketball Association (NBA)?',
                answers: [
                    {answer: 'LeBron James ', trueAnswer: false},
                    {answer: 'Kobe Bryant', trueAnswer: false},
                    {answer: 'Kareem Abdul-Jabbar', trueAnswer: true},
                    {answer: 'Michael Jordan', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question: 'In which year did the United States boycott the Summer Olympics held in Moscow?',
                answers: [
                    {answer: '1976', trueAnswer: false},
                    {answer: '1980', trueAnswer: true},
                    {answer: '1984', trueAnswer: false},
                    {answer: '1992', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question: 'Which country has won the most Rugby World Cup titles?',
                answers: [
                    {answer: 'England', trueAnswer: false},
                    {answer: 'South Africa', trueAnswer: false},
                    {answer: 'New Zealand', trueAnswer: true},
                    {answer: 'Australia', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'Who is the most decorated Olympian of all time in terms of total medals won?',
                answers: [
                    {answer: 'Usain Bolt', trueAnswer: false},
                    {answer: 'Simone Biles', trueAnswer: false},
                    {answer: 'Carl Lewis', trueAnswer: false},
                    {answer: 'Michael Phelps', trueAnswer: true},
                ],
            },
        ],
        GEOGRAPHY_EASY: [
            {
                id: 1,
                question: 'What is the capital city of France?',
                answers: [
                    {answer: 'Paris', trueAnswer: true},
                    {answer: 'London', trueAnswer: false},
                    {answer: 'Berlin', trueAnswer: false},
                    {answer: 'Rome', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'Which continent is known as the "Land Down Under"?',
                answers: [
                    {answer: 'Australia', trueAnswer: true},
                    {answer: 'South Africa', trueAnswer: false},
                    {answer: 'Asia', trueAnswer: false},
                    {answer: 'Africa', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question: 'What is the longest river in the world?',
                answers: [
                    {answer: 'Amazon River', trueAnswer: false},
                    {answer: 'Yangtze River', trueAnswer: false},
                    {answer: 'Mississippi River', trueAnswer: false},
                    {answer: 'Nile River', trueAnswer: true},
                ],
            },
            {
                id: 4,
                question: 'Which country is famous for the Great Wall?',
                answers: [
                    {answer: 'India', trueAnswer: false},
                    {answer: 'Russia', trueAnswer: false},
                    {answer: 'China', trueAnswer: true},
                    {answer: 'Egypt', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'What is the largest desert in the world?',
                answers: [
                    {answer: 'Sahara Desert', trueAnswer: false},
                    {answer: 'Antarctica', trueAnswer: true},
                    {answer: 'Gobi Desert', trueAnswer: false},
                    {answer: 'Kalahari Desert', trueAnswer: false},
                ],
            },
        ],
        GEOGRAPHY_MEDIUM: [
            {
                id: 1,
                question: 'Which country is the smallest in the world by land area?',
                answers: [
                    {answer: 'Vatican City', trueAnswer: true},
                    {answer: 'Monaco', trueAnswer: false},
                    {answer: 'Liechtenstein', trueAnswer: false},
                    {answer: 'San Marino', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'Mount Everest, the highest peak in the world, is located in which mountain range?',
                answers: [
                    {answer: 'Andes', trueAnswer: false},
                    {answer: 'Alps', trueAnswer: false},
                    {answer: 'Himalayas', trueAnswer: true},
                    {answer: 'Rocky Mountains', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question: 'Which country is known as the "Land of the Rising Sun"?',
                answers: [
                    {answer: 'Japan', trueAnswer: true},
                    {answer: 'China', trueAnswer: false},
                    {answer: 'South Korea', trueAnswer: false},
                    {answer: 'Thailand', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question: 'Which canal connects the Mediterranean Sea and the Red Sea?',
                answers: [
                    {answer: 'Suez Canal', trueAnswer: true},
                    {answer: 'Panama Canal', trueAnswer: false},
                    {answer: 'Corinth Canal', trueAnswer: false},
                    {answer: 'Kiel Canal', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'Which country is located on the Iberian Peninsula?',
                answers: [
                    {answer: 'Italy', trueAnswer: false},
                    {answer: 'Spain', trueAnswer: true},
                    {answer: 'Greece', trueAnswer: false},
                    {answer: 'Portugal', trueAnswer: false},
                ],
            },
        ],
        GEOGRAPHY_HARD: [
            {
                id: 1,
                question: 'Which country has the largest population in the world?',
                answers: [
                    {answer: 'India', trueAnswer: false},
                    {answer: 'United States', trueAnswer: false},
                    {answer: 'China', trueAnswer: true},
                    {answer: 'Russia', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question:
                    "The Great Barrier Reef, the world's largest coral reef system, is located off the coast of which country?",
                answers: [
                    {answer: 'Brazil', trueAnswer: false},
                    {answer: 'Indonesia', trueAnswer: false},
                    {answer: 'Australia', trueAnswer: true},
                    {answer: 'Mexico', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question: 'Which country is both an island and a continent?',
                answers: [
                    {answer: 'New Zealand', trueAnswer: false},
                    {answer: 'Madagascar', trueAnswer: false},
                    {answer: 'Greenland', trueAnswer: false},
                    {answer: 'Australia', trueAnswer: true},
                ],
            },
            {
                id: 4,
                question: 'The Strait of Gibraltar separates which two continents?',
                answers: [
                    {answer: 'Europe and Africa', trueAnswer: true},
                    {answer: 'Asia and Europe', trueAnswer: false},
                    {answer: 'Africa and Asia', trueAnswer: false},
                    {answer: 'North America and South America', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'What is the capital city of Canada?',
                answers: [
                    {answer: 'Toronto', trueAnswer: false},
                    {answer: 'Ottawa', trueAnswer: true},
                    {answer: 'Vancouver', trueAnswer: false},
                    {answer: 'Montreal', trueAnswer: false},
                ],
            },
        ],
        HISTORY_EASY: [
            {
                id: 1,
                question: 'Who was the first president of the United States?',
                answers: [
                    {answer: 'Abraham Lincoln', trueAnswer: false},
                    {answer: 'Thomas Jefferson', trueAnswer: false},
                    {answer: 'George Washington', trueAnswer: true},
                    {answer: 'Benjamin Franklin', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'In which year did World War II end?',
                answers: [
                    {answer: '1918', trueAnswer: false},
                    {answer: '1939', trueAnswer: false},
                    {answer: '1950', trueAnswer: false},
                    {answer: '1945', trueAnswer: true},
                ],
            },
            {
                id: 3,
                question: 'Which ancient civilization built the Great Pyramids of Giza?',
                answers: [
                    {answer: 'Greeks', trueAnswer: false},
                    {answer: 'Romans', trueAnswer: false},
                    {answer: 'Egyptians', trueAnswer: true},
                    {answer: 'Mayans', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question: 'The Industrial Revolution began in which country?',
                answers: [
                    {answer: 'France', trueAnswer: false},
                    {answer: 'Germany', trueAnswer: false},
                    {answer: 'United States', trueAnswer: false},
                    {answer: 'England', trueAnswer: true},
                ],
            },
            {
                id: 5,
                question: 'Who wrote the play Romeo and Juliet?',
                answers: [
                    {answer: 'William Shakespeare', trueAnswer: true},
                    {answer: 'Oscar Wilde', trueAnswer: false},
                    {answer: 'Jane Austen', trueAnswer: false},
                    {answer: 'Charles Dickens', trueAnswer: false},
                ],
            },
        ],
        HISTORY_MEDIUM: [
            {
                id: 1,
                question: 'The French Revolution took place in which century?',
                answers: [
                    {answer: '19th century', trueAnswer: false},
                    {answer: '18th century', trueAnswer: true},
                    {answer: '17th century', trueAnswer: false},
                    {answer: '20th century', trueAnswer: false},
                ],
            },
            {
                id: 2,
                question: 'Which famous scientist developed the theory of general relativity?',
                answers: [
                    {answer: 'Isaac Newton', trueAnswer: false},
                    {answer: 'Galileo Galilei', trueAnswer: false},
                    {answer: 'Nikola Tesla', trueAnswer: false},
                    {answer: 'Albert Einstein', trueAnswer: true},
                ],
            },
            {
                id: 3,
                question: 'Who was the first female Prime Minister of the United Kingdom?',
                answers: [
                    {answer: 'Angela Merkel', trueAnswer: false},
                    {answer: 'Indira Gandhi', trueAnswer: false},
                    {answer: 'Margaret Thatcher', trueAnswer: true},
                    {answer: 'Golda Meir', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question:
                    'What was the name of the ship on which Charles Darwin sailed during his voyage of discovery?',
                answers: [
                    {answer: 'HMS Beagle', trueAnswer: true},
                    {answer: 'HMS Beagle', trueAnswer: false},
                    {answer: 'HMS Discovery', trueAnswer: false},
                    {answer: 'HMS Endeavour', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'The Treaty of Versailles was signed after which war?',
                answers: [
                    {answer: 'World War I', trueAnswer: true},
                    {answer: 'Korean War', trueAnswer: false},
                    {answer: 'Vietnam War', trueAnswer: false},
                    {answer: 'Cold War', trueAnswer: false},
                ],
            },
        ],
        HISTORY_HARD: [
            {
                id: 1,
                question: 'The Battle of Waterloo, a decisive battle in European history, was fought in which year?',
                answers: [
                    {answer: '1776', trueAnswer: false},
                    {answer: '1914', trueAnswer: false},
                    {answer: '1832', trueAnswer: false},
                    {answer: '1815', trueAnswer: true},
                ],
            },
            {
                id: 2,
                question: 'Who is credited with painting the ceiling of the Sistine Chapel?',
                answers: [
                    {answer: 'Leonardo da Vinci', trueAnswer: false},
                    {answer: 'Vincent van Gogh', trueAnswer: false},
                    {answer: 'Michelangelo', trueAnswer: true},
                    {answer: 'Pablo Picasso', trueAnswer: false},
                ],
            },
            {
                id: 3,
                question:
                    'What was the name of the ship that Christopher Columbus sailed on his first voyage to the Americas?',
                answers: [
                    {answer: 'Nina', trueAnswer: false},
                    {answer: 'Santa Maria', trueAnswer: true},
                    {answer: 'Pinta', trueAnswer: false},
                    {answer: 'Mayflower', trueAnswer: false},
                ],
            },
            {
                id: 4,
                question: 'The Russian Revolution of 1917 led to the establishment of which government? ',
                answers: [
                    {answer: 'Nazi Germany', trueAnswer: false},
                    {answer: 'Ottoman Empire', trueAnswer: false},
                    {answer: 'Soviet Union', trueAnswer: true},
                    {answer: 'British Empire', trueAnswer: false},
                ],
            },
            {
                id: 5,
                question: 'The signing of the Declaration of Independence occurred in which city?',
                answers: [
                    {answer: 'Boston', trueAnswer: false},
                    {answer: 'New York', trueAnswer: false},
                    {answer: 'Washington', trueAnswer: false},
                    {answer: 'Philadelphia', trueAnswer: true},
                ],
            },
        ],
    };

    const sharedValuesAndMethods = {
        questions,
        currentQuestion,
        setCurrentQuestion,
    };

    return <QuizContext.Provider value={sharedValuesAndMethods}>{children}</QuizContext.Provider>;
}

const useQuizContext = () => useContext(QuizContext);
export {Provider, useQuizContext};
export default QuizContext;
