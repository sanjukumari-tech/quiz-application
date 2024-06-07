import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
// import './styles.css';

const Result = ({ restartQuiz }) => {
  const score = useSelector(state => state.quiz.score);
  return (
    <div className="container result">
      <h2>Your Score: {score}</h2>
      <Button className="result-button" onClick={restartQuiz}>Restart Quiz</Button>
    </div>
  );
};

export default Result;
