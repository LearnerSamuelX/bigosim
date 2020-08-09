import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import './AlgorithmPanel.css'

const AlgorithmPanel = () => {
    const [lower,setLower]=useState(0)
    const [upper,setUpper]=useState(0)
    const [algo,setAlgo]= useState('');

    useEffect(()=>{
        if(algo){
            console.log(`${algo} selected.`)
        }
    })

    const handleSelect = (e) =>{
        setAlgo(e.target.value)
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
            <label>Highest Value:</label>
            <input type='text'></input>
            <label>Lowest Value:</label> 
            <input type='text'></input>
            <label>Number of Arrays:</label>
            <input type='range'className='slider'></input>
            <input type='submit'value='Run'></input>
            </form>
        </div>
    )
}

// connect(mapStateToProps, mapDispatchToProps)(AlgorithmPanel)
export default AlgorithmPanel