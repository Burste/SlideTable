import React,{Component} from 'react';
import CalendarTable from './CalendarTable';
import SlideButton from './SlideButton';
class calendar extends Component{
    
    render(){
        return(
            <div className="wrapper">
                <CalendarTable cldr={this.props.cldr} property={this.props.property}/>
                <SlideButton property={this.props.property}/>
            </div>
            
        )
    }
}
export default calendar;