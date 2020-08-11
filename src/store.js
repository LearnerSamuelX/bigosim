//here we COMBINE all of the reducers we created for different purposes
import { createStore,combineReducers } from 'redux';
// import {slidebar} from './components/slidebar/reducers'
import {createARun} from './components/algorithm/reducers'

const reducers = {
    createARun
}

const mainRootReducer = combineReducers(reducers)

export const configureStore = () => createStore(mainRootReducer)