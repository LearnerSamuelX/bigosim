//these actions will be implemented as side effect for chart change

export const CHART_CHANGE = 'CHART_CHANGE'
export const changeChart = (lower,upper,arraynum)=>({
    type:CHART_CHANGE,
    payload:{lower,upper,arraynum}
})