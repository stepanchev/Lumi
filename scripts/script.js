import { questions } from "./questions/questions-html.js";
import { renderQuestions } from "./renderQuestions.js";

// запуск вопросов
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions(questions);
});

// обработка карточек (если есть)
const cards = document.querySelectorAll('.course-card');

if (cards.length > 0) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const course = card.dataset.course;
      window.location.href = `course-pagis/course-${course}.html`;
    });
  });
}

// header
const path = window.location.pathname.includes('course-pagis')
  ? '../components/header.html'
  : 'components/header.html';

fetch(path)
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });