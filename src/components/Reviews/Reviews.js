import React, { Component } from 'react';
import './Reviews.css'
import ReviewsList from './ReviewsList';
class Reviews extends Component {
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
        return (
            <div className="album py-5 bg" id="reviews">
                <h5 style={{ textAlign: 'center', margin: '10px' }}>Get into json file <a href="https://raw.githubusercontent.com/duonglethanbinh/data_json_as5/master/database.json">here</a></h5>
                <div className="container">
                    <div className="row">
                        {locationName.map((location, i) => {
                            return (
                                <ReviewsList key={i} id={location.id} name={location.name} image={location.image} />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews; 