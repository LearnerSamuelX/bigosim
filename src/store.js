//here we COMBINE all of the reducers we created for different purposes
import { createStore,combineReducers } from 'redux';
// import {slidebar} from './components/slidebar/reducers'
import {createARun} from './components/algorithm/reducers'
import {chartChange} from './components/chart/reducers'

const reducers = {

    chartChange,
    createARun
    
}

const mainRootReducer = combineReducers(reducers)

export const configureStore = () => createStore(mainRootReducer)