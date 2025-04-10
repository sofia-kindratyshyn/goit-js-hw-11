import getImagesByQuery from './js/pixabay-api';
import { clearGallery, hideLoader, showLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так при запиті до API. Спробуйте пізніше.',
      position: 'topRight',
    });
    console.error('Помилка запиту:', error);
  } finally {
    hideLoader();
  }
}
