document.addEventListener('click', (e) => {
  if (e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});