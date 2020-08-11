//these actions will be implemented as side effect for chart change

export const CHART_CHANGE = 'CHART_CHANGE'
export const changeChart = (text,low,high,arraynum)=>({
    type:CHART_CHANGE,
    payload:{text,low,high,arraynum}
})