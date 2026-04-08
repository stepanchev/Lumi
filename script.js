document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('click', () => {
    const course = card.dataset.course;
    window.location.href = `course-pagis/course-${course}.html`;
  });
});

const path = window.location.pathname.includes('course-pagis')
  ? '../header.html'
  : 'header.html';

fetch(path)
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });
