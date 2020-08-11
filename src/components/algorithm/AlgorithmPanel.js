import React,{useEffect,useState} from 'react';
import {changeChart} from '../chart/actions'
import {createARun} from './actions'
import { connect } from 'react-redux';
import './AlgorithmPanel.css'

const AlgorithmPanel = ({mainstate,onChartChanged,onRunPressed}) => {
    const [algo,setAlgo]= useState('');
    const [lower,setLower]=useState(0)
    const [upper,setUpper]=useState(0)
    const [arraynum,setArrayNum]=useState(7)

    useEffect(()=>{
        if(algo){
            console.log(`${algo} selected.`)
        }
        onChartChanged(lower,upper,arraynum)  //deliver the state to chartChange state in the store
        console.log(
            {
                'lower':lower,
                'upper':upper,
                'arraynum':arraynum
            }
        )
    },[lower,upper,arraynum])

    const handleSelect = (e) =>{
        setAlgo(e.target.value)
    }

    const upperFunc = (e) => {
        setUpper(e.target.value)
    }

    const lowerFunc = (e) => {
        setLower(e.target.value)
    }

    const sliding = (e)=>{
        setArrayNum(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(algo){
            console.log('We will run '+`${algo}`+' algorithm.')
        }
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
            <label>Lowest Value:</label>
            <input type='text'value={lower}onChange={lowerFunc}></input>
            <label>Highest Value:</label> 
            <input type='text'value={upper}onChange={upperFunc}></input>
            <label>Number of Arrays: {arraynum}</label>
            <input type='range'className='slider'min="1" max="15"value={arraynum}onChange={sliding}></input>
            <input type='submit'className='runbutton'value='Run'
                onClick={()=>{
                onRunPressed(algo,lower,upper,arraynum)}}>
                </input>
            </form>
        </div>
    )
}

//dispatch is not a function
const mapStateToProps = state => ({
    mainstate:state.createARun
});

const mapDispatchToProps = dispatch => {
    return{
        onChartChanged:(lower,upper,arraynum)=>dispatch(changeChart(lower,upper,arraynum)),
        onRunPressed:(algo,lower,upper,arraynum)=>dispatch(createARun(algo,lower,upper,arraynum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPanel)