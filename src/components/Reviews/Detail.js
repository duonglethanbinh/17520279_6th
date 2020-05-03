import React, { Component } from 'react';
import './Detail.css';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationName: [],
        };
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/database.json')
            .then(response => response.json())
            .then(data => this.setState({ locationName: data }));
    }
    render() {
        const { locationName } = this.state;
        let pathid = this.props.match.params.id;
        return (
            <div>
                {
                    locationName.map((loc, i) => {
                        if (loc.id === pathid) {
                            return (
                                <div className="main_box" key={i}>
                                    <img src={loc.image} className="rounded" alt="card" />
                                    {loc.description.map((des, j) => {
                                        return (
                                            <div key={j} className="paras">
                                                <h3>{des.title}</h3>
                                                <p>{des.content}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        } return ''
                    })
                }
            </div>
        );
    }
}

export default Detail;