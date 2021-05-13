import ReactFileReader from 'react-file-reader'
import React, { Component } from 'react'
import '../CSS/UploadCSV.css'

class UploadCSV extends Component {

    handleFiles = files => {
        const passNumbersToDisplay = (result) => this.props.renderNumbers(result)
        var reader = new FileReader();
        reader.onload = function (e) {

            let stringResult = reader.result
            let result = stringResult.split(',').map(number => parseInt(number))
            passNumbersToDisplay(result)
        }
        reader.readAsText(files[0]);
    }
    render() {
        return (
            <div id='uploadContainer' >
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'} >
                    <button id='uploadButton' >Upload</button>
                </ReactFileReader>
            </div>
        )
    }
}

export default UploadCSV
