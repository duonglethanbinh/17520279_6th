import React, { Component } from 'react';
import Detail from './Detail';
import './Blogs.css'
//Package for put, get, patch, delete
import axios from 'axios';
class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogslist: [],
        };
    }
    componentDidMount() {
        axios.get('https://travellog-6th-backend.herokuapp.com/blogs/')
            .then(res => {
                const blogslist = res.data;
                this.setState({ blogslist });
            })
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
                    name: this.state.name,
                    title: this.state.title,
                    content: this.state.content,
                })
            }).then((res) => res.json())
            .then((json) => {
                this.setState({ submitted: true, submitResult: true });
                alert("Succeeded. Sroll down to the end for checking.");
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
    render() {
        const { blogslist } = this.state;
        return (
            <div >
                <div className="blog_content" id="contact">
                    <h3>Add new comments</h3>
                    <form id="blog-form" onSubmit={(event) => this.submitForm(event)}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Name Place</label>
                                <input onChange={(event) => this.isInputChange(event)} type="text" id="name" name="name" placeholder="Name of city.." required />
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
                {blogslist.map((data, i) => {
                    return (
                        <Detail key={i} Pname={data.name} Ptitle={data.title} Pcontent={data.content} />
                    )
                })}
            </div>
        )
    }
}

export default Blogs;

