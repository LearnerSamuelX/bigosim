import React,{useEffect,useRef,useState} from 'react';
import "./Barchart.css"
import * as d3 from 'd3'

const Barchart = () => {
    const [array,setArray]=useState([12,24,32])
    const d3Container = useRef(null);

    useEffect(()=>{
        const svg = d3.select(d3Container.current).append('svg').attr('width','100%').attr('height','300')
        svg.selectAll("rect").data(array).enter().append("rect")
        .attr("height",(d,i)=>d*3)
        .attr("width","15")
        .attr("fill","blue")
        .attr('x',(d,i)=>200+20*i)
        .attr('y',(d,i)=>100-d*3)


            // .attr("height",(d,i)=>{return d*3})
            // .attr("width","25")
            // .attr("fill","blue")
            // .attr("x",(d,i)=> 30*i)
            // .attr("y",(d,i)=>{return 100-d*3})
                
        // svg.selectAll('text').data(array).enter().append("text")
        //         .attr('x',(d,i)=>150+i*15)
        //         .attr('y',(d,i)=>height+100-5-d*10)
        //         .text((d)=>d)
        
    })


    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            <div className="d3-component"ref={d3Container}></div>
        </div>
    )
}
export default Barchart
