//here we COMBINE all of the reducers we created for different purposes
import { createStore,combineReducers } from 'redux';
// import {slidebar} from './components/slidebar/reducers'
import {algorithm} from './components/algorithm/reducers'

const reducers = {
    // slidebar,
    algorithm
}


const mainRootReducer = combineReducers(reducers)

export const configureStore = () => createStore(mainRootReducer)