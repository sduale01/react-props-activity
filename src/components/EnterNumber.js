import React, {Component} from 'react';

class EnterNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalNumber: 0
        }
    }

    handleNumChange = (event) => {
        this.setState({
            totalNumber:event.target.value,
        })
    }

    handleUpChange = (event) => {
        console.log('up clicked');
        console.log(this.state.totalNumber);

        const totalNumber = {
            numberIn: this.state.totalNumber
        }
        this.props.addNumToCurrentTotal(totalNumber);
        
    }

    handleDownChange = (event) => {
        console.log('down clicked');

        const totalNumber = {
            numberIn: -(this.state.totalNumber)
        }
        this.props.addNumToCurrentTotal(totalNumber);
        
    }

    addNumToTotal = (event) => {
        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>Enter a number and click up or down. The total will increase or decrease by that amount</div>
                <button onClick={this.handleUpChange}>Up</button>
                <input onChange={this.handleNumChange} type="number" placeholder="Enter Number" />
                <button onClick={this.handleDownChange}>Down</button>
            </div>

        )

    }
}




export default EnterNumber;