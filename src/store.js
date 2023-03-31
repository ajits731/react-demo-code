import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './reducer/reducer';

const store = configureStore({reducer: ProductReducer});

export default store;
