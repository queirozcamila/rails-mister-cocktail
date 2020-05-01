const changeBgMouseOver = () => {
  const cards = document.querySelectorAll('.card-category');
  cards.forEach((card) => {
    card.addEventListener('mouseover', (e) => {
      card.classList.add('card-category-image');
    });
    card.addEventListener('mouseout', (e) => {
      card.classList.remove('card-category-image');
    });
  })
}

export { changeBgMouseOver };
