import {
    SEARCH_INPUT, 
    FETCH_CATS_SUCCESS, 
    FETCH_CATS_PENDING, 
    FETCH_CATS_ERROR  
} from './constants';

//store initial state for input text reducer
const initialStateSearch = {
    searchString: '',
}

//reducer to write input value to store
export const searchPetName = ( state=initialStateSearch, action={} ) => {
    switch (action.type) {
        case SEARCH_INPUT: {
            return Object.assign({}, state, {searchString: action.payload});    
        }
        default:
            return state;
    }
};

//store initial state for fetch reducer
const initialStateFetch = {
    cats: [],
    isPending: false,
    fetchError: ''
}

//reducer to write fetch states and result to store
export const fetchCats = ( state=initialStateFetch, action={} ) => {
    switch (action.type) {
        case FETCH_CATS_PENDING: {
            return Object.assign({}, state, { isPending: true });    
        }
        case FETCH_CATS_SUCCESS: {
            return Object.assign({}, state, { isPending: false, cats: action.payload });    
        }
        case FETCH_CATS_ERROR: {
            return Object.assign({}, state, { isPending: false, fetchError: action.payload });    
        }
        default:
            return state;
    }
};

