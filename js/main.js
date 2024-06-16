// BURGER
const element = document.querySelector('.header__btm__burger');
const checkWidth = () =>
{
  if (window.innerWidth < 600) {
    element.classList.remove('hidden');
  } 
  else {
    element.classList.add('hidden');
  }
}
checkWidth();
window.addEventListener('resize', checkWidth);
// callback
const element1 = document.getElementById('callback');
const element2 = document.getElementById('header__btm__burger');
const element3 = document.getElementById('callback-exit');
element2.addEventListener('click', toggleClass);
function toggleClass(event) {
  if (event.target === element2) {
    element1.classList.remove('hidden');
    element2.removeEventListener('click', toggleClass);
    element3.addEventListener('click', toggleClass);
  } 
  if(event.target === element3) {
    element1.classList.add('hidden');
    element3.removeEventListener('click', toggleClass);
    element2.addEventListener('click', toggleClass);
  }
}