import React, { Component } from 'react';
import Detail from './Detail';
import './Blogs.css'
//Package for put, get, patch, delete
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogslist: [],
            placesname: [],
            searchid: 'Ben Tre'
        }
    }
    componentDidMount() {
        let one = "https://travellog-6th-backend.herokuapp.com/blogs";
        let two = "https://travellog-6th-backend.herokuapp.com/places"
        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        trackPromise(
            axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
                const responseOne = responses[0]
                const responseTwo = responses[1]
                const blogslist = responseOne.data;
                const placesname = responseTwo.data;
                this.setState({ blogslist, placesname });
            })).catch(errors => {
                console.error(errors);
            })
        )
    }
    isInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            submitted: false,
            submitResult: false
        });
        fetch('https://travellog-6th-backend.herokuapp.com/blogs',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    place_id: this.state.name,
                    name: this.state.name,
                    title: this.state.title,
                    content: this.state.content,
                })
            }).then((res) => res.json())
            .then((json) => {
                this.setState({ submitted: true, submitResult: true });
                alert("Succeeded. Check on the first commnet.");
                axios.get('https://travellog-6th-backend.herokuapp.com/blogs')
                    .then(res => {
                        const blogslist = res.data;
                        this.setState({ blogslist });
                    })
            })
            .catch((error) => {
                this.setState({ submitted: true, submitResult: false });
            });
    }
    submitSearchForm = (event) => {
        event.preventDefault();
        console.log(this.state.search);
        axios.get(`https://travellog-6th-backend.herokuapp.com/blogs/` + this.state.search)
            .then(res => {
                const blogslist = res.data;
                this.setState({ blogslist });
            })
    }

    render() {
        const { blogslist, placesname } = this.state;
        return (
            <div >
                <div className="blog_content" id="contact">
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseAdding" aria-expanded="false" aria-controls="collapseAdding">
                        Click to add new comments
                    </button>
                    <div className="collapse" id="collapseAdding">
                        <form id="blog-form" onSubmit={(event) => this.submitForm(event)}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Name Place</label>
                                    <select onChange={(event) => this.isInputChange(event)} type="text" id="name" name="name">
                                        <option value="" hidden>Your place choice...</option>
                                        {
                                            placesname.map((data, i) => {
                                                return (
                                                    <option key={i}>{data.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="title">Title</label>
                                    <input onChange={(event) => this.isInputChange(event)} type="text" id="title" name="title" placeholder="Your title .." required />
                                </div>
                            </div>
                            <label htmlFor="content">Content</label>
                            <textarea onChange={(event) => this.isInputChange(event)} id="content" name="content" placeholder="Write something.." rows="5" required></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <form className="search-form">
                    <label htmlFor="search">Sort place</label>
                    <div className="input-group">
                        <select onChange={(event) => this.isInputChange(event)} className="form-control" type="text" id="search" name="search">
                            <option value="" hidden>Your Search choice...</option>
                            {
                                placesname.map((data, i) => {
                                    return (
                                        <option key={i}>{data.name}</option>
                                    )
                                })
                            }
                        </select>
                        <div className="input-group-btn">
                            <button onClick={(event) => this.submitSearchForm(event)} className="btn btn-default" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </form>

                {
                    blogslist.map((data, i) => {
                        return (
                            <Detail key={i} Pname={data.name} Ptitle={data.title} Pcontent={data.content} Pcreated={data.created} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Blogs;

