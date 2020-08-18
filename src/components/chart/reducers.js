import {CREATE_ARRAY,CHART_CHANGE} from './actions'
import { bubblesort } from '../algorithm/sortingcode/bubblesort';


const initialState = [{algo:'',anArray:[],sorted:[]}]

export const chartChange = (state=initialState,action) => {
    const {type,payload} = action;

    switch(type){
        case CREATE_ARRAY:{
           const {algo,anArray} = payload;

           const chartMovement = {
                algo,
                anArray,
                sorted:anArray
           }
        //    console.log(chartMovement)
           console.log('Chart Change Testing.')

           //concat, but make sure the last one is rendered

           return state.concat(chartMovement)
        }

        case CHART_CHANGE: {
            
            // console.log(state)
            let len = state.length
            let method = state[len-1].algo
            let ref = state[len-1].anArray
            let cards = state[len-1].sorted
            let swapped=''

            if(method==='bubble'){
                //to confirm if it is completely unsorted
                if(cards===state[len-1].anArray){
                    console.log(cards)
                    swapped=bubblesort(cards)
                    console.log('bubble algo, and exports the array for each step')

                //now when the sorting is underway but yet to be finished, the card stack is differnt than the anArray
                }else{
                    swapped=bubblesort(cards)
                }

                const sortUpdate = {
                    algo:method,
                    anArray:ref,
                    sorted:swapped
                }

                return state.concat(sortUpdate)
            }

        }
        
        default:
            return state
    }
    
}