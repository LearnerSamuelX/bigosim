//these actions will be implemented as side effect for chart change

export const CREATE_ARRAY = 'CREATE_ARRAY'
export const createArray = (algo,anArray)=>({
    type:CREATE_ARRAY,
    payload:{algo,anArray}
})

export const CHART_CHANGE = 'CHART_CHANGE'
export const chartChange = ()=>({
    type:CHART_CHANGE,
})
