import React,{useEffect,useRef,useState} from 'react';
import { connect } from 'react-redux';
import "./Barchart.css"
import * as d3 from 'd3'

const Barchart = ({chartData}) => {
    const [XArray,setXArray]=useState([0,1,2,3,4,5,6])
    const [Yarray,setYArray]=useState([23,24,32,5,6,7,8,12])
    const d3Container = useRef(null);   

    useEffect(()=>{
        console.log(chartData)
        const height = 100 //height of the bar
        const width = 185.5

        // const svg = d3.select(d3Container.current).append('svg').attr('width','400').attr('height','200')
        const svg = d3.select('.svg-canvas')
        svg.selectAll("*").remove()

        var x = d3.scaleLinear().domain([0,7]).range([0,width])
        var y = d3.scaleLinear().domain([0,d3.max(Yarray)]).range([height,0])

        var xAxis = d3.axisBottom(x).ticks(8)
        var yAxis = d3.axisLeft(y).ticks(5)

        var chartGroup = svg.append('g').attr('transform','translate(100,50)')
        
        chartGroup.selectAll("rect").data(Yarray).enter().append("rect")
                .attr("height",(d,i)=>d*3)
                .attr("width","15")
                .attr("fill","blue")
                .attr('x',(d,i)=>26.5*i)
                .attr('y',(d,i)=>height-d*3)
                
        chartGroup.selectAll('text').data(Yarray).enter().append("text")
                .attr('font-size',15)
                .attr('x',(d,i)=>26.5*i)
                .attr('y',(d,i)=>height-5-d*3+2)
                .text((d,i)=>d)
        
        chartGroup.append('g').attr('class','axis y')
                // .attr('transform','translate(500,76)')
                .call(yAxis)

        chartGroup.append('g').attr('class','axis x')
                .attr('transform','translate(0,'+height+')')
                .call(xAxis)
        
    })


    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            {/* <div className="d3-component"ref={d3Container}></div> */}
            <svg className="svg-canvas" width="400px" height="200px"></svg>
        </div>
    )
}

const mapStateToProps = state => ({
    chartData:state.chartChange
});

// const mapDispatchToProps = dispatch => {
//     return{
        
//     }
// }



export default connect(mapStateToProps)(Barchart)
