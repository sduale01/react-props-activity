import React, {Component} from 'react';

class CurrentTotal extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         totalState: 0,
    //     }
    // }

    grabTotal = (numToSend) => {
        
        numToSend = this.props.currentTotal
        console.log('number to add to list is:', numToSend);
        
        // this.props.sendCurrentTotal(numToSend);
    }
    
    
    
    render() {

        return (
            <div>
                <p>{this.props.currentTotal}</p>
                {/* {JSON.stringify(this.props.currentTotal)} */}
                <button onClick={this.grabTotal}>Save</button>
                <h4>Click save obove to save the current total in the history</h4>
            </div>
        );
    }
}

export default CurrentTotal;