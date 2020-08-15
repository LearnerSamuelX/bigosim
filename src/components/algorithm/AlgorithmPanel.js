import React,{useEffect,useState} from 'react';
import {changeChart} from '../chart/actions'
import {createARun} from './actions'
import { connect } from 'react-redux';
import './AlgorithmPanel.css'

const AlgorithmPanel = ({chartState,onChartChanged,onRunPressed}) => {
    
    let newArray = []
    const [algo,setAlgo]= useState('bubble');
    const [arraynum,setArrayNum]=useState(7)  //source of origin
    

    useEffect(()=>{

        for(let i=0;i<arraynum;i++){
            let newElement = Math.floor(Math.random()*100)
            newArray.push(newElement)
        }

        if(algo){
            console.log(`${algo} selected.`)
            onRunPressed(algo,newArray)
        }

        if(newArray.length>0){
            console.log(newArray)
            // console.log(aNewArray)
            onChartChanged(newArray)  //deliver the state to chartChange state in the store
        }
        
    },[arraynum,algo])

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
                    onClick={()=>{onRunPressed(algo,newArray)}}></input>

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
        onRunPressed:(algo,anArray)=>dispatch(createARun(algo,anArray))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPanel)