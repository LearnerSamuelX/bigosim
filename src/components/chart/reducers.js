import {CHART_CHANGE} from './actions'

const initialState = [{anArray:[]}]

export const chartChange = (state=initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case CHART_CHANGE:{
           const {anArray} = payload;

           const chartMovement = {
                anArray
           }
           console.log(chartMovement)
           console.log('Chart Change Testing.')

           //concat, but make sure the last one is rendered
           return state.concat(chartMovement)
        }
        
        default:
            return state
    }
    
}