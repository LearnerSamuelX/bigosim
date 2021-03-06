import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {chartChange} from './actions'
import "./Barchart.css"
import * as d3 from 'd3'

const Barchart = ({chartData,onChartChangeAuto}) => {
    let newArray = []
    // let len = chartData.length
    let upperLimit = chartData.anArray.length

    const [Yarray,setYArray]=useState(chartData.anArray) //so the initial state here should be an empty array

    useEffect(()=>{
        let delay = 80;

        if(chartData.algo==='bubble'){
            delay = 10
        }

        const testing = setTimeout(()=>{
        if(chartData.sorted.length===0){
            newArray = chartData.anArray
            setYArray(newArray)
        }
        else if(chartData.anArray===chartData.sorted){
            //insert the recursion data here
            console.log('Sorting Started \(^V^)/')
            // console.log(chartData)
            newArray = chartData.anArray
            setYArray(newArray)
            onChartChangeAuto()
        }
        

        if(newArray.length!==0){
            const width = 4.5*newArray.length //width of the actual chart, different than the svg element
            const height = 70 //height of the actual chart, different than the svg element
            const svg = d3.select('.svg-canvas')
            svg.selectAll("*").remove()

            var x = d3.scaleLinear().domain([0,upperLimit]).range([0,width])
            // var y = d3.scaleLinear().domain([0,d3.max(Yarray)]).range([height,0])

            var xAxis = d3.axisBottom(x).ticks(8)
            // var yAxis = d3.axisLeft(y).ticks(5)

            //locate the chart in the middle of the svg frame: 800/2 - width/2
            var chartGroup = svg.append('g').attr('transform','translate('+(550 - width/2)+',300)')
            chartGroup.selectAll("rect").data(Yarray).enter().append("rect")
                    .attr("height",(d,i)=>d*3)
                    .attr("width","3.5")
                    .attr("fill","blue")
                    .attr('x',(d,i)=>4.5*i)
                    .attr('y',(d,i)=>height-d*3)
                    
            chartGroup.append('g').attr('class','axis x')
                    .attr('transform','translate(0,'+height+')')
                    .call(xAxis)
        }
        },delay);
        return ()=>clearTimeout(testing)
    },[chartData,Yarray]) //Yarray

    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            <svg className="svg-canvas" width="1100px" height="400px"></svg>
        </div>
    )
}

const mapStateToProps = state => ({
    chartData:state.chartChange[state.chartChange.length - 1]
});

const mapDispatchToProps = dispatch => {
    return{
        onChartChangeAuto:()=>dispatch(chartChange())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Barchart)
