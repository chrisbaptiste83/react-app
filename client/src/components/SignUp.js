import React, { Component } from 'react';
import { connect } from "react-redux"
import { signup } from "../actions" 
import {Jumbotron} from 'react-bootstrap'; 



class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.signup(this.state)
            .then(() => {
                this.props.history.push("/tactical_packages")
        })
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ""
        })
    }


    render() {
        const { email, username, password, password_confirmation } = this.state
        return (
            <div> 
                <center>
                <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
                <h1>Sign Up</h1><br></br> 
                </Jumbotron> 
                <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
                <form onSubmit={this.handleSubmit}> 
                <h2>Email</h2><br></br>
                    <p>
                        <input 
                            style={{width: "725px"}} 
                            placeholder="Email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p> 
                    <h2>Username</h2><br></br>
                    <p>
                        <input
                            style={{width: "725px"}} 
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </p> 
                    <h2>Password</h2><br></br>
                    <p>
                        <input 
                            style={{width: "725px"}} 
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p> 
                    <h2>Password Confirmation</h2><br></br>
                        <input 
                            style={{width: "725px"}} 
                            placeholder="Password Confirmation"
                            type="password"
                            name="password_confirmation"
                            value={password_confirmation}
                            onChange={this.handleChange}
                        />
                    </p><br></br>
                    <input type="submit" value="Create" />

                </form>
                </Jumbotron>
                </center>         
            </div>
        )
    }
}


export default connect(null, { signup })(SignUp)