document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.card');
    card.classList.toggle('active');

    const toggleIcon = header.querySelector('.toggle-btn');
    if (card.classList.contains('active')) {
      toggleIcon.textContent = '−';
    } else {
      toggleIcon.textContent = '+';
    }
  });
});
