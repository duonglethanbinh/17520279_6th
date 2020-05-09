import React, { Component } from 'react';
import './Detail.css';
class Detail extends Component {
    render() {
        const { Pname, Ptitle, Pcontent, Pcreated } = this.props;
        // console.log(Pcreated);
        let date = new Date(Pcreated)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        // console.log(year + '-' + month + '-' + dt);
        return (
            <div className="main_box">
                <div className="paras" >
                    <h4>Place: {Pname}</h4>
                    <h3>{Ptitle}</h3>
                    <p>{Pcontent}</p>
                    <h4><i> Created in:&nbsp;&nbsp;&nbsp;{`${year}-${month}-${dt}`}&nbsp;&nbsp;&nbsp;{`${hour}:${min}:${sec} `}</i></h4>
                </div>
            </div>
        );
    }
}

export default Detail;