import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import  { reducer } from '../reducers/reducers';

const initialValue = {
    city: 'Mexico'
};

const shortingPlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialValue, shortingPlugin(applyMiddleware(thunk)));

export default store;
