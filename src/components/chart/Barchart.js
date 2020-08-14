import React,{useEffect,useRef,useState} from 'react';
import { connect } from 'react-redux';
import "./Barchart.css"
import * as d3 from 'd3'

const Barchart = ({chartData}) => {
    let newArray = []
    let len = chartData.length

    const [XArray,setXArray]=useState([chartData])
    const [Yarray,setYArray]=useState(chartData[len-1].anArray) //so the initial state here should be an empty array
    // const d3Container = useRef(null);   


    useEffect(()=>{
            let len = chartData.length
            console.log(chartData.length)
            newArray = chartData[len-1].anArray
            setYArray(newArray)

        // if(chartData.length>1){
           
        //     let len = chartData.length
        //     let plate = chartData[len-1] //display the last element from chartChange state 
        //     //compute value of each element of the array
        //     let size = plate.arraynum
        //     // console.log(size)
            
        //     for(let i=0;i<size;i++){
        //         let newElement = Math.floor(Math.random()*100)
        //         newArray.push(newElement)
        //     }
        //     console.log('hahahaha')
            
        // }

        if(newArray.length!==0){
        const height = 70 //height of the actual chart, different than the svg element
        const width = 26.5*newArray.length //width of the actual chart, different than the svg element

        // const svg = d3.select(d3Container.current).append('svg').attr('width','400').attr('height','200')
        const svg = d3.select('.svg-canvas')
        svg.selectAll("*").remove()

        var x = d3.scaleLinear().domain([0,7]).range([0,width])
        var y = d3.scaleLinear().domain([0,d3.max(Yarray)]).range([height,0])

        var xAxis = d3.axisBottom(x).ticks(8)
        var yAxis = d3.axisLeft(y).ticks(5)

        //locate the chart in the middle of the svg frame: 800/2 - width/2
        var chartGroup = svg.append('g').attr('transform','translate('+(400 - width/2)+',300)')
        
        
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
        }
    },[chartData,Yarray])

    const newArrayFunc = (a) =>{
        setYArray(a)
    }

    return(
        <div id='chart-container'>
            <h3>Bar Chart</h3>
            {/* <div className="d3-component"ref={d3Container}></div> */}
            <svg className="svg-canvas" width="800px" height="400px"></svg>
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
