import React, { Component } from 'react';

class CalendarTableHTitle extends Component {
  constructor() {
    super();
    this.state = {
      range: []
    }
  }
  setRange() {
    this.state.range = this.props.range
  }
  createColumns() {
    this.setRange();
    let children = [];
    for (let i = 0; i < this.state.range.length; i++) {
      children.push(
        // <div className="column slide">
        
          <div className="col">
            <div className="title_date"><span key={i}>{this.state.range[i]}</span></div>
          </div>
      )
    }
    return children;
  }
  render() {
    this.createColumns();
    return (
      <tr>
        <td>
          <div className="title">
            <span>回程</span>
            <span>去程</span>
          </div>
        </td>
        <td>
          <div className="slide">
            {this.createColumns()}
          </div>
          {/* <div className="col">
              <div className="date"><span>{this.props.range}</span></div>
            </div> */}
          {/* <div className="col">
              <div className="date"><span>12/29 (六)</span></div>
            </div>
            <div className="col">
              <div className="date"><span>12/30 (日)</span></div>
            </div>
            <div className="col">
              <div className="date"><span>12/31 (一)</span></div>
            </div>
            <div className="col">
              <div className="date"><span>01/01 (二)</span></div>
            </div>
            <div className="col">
              <div className="date"><span>01/02 (三)</span></div>
            </div>
            <div className="col">
              <div className="date"><span>01/03 (四)</span></div>
            </div> */}
        </td>
      </tr>
    )
  }
}
export default CalendarTableHTitle;