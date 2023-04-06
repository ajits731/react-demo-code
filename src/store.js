import {configureStore} from '@reduxjs/toolkit';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/reducer';
import Thunk from 'redux-thunk';

// const store = configureStore({reducer});

const store = createStore(reducer, applyMiddleware(Thunk));

export default store;
