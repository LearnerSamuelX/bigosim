import React,{useEffect,useRef,useState} from 'react';
import * as d3 from 'd3'

const Barchart = () => {
    const [array,setArray]=useState([9,8,7,6,5,4])
    const d3Container = useRef(null);

    useEffect(()=>{
        const svg = d3.select(d3Container.current)



    })



    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            <svg className="d3-component"width={500} height={400}ref={d3Container}/>
        </div>
    )
}
export default Barchart
