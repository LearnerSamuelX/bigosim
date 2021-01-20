import {CREATE_ARRAY,CHART_CHANGE} from './actions'
import { bubblesort } from '../algorithm/sortingcode/bubblesort';
import { sortedCheck } from '../algorithm/sortingcode/sortedcheck';
import { selectionsort } from '../algorithm/sortingcode/selectionsort';
import { insertionsort } from '../algorithm/sortingcode/insertionsort';


const initialState = [{algo:'',anArray:[],sorted:[],cursor:0,round:0,onGoing:0}]

export const chartChange = (state=initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case CREATE_ARRAY:{
           const {algo,anArray} = payload;

           const chartMovement = {
                algo,
                anArray:anArray,
                sorted:[],
                cursor:state[0].cursor,
                round:state[0].round,
                onGoing:state[0].onGoing
           }

           console.log('Slider Movement Tracked')

           //concat, but make sure the last one is rendered

           return state.concat(chartMovement)
        }

        case CHART_CHANGE: {
            
            //the inputs for new states are from CHANGES made on exsiting state
            let len = state.length
            let onGoing = state.onGoing  //0,1  0--Start/Sorted  1--Being Sorted
            let method = state[len-1].algo
            let ref = state[len-1].anArray
            let tobesorted = state[len-1].anArray.slice()
            let swapped = []
            let sorted = false

            //featured parameters for this algorithm
            let cursor_pointer = state[len-1].cursor,round_counter =state[len-1].round

            if(method==='bubble'){
                if(tobesorted.length===0){
                    swapped = bubblesort(tobesorted,cursor_pointer)
                }else if(tobesorted.length!==0){
                    sorted = sortedCheck(tobesorted)
                    // console.log(sorted)
                    if(sorted===false){
                        swapped = bubblesort(tobesorted,cursor_pointer)
                        state.OnGoing = 1
                    }else if(sorted===true){
                        state.Ongoing = 0
                        return state
                    }   
                }
                cursor_pointer=cursor_pointer+1
                //ref.length-1-round, round would be an variable with 0 as its initial value
                if(cursor_pointer>ref.length-1-round_counter){
                    cursor_pointer =  0
                    round_counter = round_counter + 1
                }

                //swapping these keys
                const sortUpdate = {
                    algo:method,
                    anArray:swapped,
                    sorted:swapped,
                    cursor:cursor_pointer,
                    round:round_counter,
                    onGoing:1
                }
                return state.concat(sortUpdate)
                
            }
            else if(method==='select'){
                console.log('Selection Method selected')
                sorted = sortedCheck(tobesorted)
                if(sorted===false){
                    console.log("It is not sorted")
                    swapped = selectionsort(tobesorted,cursor_pointer)
                    state.OnGoing = 1;
                }else if(sorted===true){
                    state.OnGoing = 0;
                    return state
                }
                cursor_pointer=cursor_pointer+1
                if(cursor_pointer>ref.length-1-round_counter){
                    cursor_pointer =  0
                    round_counter = round_counter + 1
                }
                const sortUpdate = {
                    algo:method,
                    anArray:swapped,
                    sorted:swapped,
                    cursor:cursor_pointer,
                    round:round_counter,
                    onGoing:1,
                }
                return state.concat(sortUpdate)
            }

            else if(method==='insertion'){
                // console.log('Insertion sort selected.')
                sorted = sortedCheck(tobesorted)
                if(sorted===false){
                    swapped = insertionsort(tobesorted,cursor_pointer)
                    state.OnGoing = 1;
                }else if(sorted===true){
                    state.OnGoing = 0;
                    return state
                }
                cursor_pointer=cursor_pointer+1
                if(cursor_pointer>ref.length-1-round_counter){
                    cursor_pointer =  0
                    round_counter = round_counter + 1
                }
                const sortUpdate = {
                    algo:method,
                    anArray:swapped,
                    sorted:swapped,
                    cursor:cursor_pointer,
                    round:round_counter,
                    onGoing:1
                }
                return state.concat(sortUpdate)
            }
            return
        }
        
        default:
            return state
    }
    
    
}