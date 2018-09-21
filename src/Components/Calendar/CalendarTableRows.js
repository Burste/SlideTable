import React, { Component } from 'react';
import CalendarTableRowTitle from './CalendarTableRowTitle';
import CalendarTableHTitle from './CalendarTableHTitle';

class CalenderTableRows extends Component {
    constructor() {
        super();
        this.state = {
            lastClick:'',
            trip: [{
                date: '2018/12/28',
                data: [
                    {
                        id: '',
                        price: '',
                        seat_release: 0,
                        seat_vacancy: 0,
                        date_tripStart: '',
                        date_tripEnd: '',
                        isGuaranteed: false,
                        isTheCheapest: false,
                        isAvailable: false
                    }
                ]
            }]
        }
    }
    setDate(index) {
        return (
            // <div className="date" key={this.state.trip[index].date}>
            //     <span>
            //         {this.state.trip[index].date}
            //     </span>
            // </div>
            <div className="date" key={this.state.trip[index].date}>
                <span>
                    {this.props.range[index]}
                </span>
            </div>
        )
    }
    handClick(e){
        let current=e.target;
        if(e.target.tagName=='SPAN') current=e.target.parentElement;
        let className=current.getAttribute('class');
        let currentEles=document.getElementsByClassName(className)[0];
        let parent=current.parentElement;
        let parentClass=parent.getAttribute('class').replace('slide ','');
        let parentElement=document.getElementsByClassName(parentClass)[0];
        let hover=document.getElementsByClassName('focus');
        let clickEle=document.getElementsByClassName('click');
        let hoverLength=hover.length;
        let checkHover=(className)=>{
            if(currentEles)
                return currentEles.classList.contains('focus');
            else return undefined
        };  
        let checkisTheSame=(className)=>{
            // 'focus' exist?
            if(className){
                if(className.indexOf('focus')>0) return true;
                else return false;
            }
        }

        /*
         * Remove class
         */
        if((hoverLength // && !checkisTheSame(className)
        && checkHover(className)!=undefined)) {
            //focus
            for(let i=0;i<hoverLength;i++){
                if(i<hoverLength)
                hover[0].classList.remove('focus');
            }
            //click
            if(clickEle.length>0)
                clickEle[0].classList.remove('click');
            
        }

        /*
         * Add class
         */
        if(!!className && (!checkHover(className))){
            let cname=current.getAttribute('class').replace(' cheapest','');
                parentElement.classList.add('focus');
                for(let i=0;i<document.getElementsByClassName(cname).length;i++){
                    document.getElementsByClassName(cname)[i].classList.add('focus');
                }
                current.classList.add('click');
        }
        
    }
    setTripData(index) {
        let indexData = this.state.trip;
        let children = [];

        for (let i = 0; i < indexData[index].data.length; i++) {
            let classname = 'col';
            classname += ' col' + (i + 1);
            
            if (!!indexData[index].data[i].price && indexData[index].data[i].isAvailable) {
                if(indexData[index].data[i].isTheCheapest) classname+=' cheapest';
                children.push(
                    <div className={classname} onClick={this.handClick}>
                        <span key={indexData[index].data[i].no} className='price'>$ {indexData[index].data[i].price} 起</span> </div>
                )   
            }
            else {
                children.push(
                    <div className={classname} onClick={this.handClick}>
                        <span>— —</span>
                    </div>
                )
            }
        }
        return children;
    }

    setTripDataRow(index) {
        let children = [];
        let className='slide slide'+index;
        for (let i = index; i <= index; i++) {
            children.push(this.setTripData(i));
        }
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
    setRows() {
        let rowChildren = [];
        let tripChildren = [];
        for (let i = 0; i < this.state.trip.length; i++) {
            rowChildren.push(
                <tr>
                    <td>
                        {this.setDate(i)}
                    </td>
                    <td>

                        {this.setTripDataRow(i)}
                    </td>
                </tr>
            )
        }
        return rowChildren;
    }
    render() {
        this.state.trip = this.props.tripData;

        return(
            <tbody>
                <CalendarTableHTitle range={this.props.range} />
                {this.setRows()}
            </tbody>
        )
    }
}
export default CalenderTableRows;