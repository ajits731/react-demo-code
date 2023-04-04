import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducer/reducer';
import Thunk from 'redux-thunk';

const store = configureStore({reducer: rootReducer, middleware: [Thunk]});

export default store;
