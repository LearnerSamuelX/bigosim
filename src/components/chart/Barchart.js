import React,{useEffect,useRef,useState} from 'react';
import * as d3 from 'd3'

const Barchart = () => {
    const [array,setArray]=useState([9,8,7,6,5,4])
    const d3Container = useRef(null);

    useEffect(()=>{
        const svg = d3.select(d3Container.current)
        d3.select(d3Container.current).selectAll("rect").data(array).enter().append("rect")
                .attr('height',(d,i)=>d)
                .attr('width',25)
                .attr("fill","blue")


    })



    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            <svg className="d3-component"width={500} height={400}ref={d3Container}></svg>
        </div>
    )
}
export default Barchart
