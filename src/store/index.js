import {createStore} from 'redux';
import  {reducer} from '../reducers/reducers';

const initialValue = {
    city: 'Mexico'
};

const store = createStore(reducer, initialValue, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
