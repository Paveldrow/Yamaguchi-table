const table = document.querySelector('.table__image-top');
const buttonTop = document.querySelector('.table__button--top');
const buttonDown = document.querySelector('.table__button--down');

buttonTop.addEventListener('click', () => {
  table.classList.remove('table-top-down');
  table.classList.add('table-top-up');
});

buttonDown.addEventListener('click', () => {
  table.classList.remove('table-top-up');
  table.classList.add('table-top-down');
});
