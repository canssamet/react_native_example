import Api from '@api';
import { FETCH_DATA, FETCH_DATA_ERROR } from '../types';

function fetchData() {
  return async dispatch => {
    try {
      const { data, status } = await Api.get('/facts');
      console.log(data, status);

      dispatch(
        (() => {
          return {
            type: FETCH_DATA,
            payload: {
              data: data.all ? data.all : []
            }
          };
        })()
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

      dispatch(
        (() => {
          return {
            type: FETCH_DATA_ERROR,
            payload: {
              errorMessage: error.message,
              data: []
            }
          };
        })()
      );
    }
  };
}

export { fetchData };
