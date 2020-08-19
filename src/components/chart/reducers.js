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
                anArray:anArray,
                sorted:[]
           }

           console.log('Slider Movement Tracked')

           //concat, but make sure the last one is rendered

           return state.concat(chartMovement)
        }

        case CHART_CHANGE: {
            //the inputs for new states are from CHANGES made on exsiting state
            let len = state.length
            console.log(state[len-1]) 
            let method = state[len-1].algo
            let ref = state[len-1].anArray
            let tobesorted = state[len-1].anArray.slice()
            let swapped = []

            if(method==='bubble'){
                if(tobesorted.length===0){
                    swapped = bubblesort(tobesorted)
                }else if(tobesorted.length!==0){
                    swapped = bubblesort(tobesorted)
                }
                
                //swapping these keys
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