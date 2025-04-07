import getImagesByQuery from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const form = document.querySelector('form');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
  const input_value = form.elements[0].value.trim();
  showLoader();
  setTimeout(() => {
    getImagesByQuery(input_value);
  }, 2000);
  setTimeout(() => {
    hideLoader();
  }, 1999);
  clearGallery();
}
