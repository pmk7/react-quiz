import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
<<<<<<< HEAD
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    closeModal,
  } = useGlobalContext();
=======
  const { waiting, loading, questions, index, correct } = useGlobalContext();
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
<<<<<<< HEAD
  const { question, incorrect_answers, correct_answer } = questions[index];
=======
  const { question, incorrect_answers, correct_answer } = questions[0];
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
<<<<<<< HEAD
      <Modal />
=======
      {/* <Modal /> */}
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
<<<<<<< HEAD
                  onClick={() => checkAnswer(correct_answer === answer)}
=======
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
<<<<<<< HEAD
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
=======
>>>>>>> 4d7f02c8d37324fe5567b73651de8eb8fb0950c6
      </section>
    </main>
  );
}

export default App;
