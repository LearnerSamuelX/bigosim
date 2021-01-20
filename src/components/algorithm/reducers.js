import {CREATE_A_RUN} from './actions'

const initialState = [{text:'bubble',anArray:[0,0,0,0,0,0]}]
export const createARun = (state=initialState,action)=>{

    const {type,payload} = action;

    switch (type){
        case CREATE_A_RUN:{
            const {text,anArray} = payload;
            
            const aNewRun = {
                text,
                anArray
            }
            console.log('Success! ')
            console.log(aNewRun)
            return state.concat(aNewRun)
        }

        default:
            return state

    }
    
}