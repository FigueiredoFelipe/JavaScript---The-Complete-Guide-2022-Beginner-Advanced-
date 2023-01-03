const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.getElementById('addBtn');
const confirmAddMovieButton = document.getElementById('confirmAddBtn');
const cancelAddBtn = document.getElementById('cancelAddBtn');
const backdropElement = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const movieListAdded = document.getElementById('movie-list');
  movieListAdded.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 starts</p>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const movieListAdded = document.getElementById('movie-list');
  movieListAdded.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdropElement.classList.toggle('visible');
};

const cancelAddMovie = () => {
  toggleBackdrop();
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  // userInputs[0].value = '';
  for (const usrInputs of userInputs) {
    usrInputs.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === '' ||
    imageUrValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  toggleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropHandler = () => {
  toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdropElement.addEventListener('click', toggleMovieModal);
cancelAddBtn.addEventListener('click', toggleMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
