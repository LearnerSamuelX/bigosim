import {CREATE_ARRAY,CHART_CHANGE} from './actions'

const initialState = [{anArray:[]}]

export const chartChange = (state=initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case CREATE_ARRAY:{
           const {algo,anArray} = payload;

           const chartMovement = {
                algo,
                anArray
           }
           console.log(chartMovement)
           console.log('Chart Change Testing.')

           //concat, but make sure the last one is rendered
           return state.concat(chartMovement)
        }

        case CHART_CHANGE: {
            const { switchButton }=payload;  //
    
                console.log(state)
                console.log('Sorting Algorithm goes here')
        
        }
        
        default:
            return state
    }
    
}