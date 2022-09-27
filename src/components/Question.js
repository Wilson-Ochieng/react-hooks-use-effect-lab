import React, {useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

    
    useEffect(() => {
      const timerID = setInterval(() => {
        setTimeRemaining((timeRemaining)=>timeRemaining-1);
      }, 1000);
  
      // returning a cleanup function
      return function cleanup() {
        clearInterval(timerID);
        clearTimeout()
      };
    }, []);

  function handleAnswer(isCorrect) {
    setTimeRemaining(40);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;


  if (timeRemaining === 0){
    handleAnswer()
    onAnswered(false)
  }


  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;