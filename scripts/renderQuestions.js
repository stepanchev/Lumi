let currentQuestionIndex = 0;

export function renderQuestions(questions) {
  const container = document.getElementById("questions-container");

  container.innerHTML = "";

  if (currentQuestionIndex >= questions.length) {
    container.innerHTML = "<h3>Ты прошёл все вопросы 🎉</h3>";
    return;
  }

  const progress = document.createElement("p");
  progress.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;

  const q = questions[currentQuestionIndex];

  const card = document.createElement("div");
  card.classList.add("question-card");

  const h3 = document.createElement("h3");
  h3.textContent = q.question;

  const input = document.createElement("input");
input.classList.add('questInput')
  const button = document.createElement("button");
  button.textContent = "Проверить";
button.classList.add('buttonCheck')
  const result = document.createElement("p");

  const btnNext = document.createElement("button");
  btnNext.textContent = "Дальше";
  btnNext.disabled = true;

  btnNext.addEventListener("click", () => {
    currentQuestionIndex++;
    renderQuestions(questions);
  });

  button.addEventListener("click", () => {
    const userAnswer = input.value.trim().toLowerCase();

    if (q.correctAnswers.includes(userAnswer)) {
      result.textContent = "Правильно!";
      result.style.color = "green";
      btnNext.disabled = false;
    } else {
      result.textContent = `Неправильно, правильный ответ: ${q.correctAnswers[0]}`;
      result.style.color = "red";
    }

    if (currentQuestionIndex === questions.length - 1) {
      const lastQuest = document.createElement("p");
      lastQuest.textContent = "Последний вопрос";
      card.appendChild(lastQuest);
    }
  });

  card.appendChild(progress);
  card.appendChild(h3);
  card.appendChild(input);
  card.appendChild(button);
  card.appendChild(result);
  card.appendChild(btnNext);

  container.appendChild(card);
}