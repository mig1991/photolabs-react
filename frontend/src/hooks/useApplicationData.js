import { useReducer, useEffect } from 'react';

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
  topics: [],
  photos: [],
  displayModal: false,
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });

    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
      })
      .catch((error) => {
        console.error(`Error fetching photos for topic ${topicId}:`, error);
      });
  };

  const fetchPhotosByQuery = (query) => {
    console.log(`Fetching photos for query: ${query}`);
    fetch(`/api/photos/search?search=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Search results:', data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
      })
      .catch((error) => {
        console.error(`Error fetching photos for query "${query}":`, error);
      });
  };

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
    fetchPhotosByTopic,
    updateToFavPhotoIds,
    removeFavPhotoIds,
    selectPhoto,
    closePhotoDetailsModal,
    fetchPhotosByQuery
  };
}

export default useApplicationData;
