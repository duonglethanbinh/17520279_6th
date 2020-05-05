import React, { Component } from 'react';
import './Detail.css';
class Detail extends Component {
    render() {
        const { Pname, Ptitle, Pcontent } = this.props;
        return (
            <div className="main_box">
                <div className="paras" >
                    <h4>Place: {Pname}</h4>
                    <h3>{Ptitle}</h3>
                    <p>{Pcontent}</p>
                </div>
            </div>
        );
    }
}

export default Detail;