const changeBgMouseOver = () => {
  const card = document.querySelector('card-category');
    card.addEventListener('mouseover', () => {
      card.classList.add('card-category-image');
      card.classList.remove('card-category');
    });
}

export { changeBgMouseOver };
