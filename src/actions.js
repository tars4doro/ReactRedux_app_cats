import { 
    SEARCH_INPUT, 
    FETCH_CATS_SUCCESS, 
    FETCH_CATS_PENDING, 
    FETCH_CATS_ERROR  
} from './constants';

//event listener to send input text to reducer
export const setSearchInput = inputText => ({
    type: SEARCH_INPUT, payload: inputText });

//fetch promise wrapped into HOF and passed to reducer through redux-thunk middleware    
export const fetchCats = () => dispatch => {
    dispatch({ type: FETCH_CATS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json() )
    .then( cats => dispatch({ type: FETCH_CATS_SUCCESS, payload: cats }) )
    .catch( error => dispatch({ type: FETCH_CATS_ERROR, payload: error }))  
}