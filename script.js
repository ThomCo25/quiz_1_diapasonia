const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-button");
const scoreContainer = document.getElementById("score");

const correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "c",
  q4: "b",
  q5: "b",
  q6: "b",
  q7: "c",
};

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  let isAnswered = true;
  const userAnswers = {
    q1: quizForm.q1.value,
    q2: quizForm.q2.value,
    q3: quizForm.q3.value,
    q4: quizForm.q4.value,
    q5: quizForm.q5.value,
    q6: quizForm.q6.value,
    q7: quizForm.q7.value,
  };
  for (let answerKey in userAnswers) {
    if (userAnswers[answerKey] === "") {
      isAnswered = false;
      break;
    }
    if (userAnswers[answerKey] === correctAnswers[answerKey]) {
      score += 1;
    }
  }
  if (score > 0 && isAnswered) {
    scoreContainer.innerText = `Vous avez obtenu ${score} sur ${Object.keys(correctAnswers).length} bonnes réponses !`;
  } else if (score === 0 && isAnswered) {
    scoreContainer.innerText = "Vous n'avez obtenu aucune bonne réponse. Veuillez réessayer.";
  } else {
    scoreContainer.innerText = "Veuillez répondre à toutes les questions pour voir votre score.";
  }
});