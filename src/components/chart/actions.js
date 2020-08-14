//these actions will be implemented as side effect for chart change

export const CHART_CHANGE = 'CHART_CHANGE'
export const changeChart = (anArray)=>({
    type:CHART_CHANGE,
    payload:{anArray}
})