import './App.css';
import React, { useState } from 'react'
import NumbersFromCSV from '../src/Components/NumbersFromCSV'
import UploadCSV from '../src/Components/UploadCSV'
import Equation from '../src/Components/Equation'
import { solverRunAllSolutions } from './Engine/Engine'


function App() {

  const [targetFigure, setTargetFigure] = useState(532)
  const [numbers, setNumbers] = useState('')
  const [closestNumber, setclosestNumber] = useState()
  const [equation, setEquation] = useState()


  const checkIfNumber = (e) => {
    const num = parseInt(e.target.value)
    if (e.key === 'Enter' && isNaN(num) === false) {
      setTargetFigure(num)
      e.target.value = ''
    } else if (e.key === 'Enter' && isNaN(num) === true) {
      return alert('please enter a number')
    }
  }


  const returnSolutions = (solverResults) => {
    setEquation(solverResults.getSolution().stringValue)
    setclosestNumber(solverResults.getSolution().value)
  }

  const res = () => {
    if(numbers === '' || null){
      return alert('a selection of numbers needs to be uploaded first')
    }
    solverRunAllSolutions(numbers, targetFigure, null, returnSolutions)}

  return (
    <div >
      <header className='App-header'>
        Target Figure App
        </header>
      <div className='App' >
        <NumbersFromCSV numbersToRender={numbers} />
        <Equation equation={equation} closestNumber={closestNumber} />
        <UploadCSV renderNumbers={numbers => setNumbers(numbers)} />
      </div>

      <div id='changeNumberContainer'>
        <div id='currentNumber'>
          Current Target Number: {targetFigure}
        </div>

        <div> 
          <input id='inputStyling' placeholder='Change Target Number' onKeyPress={(e) => { checkIfNumber(e) } } ></input>
        </div>

        <div style={{ marginTop: '5vh' }} >
          <button id='calculateButtonStyling' onClick={() => { res() }} >
            Calculate
          </button>
        </div>
      </div>


    </div>
  );
}

export default App;
