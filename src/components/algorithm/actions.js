//choose a algorithm here from the following:  selection sort, insertion sort & bubble sort

export const CHOOSE_ALGO = 'CHOOSE_ALGO'
export const chooseAlgo = (text)=>({
    type:CHOOSE_ALGO,
    payload:{text}
})