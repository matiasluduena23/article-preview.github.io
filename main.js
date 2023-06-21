const btnShare = document.querySelector('.icon-share');
const btnIcon = document.querySelector('.btn-icon');
const wrapper = document.querySelector('.article-body');

btnShare.addEventListener('click' , () => {
  wrapper.classList.toggle('active');
})

btnIcon.addEventListener('click' , () => {
  wrapper.classList.toggle('active');
})