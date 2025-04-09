import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import createGallery from './render-functions';
export default async function getImagesByQuery(query) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '49632762-ccb8ac978f5dd2d4af8186ee2',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    const hits = response.data.hits;

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        icon: '/img/bi_x-octagon.png',
        imageWidth: 50,
        maxWidth: 432,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
      });
      return;
    }

    createGallery(hits);
  } catch (error) {
    console.error('Помилка запиту:', error);
    throw error;
  }
}
