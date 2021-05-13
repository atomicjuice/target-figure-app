import React from 'react'
import '../CSS/NumbersFromCSV.css'

function NumbersFromCSV(props) {
    const presentify = () =>  {
    let nums = props.numbersToRender.map( n => n + ', ')
    let lastOne = nums.pop()
    lastOne = parseInt(lastOne).toString()
    nums.push(lastOne)
    return nums
    }
    return (
        <div  id='csvTitle' >
            Numbers From Your CSV: 
            <div id='numbers' >
                {props.numbersToRender === '' ? 'none at the moment' : presentify()}
            </div>
        </div>      
    )
}

export default NumbersFromCSV
