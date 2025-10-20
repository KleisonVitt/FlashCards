import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Container from "./components/Container";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Controla o índice do array de perguntas
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      const response = await fetch("/api/questions.json");
      let data = await response.json();
      setQuestions(data.questions);
    }

    getQuestions();
  }, []);

  // seta o showAnswer para falso toda vez que avançar ou voltar uma flahscard
  useEffect(() => {
    setShowAnswer(false);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((previousIndex) => Math.max(previousIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((previousIndex) =>
      Math.min(previousIndex + 1, questions.length - 1)
    );
  };

  const handleAnswer = () => {
    setShowAnswer((previousState) => !previousState); // inverte o estado anterior ao clicar
  };

  const currentQuestion = questions[currentIndex];
  const currentIdx = currentIndex + 1;

  if (questions.length === 0) {
    return <p style={{ textAlign: "center" }}>Carregando perguntas...</p>;
  }

  let cardText = showAnswer
    ? currentQuestion.answer
    : currentQuestion.description;

  return (
    <>
      <Title text="Flash Cards" />

      <Container>
        <ProgressBar
          progress={(currentIdx / questions.length) * 100}
          currentIdx={currentIdx}
          totalQuestions={questions.length}
        />
      </Container>

      <Container>
        <Card cardText={cardText} />
        <Nav
          onNext={handleNext}
          onPrevious={handlePrevious}
          onshowAnswer={handleAnswer}
          showAnswer={showAnswer}
        />
      </Container>
    </>
  );
}

export default App;
