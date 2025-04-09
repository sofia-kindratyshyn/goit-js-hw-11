import getImagesByQuery from './js/pixabay-api';
import { clearGallery, hideLoader, showLoader } from './js/render-functions';

const form = document.querySelector('form');

form.addEventListener('submit', onHandleSubmit);

async function onHandleSubmit(event) {
  event.preventDefault();

  const input_value = form.elements[0].value.trim();

  if (input_value === '') {
    return;
  }

  clearGallery();
  showLoader();

  try {
    await getImagesByQuery(input_value);
  } catch (error) {
    console.log('Помилка запиту:', error);
  } finally {
    hideLoader();
  }
}
