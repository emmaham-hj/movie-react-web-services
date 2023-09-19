//Import

// Define actions

const SET_FILTER = "SET_FILTER";
const ADD_MOVIES = "ADD_MOVIES";

// Define Action Creators

function setFilter() {
  return {
    type: SET_FILTER,
  };
}

function addMovies() {
  return {
    type: ADD_MOVIES,
  };
}

// Reducer
const initialState = {
  name: "init",
  isFiltered: false,
  movies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return toggleFilterFlag(state);

    case ADD_MOVIES:
      return updateMovies(state);

    default:
      return state;
  }
}

// Reducer Functions

function toggleFilterFlag(state) {
  return {
    ...state,
    isFiltered: true,
  };
}

function updateMovies(state) {
  return {
    ...state,
    movies: [1, 2, 3, 4],
  };
}
// Export Action Creators
const actionCreators = {
  toggleFilterFlag,
  updateMovies,
};

// Export Reducer
export default reducer;
