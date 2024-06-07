
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Settings from "./components/Settings";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const questions = useSelector(state => state.quiz.questions);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    setQuizStarted(false);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
  };

  

  return (
       <>
      
    <Container centerContent>
      <Navbar/>
     
      {!quizStarted && !quizFinished && <Settings startQuiz={startQuiz} />}
      {quizStarted && questions.length > 0 && <Quiz finishQuiz={finishQuiz} />}
      {quizFinished && <Result restartQuiz={restartQuiz} />}
      <Footer/>
    </Container>
    </>
  );
};

export default App
