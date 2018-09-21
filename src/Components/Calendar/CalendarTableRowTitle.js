import React, { Component } from 'react';

class CalendarTAbleRowTitle extends Component{
    constructor(){
        super();
        this.state={
            date:''
        }
    }
    render(){
        this.state.date=this.props.date
        return (
            <div className="date" key={this.props.date}>
                <span>{this.props.date}</span>
            </div>

        )
    }
}

export default CalendarTAbleRowTitle;