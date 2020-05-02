export interface LibraryState {
  loaded: boolean,
}

export const FETCH_LIBRARY_FEEDS = "@FETCH_LIBRARY_FEEDS"
export const FETCH_LIBRARY_FEEDS_SUCCESS = "@FETCH_LIBRARY_FEEDS_SUCCESS"

interface FetchLibraryFeeds {
  type: typeof FETCH_LIBRARY_FEEDS ;
};

interface FetchLibraryFeedsSuccess {
  type: typeof FETCH_LIBRARY_FEEDS_SUCCESS ;
  payload: LibraryState;
};

export type LibraryActionTypes = FetchLibraryFeeds | FetchLibraryFeedsSuccess;
