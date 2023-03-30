import { SEARCH_FILM } from "../constant";


const initialState = {
  films: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILM:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
