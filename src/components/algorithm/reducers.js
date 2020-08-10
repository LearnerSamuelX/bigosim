import {CHOOSE_ALGO} from './actions'

const initialState = []
export const createARun = (state=initialState,action)=>{
    const {text,low,high,arraynum} = action;
    const aNewRun = {
        text,
        low,
        high,
        arraynum
    }

    return state.concat(aNewRun)
}