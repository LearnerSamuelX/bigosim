import React,{useEffect,useState} from 'react';
import {createArray,chartChange} from '../chart/actions'
import { connect } from 'react-redux';
import './AlgorithmPanel.css'

const AlgorithmPanel = ({onArrayCreated,onButtonClicked}) => {
    
    let newArray = []
    
    const [algo,setAlgo]= useState('bubble');
    const [arraynum,setArrayNum]=useState(120)  //source of origin
    const [onGoing,setOnGoing]=useState(0)
    
    useEffect(()=>{
        for(let i=0;i<arraynum;i++){
            let newElement = Math.floor(Math.random()*100)
            newArray.push(newElement)
        }

        if(newArray.length>0){
            onArrayCreated(algo,newArray)  //deliver the state to chartChange state in the store
        }
        
    },[arraynum,algo])

    const handleSelect = (e) =>{
        setAlgo(e.target.value)
    }

    const sliding = (e)=>{
        setOnGoing(0)
        setArrayNum(parseInt(e.target.value))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setOnGoing(1)
        onButtonClicked()
    }

    const resetButton =(e)=>{
        e.preventDefault()
        window.location.reload()
    }

    return(
        <div className='controlpanel'>
            <form onSubmit={handleSubmit}>
                <label>Select a sorting method: </label>
                <select disabled={onGoing===1} onChange={handleSelect}>
                    <option value='bubble'>Bubble Sort</option>
                    <option value='insertion'>Insertion Sort</option>
                    <option value='select'>Selection Sort</option>
                </select>
            
                <label>Number of Arrays: {arraynum}</label>
                <input type='range'className='slider'min="1" max="240"value={arraynum}onChange={sliding}></input>
                <input disabled={onGoing===1}type='submit'className='runbutton'value='Run'onClick={handleSubmit}></input>
                {/* <input disabled={onGoing===0}type='submit'className='resetbutton'value='Reset'onClick={resetButton}></input> */}
                    
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    chartState:state.chartChange[state.chartChange.length - 1]
});

const mapDispatchToProps = dispatch => {
    return{
        onArrayCreated:(algo,anArray)=>dispatch(createArray(algo,anArray)),
        onButtonClicked:()=>dispatch(chartChange())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmPanel)