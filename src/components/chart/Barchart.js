import React,{useEffect,useRef,useState} from 'react';
import "./Barchart.css"
import * as d3 from 'd3'

const Barchart = () => {
    const [array,setArray]=useState([23,24,32,5,6,7,8,12])
    const d3Container = useRef(null);   

    useEffect(()=>{
        const height = 100 //height of the bar

        const svg = d3.select(d3Container.current).append('svg').attr('width','100%').attr('height','300')
        
        var y = d3.scaleLinear().domain([0,40]).range([height,0])

        var yAxis = d3.axisLeft(y)

        var chartGroup = svg.append('g').attr('transform','translate(0,0)')
        
        chartGroup.selectAll("rect").data(array).enter().append("rect")
                .attr("height",(d,i)=>d*3)
                .attr("width","15")
                .attr("fill","blue")
                .attr('x',(d,i)=>500+25*i)
                .attr('y',(d,i)=>height-d*3+77)
                
        chartGroup.selectAll('text').data(array).enter().append("text")
                .attr('x',(d,i)=>500+25*i)
                .attr('y',(d,i)=>height-5-d*3+75)
                .text((d,i)=>d)
        
    })


    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            <div className="d3-component"ref={d3Container}></div>
        </div>
    )
}
export default Barchart
