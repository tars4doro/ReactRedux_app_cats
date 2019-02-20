import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaceFigureContainer from './Components/FaceFigureContainer';
import SearchField from './Components/SearchField';
import NavBlock from './Components/NavBlock';
import ErrorBoundary from './Components/ErrorBoundary';
import { setSearchInput, fetchCats } from './actions';

//putting store data (taking into account structure of root reducer) into props 
const mapStateToProps = state => ({ 
  searchString: state.searchPetName.searchString,
  cats: state.fetchCats.cats,
  isPending: state.fetchCats.isPending,
  error: state.fetchCats.error
});

//dispatch sends actions to reducer
const mapDispatchToProps = dispatch => ({
  //input listener method that runs action and gets dispatched to reducer
  onSearchCat:  (event) => dispatch(setSearchInput(event.target.value)),
  //for async purpose fetchCats is HOF so it goes through redux-thunk and then result is dispatched to reducer
   onFetchCats: () =>  dispatch(fetchCats()) 
});

class App extends Component {

  //after 1st render React runs lifecycle componentDidMount method and fetch data
  componentDidMount() { this.props.onFetchCats() };

  render() {
    //destructuring props to get properties and methods set by mapStateToProps and mapDispatchToProps
    const { searchString, cats, onSearchCat, isPending } = this.props;
    const filteredResult = cats.filter(
      (cat) => { 
        return cat.name.toLowerCase().includes(searchString.toLowerCase());
      }
    );
    if (cats.length) {
      return (
        <div className='tc'>
          <NavBlock>
              <h1 className='f1 ma0 pt3'>PetDatabase</h1>
              {/*//passing event handler method through props to component*/}
              <SearchField searchCat={onSearchCat} />              
            </NavBlock>
            <ErrorBoundary>
            <FaceFigureContainer cats={filteredResult}/>            
            </ErrorBoundary>
          </div>
      ); }
    else if (isPending) {    
      return ( 
        <div className='tc'>
        <h1>Loading data. Please wait a moment.</h1>
        </div>
      ); }
    else {
      return ( 
        <div className='tc'>
        <h1>Oppps. Something went wrong. Try refreshing the page</h1>
        </div>
      ); }
  }
}
  
//using react-redux connect HOF to listen to store changes (instead of Redux .subscribe method)
export default connect(mapStateToProps, mapDispatchToProps)(App);