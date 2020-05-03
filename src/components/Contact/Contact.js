import React, { Component } from 'react';
import { Prompt, Redirect } from "react-router-dom";
import './Contact.css';
import Form from '../../img/icons/form.png'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
            isRedirect: false
        }
    }
    isInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            isBlocking: value.length > 0,
            [name]: value
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking: false,
            isRedirect: false,
            submitted: false,
            submitResult: false
        });

        fetch('https://travellog-assignment-5th-b-e.herokuapp.com/contact',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullname: this.state.fullname,
                    email: this.state.email,
                    message: this.state.message,
                })
            }).then((res) => res.json())
            .then((json) => {
                this.setState({ submitted: true, submitResult: true });
            })
            .catch((error) => {
                this.setState({ submitted: true, submitResult: false });
            });

        var content = '';
        content += 'Name: ' + this.state.fullname;
        content += ' === Email: ' + this.state.email;
        content += ' === Content:' + this.state.message;

        console.log(content);
    }
    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                {<Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`} />}
                <div className="contact_content" id="contact">
                    <h3>Contact me</h3>
                    <img src={Form} alt="Form" />
                    <form id="contact-form" onSubmit={(event) => this.submitForm(event)}>
                        <label htmlFor="fullname">Full Name</label>
                        <input onChange={(event) => this.isInputChange(event)} type="text" id="fullname" name="fullname" placeholder="Your full name.." />
                        <label htmlFor="email">Email</label>
                        <input onChange={(event) => this.isInputChange(event)} type="email" id="email" name="email" placeholder="Your email.." />
                        <label htmlFor="message">Your Message</label>
                        <textarea onChange={(event) => this.isInputChange(event)} id="message" name="message" placeholder="Write something.." rows="5" ></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact; 