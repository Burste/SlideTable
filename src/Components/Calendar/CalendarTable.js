import React, { Component } from 'react';
import CalendarTableHTitle from './CalendarTableHTitle';
import CalendarTableRows from './CalendarTableRows';

class CalendarTable extends Component {
    constructor() {
        super();
        this.state = {
            dateArray: [],
            tripData: [{}],
            moveWidth: ''
        }
    }

    toDateFormat(next) {
        let date = new Date(next);
        date && (date != this.toTimeStamp(date)) || this.toTimeStamp(date);
        // return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ` (${this.toCHDay(date.getDay())})`
        return (date.getMonth() + 1) + '/' + date.getDate() + ` (${this.toCHDay(date.getDay())})`
    }
    toTimeStamp(date) {
        return new Date(date).getTime();
    }
    toCHDay(index) {
        const DAY = ['日', '一', '二', '三', '四', '五', '六'];
        return DAY[index];
    }
    getDateArray() {
        let obj = this.props.cldr.tableProps.dateRange;
        let unit = 86400000;
        let days = (this.toTimeStamp(obj.to) - this.toTimeStamp(obj.from)) / unit;
        let nextDay = this.toTimeStamp(obj.from);
        let dateArray = [];
        for (let i = 0; i < days; i++) {
            dateArray.length || dateArray.push(this.toDateFormat(obj.from));
            nextDay += unit;
            dateArray.push(this.toDateFormat(new Date(nextDay)));
        }
        return dateArray;
    }
    getTripData() {
        return this.props.cldr.tripData;
    }
    renderTable() {
        
        let displayCol = this.props.property.count.show; //M - Show Column count
        if (innerWidth >= 768) {
            let slide = document.getElementsByClassName('slide');
            displayCol = this.state.dateArray.length;
            for (let i = 0; i < slide.length; i++) {
                slide[i].removeAttribute('style');
            }
            
        }
        this.state.moveWidth = 100 / displayCol;
        let col = document.getElementsByClassName('col')[0];
        let dateCol = document.getElementsByClassName('date')[0].offsetWidth;
        let slide = document.getElementsByClassName('slide');
        let td = document.getElementsByClassName('td');
        let slideWidth=outerWidth - dateCol;
        //1.取得可伸長寬度
        //2.設定td:nth-child(odd)寬度
        //設定title寬度
        // for (let j = 1; j < document.getElementsByClassName('td').length; j += 2) {
        //     td[i].style.width = outerWidth - dateCol;
        // }
        if(outerWidth<768){
            for (let j = 0; j < slide.length; j ++) {
                slide[j].style.width = `${slideWidth+'px'}`;
            }
            document.getElementsByClassName('slide_btn')[0].style.display='block';
        }
        console.log("COL:" + dateCol + "INNER:" + innerWidth +"OUTER:"+outerWidth);
        console.log(outerWidth - dateCol);

        //3.設定col寬度為指定尺寸
        for (let i = 0; i < document.getElementsByClassName('col').length; i++) {
            document.getElementsByClassName('col')[i].style.width = `${this.state.moveWidth + '%'}`
        }

    }
   
    render() {
        this.state.dateArray = this.getDateArray();
        this.state.tripData = this.getTripData();
        // var rowsData = this.props.cldr.tripData.map((index, trip) => {
        //     return (<CalendarTableRows key={index} tripData={trip} />)
        // })

        return (
            <table className="table">
                <CalendarTableRows tripData={this.props.cldr.tripData} range={this.state.dateArray} />
            </table>
        )
    }
    componentDidMount() {
        const renderMe = () => this.renderTable();
        renderMe();
        window.addEventListener('resize', function () { renderMe(); });
    }
}
export default CalendarTable;