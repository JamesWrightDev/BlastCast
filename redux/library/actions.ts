import {
  LibraryState,
  FETCH_LIBRARY_FEEDS,
  FETCH_LIBRARY_FEEDS_SUCCESS
} from "./types";

export function fetchLibraryData() {
  return {
    type: FETCH_LIBRARY_FEEDS,
  };
}

export function fetchLibraryDataSuccess(libraryData: LibraryState) {
  return {
    type: FETCH_LIBRARY_FEEDS_SUCCESS,
    payload: libraryData,
  }
}
