import React, {Component} from 'react';

class History extends Component {
    


    render(){
        
        const historyList = [];
        for (let number in this.props.currentTotal) {
            let numberListItem = (<li>{number}</li>)
            historyList.push(numberListItem)
        }
        return (
            <div>
                <h3>History</h3>
                <ul>
                    {historyList}
                </ul>
            </div>
        )
    }
}

export default History;