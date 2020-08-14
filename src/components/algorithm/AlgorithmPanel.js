import React,{useEffect,useState} from 'react';
import {changeChart} from '../chart/actions'
import {createARun} from './actions'
import { connect } from 'react-redux';
import './AlgorithmPanel.css'

const AlgorithmPanel = ({chartState,onChartChanged,onRunPressed}) => {
    const [algo,setAlgo]= useState('');
    const [upper,setUpper]=useState(0)
    const [arraynum,setArrayNum]=useState(7)  //source of origin
    let newArray = []

    useEffect(()=>{
        // if(algo){
        //     console.log(`${algo} selected.`)
        // }
        for(let i=0;i<arraynum;i++){
            let newElement = Math.floor(Math.random()*100)
            newArray.push(newElement)
        }
        
        if(newArray.length>0){
            console.log(newArray)
            onChartChanged(newArray)  //deliver the state to chartChange state in the store
        }
        
    },[arraynum])

    const handleSelect = (e) =>{
        setAlgo(e.target.value)
    }

    const sliding = (e)=>{
        setArrayNum(parseInt(e.target.value))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }


    return(
        <div className='controlpanel'>
            <form onSubmit={handleSubmit}>
            <label>Select a sorting method: </label>
            <select onChange={handleSelect}>
                <option value='bubble'>Bubble Sort</option>
                <option value='insertion'>Insertion Sort</option>
                <option value='select'>Selection Sort</option>
            </select>
           
            <label>Number of Arrays: {arraynum}</label>
            <input type='range'className='slider'min="1" max="15"value={arraynum}onChange={sliding}></input>
            <input type='submit'className='runbutton'value='Run'
                onClick={()=>{

                    onRunPressed(algo,arraynum)
                    
                }}>
                </input>
            </form>
        </div>
    )
}

//dispatch is not a function
const mapStateToProps = state => ({
    chartState:state.chartChange
});

const mapDispatchToProps = dispatch => {
    return{
        onChartChanged:(anArray)=>dispatch(changeChart(anArray)),
        onRunPressed:(algo,arraynum)=>dispatch(createARun(algo,arraynum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPanel)