//choose a algorithm here from the following:  selection sort, insertion sort & bubble sort

export const CREATE_A_RUN = 'CREATE_A_RUN'
export const createARun = (text,anArray)=>({
    type:CREATE_A_RUN,
    payload:{text,anArray}
})

/*
    text: algorithm type
    low:  lower boundary of the array
    high: higher boundary of the array
    arraynum: number of element in the array

*/