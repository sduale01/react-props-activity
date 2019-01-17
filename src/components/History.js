import React, {Component} from 'react';

class History extends Component {

    render(){
        let historyList = [];
        // for (let number in this.props.addToHistoryList) {
        //     let numberListItem = (<li>{number.value}</li>)
        //     historyList.push(numberListItem)
        // }

        for (let i = 0; i < this.props.addToHistoryList.length; i++) {
            let item = this.props.addToHistoryList[i];
            let itemToAdd = (<li key={i}>{item.value}</li>)
            historyList.push(itemToAdd)
            
        }
        return (
            <div>
                <h3>History</h3>
                <ul>
                    {JSON.stringify(this.props.addToHistoryList)}
                    {historyList}
                </ul>
            </div>
        )
    }
}

export default History;