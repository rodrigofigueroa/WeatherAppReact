import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import  reducers from '../reducers';

const initialValue = {
    city: 'Mexico'
};

const shortingPlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialValue, shortingPlugin(applyMiddleware(thunk)));

export default store;
