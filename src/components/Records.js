import React, { Component } from 'react';
import Record from './Record'

class Records extends Component {
  constructor(){
    super()
    this.state = {
      records:[
          {"id":1,"date":"2018-12-20","title":"收入","amount":20},
          {"id":2,"date":"2018-12-20","title":"支出","amount":25},
          {"id":3,"date":"2018-12-20","title":"实际支出","amount":40}
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Date</td>
              <td>Title</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            { this.state.records.map((record,i) => <Record key={record.id} record={record}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
