import {CREATE_A_RUN} from './actions'

const initialState = [] //should be []
export const createARun = (state=initialState,action)=>{

    const {type,payload} = action;

    switch (type){
        case CREATE_A_RUN:{
            const {text,arraynum} = payload;
            
            const aNewRun = {
                text,
                arraynum
            }
            console.log('Success! ')
            console.log(aNewRun)
            return state.concat(aNewRun)
        }

        default:
            return state
    }
}