import axios from 'axios';
import { toast } from 'react-toastify';
import {
  KEY,
  MEDIA_TYPE,
  TIME_WINDOWS,
  API,
  API_ACTIONS,
} from 'components/constants/api.constants.js';

export const fetchAPIMovies = async (action, search = '') => {
  const URLString =
    action === API_ACTIONS.TRENDING
      ? `${API}/trending/${MEDIA_TYPE}/${TIME_WINDOWS}?api_key=${KEY}`
      : `${API}/search/${MEDIA_TYPE}?api_key=${KEY}&query=${search}`;

  try {
    const resolve = await axios.get(URLString);

    if (resolve.status !== 200 || !resolve) {
      throw new Error('Service is temporarily unavailable .');
    }
    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchAPIByID = async movieId => {
  const URLString = `${API}/movie/${movieId}?api_key=${KEY}`;
  try {
    const resolve = await axios.get(URLString);

    if (resolve.status !== 200 || !resolve) {
      throw new Error('Service is temporarily unavailable .');
    }
    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchReviewsByID = async movieId => {
  const URLString = `${API}/movie/${movieId}/reviews?api_key=${KEY}`;
  try {
    const resolve = await axios.get(URLString);

    if (resolve.status !== 200 || !resolve) {
      throw new Error('Service is temporarily unavailable .');
    }
    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchCastByID = async movieId => {
  const URLString = `${API}/movie/${movieId}/credits?api_key=${KEY}`;
  try {
    const resolve = await axios.get(URLString);

    if (resolve.status !== 200 || !resolve) {
      throw new Error('Service is temporarily unavailable .');
    }
    return resolve.data;
  } catch (error) {
    toast.error(error.message);
  }
};
