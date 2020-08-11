import {CHART_CHANGE} from './actions'

const initialState = []

export const chartChange = (state=initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case CHART_CHANGE:{
           const {low,upper,arraynum} = payload;

           const chartMovement = {
               low,
               upper,
               arraynum
           }
           console.log(chartMovement)
           console.log('Chart Change Testing.')

           return state.concat(chartMovement)
        }
        
        default:
            return state
    }
    
}