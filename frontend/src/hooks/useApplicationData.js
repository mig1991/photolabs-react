import { useReducer } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotoIds: [...state.favPhotoIds, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload.id),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.SELECT_PHOTO:

      return {
        ...state,
        selectedPhoto: action.payload.photo,
        displayModal: true,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null,
        displayModal: false,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const initialState = {
  favPhotoIds: [],
  selectedPhoto: null,
  topics: topics,
  photos: photos,
  displayModal: false,
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);




  const updateToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
  };

  const removeFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  };

  const selectPhoto = (photo) => {

    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const closePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  return {
    state,
    updateToFavPhotoIds,
    removeFavPhotoIds,
    selectPhoto,
    closePhotoDetailsModal,
  };
}

export default useApplicationData;
