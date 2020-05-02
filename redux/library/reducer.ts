import {
  FETCH_LIBRARY_FEEDS,
  FETCH_LIBRARY_FEEDS_SUCCESS,
  LibraryState,
  LibraryActionTypes
} from "./types";

const initialState: LibraryState = {
  loaded: false,
};

export function libraryReducer(
  state = initialState,
  action: LibraryActionTypes
): LibraryState {
  switch (action.type) {
    case FETCH_LIBRARY_FEEDS: {
      return {
        ...state,
      };
    }
    case FETCH_LIBRARY_FEEDS_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
