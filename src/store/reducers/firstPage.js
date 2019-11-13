import { FETCH_DATA, FETCH_DATA_ERROR } from '../types';

const initialState = {
  data: [
    {
      name: 'Can',
      surname: 'KATKAT'
    }
  ],
  error: {
    status: false,
    errorMessage: ''
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        data: payload.data
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: {
          status: true,
          errorMessage: payload.errorMessage
        }
      };
    default:
      return state;
  }
}
