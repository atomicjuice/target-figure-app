import '../CSS/Calculations.css'

function Equation(props) {

    return (
        <div id='equationContainer'>
        <div className='calculations'>
            Your Nearest Equation Is: 
        </div>
        <div>
        {!props.equation ? 'nothing yet' : props.equation}
        </div>
            <br></br>
            <div >
            which equals: {!props.equation ? 'very zero' : props.closestNumber}
            </div>
        </div>
    )
}

export default Equation
