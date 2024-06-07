import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScore } from '../redux/actions/quizActions';
import { Button, Box, Text } from '@chakra-ui/react';
// import './styles.css';

const Quiz = ({ finishQuiz }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [score, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  const handleAnswer = (answer) => {
    const correct = answer === currentQuestion.correct_answer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setQuizScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        dispatch(setScore(score));
        finishQuiz();
      }
    }, 1000);
  };

  const getButtonClass = (answer) => {
    if (!selectedAnswer) return '';
    if (answer === currentQuestion.correct_answer) return 'correct';
    if (answer === selectedAnswer) return 'wrong';
    return '';
  };

  return (
    <Box className="container quiz">
      <Text className="question" fontSize="2xl" mb="4">{currentQuestion.question}</Text>
      <div className="answers">
        {currentQuestion.type === 'multiple' ? (
          currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer)
            .sort(() => Math.random() - 0.5)
            .map(answer => (
              <Button
                key={answer}
                onClick={() => handleAnswer(answer)}
                className={getButtonClass(answer)}
                mb="2"
                isDisabled={!!selectedAnswer}
              >
                {answer}
              </Button>
            ))
        ) : (
          <>
            <Button
              onClick={() => handleAnswer('True')}
              className={getButtonClass('True')}
              mb="2"
              isDisabled={!!selectedAnswer}
            >
              True
            </Button>
            <Button
              onClick={() => handleAnswer('False')}
              className={getButtonClass('False')}
              mb="2"
              isDisabled={!!selectedAnswer}
            >
              False
            </Button>
          </>
        )}
      </div>
    </Box>
  );
};

export default Quiz;
