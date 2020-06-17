import React, { Component } from 'react';
import { connect } from "react-redux"
import { loginUser } from "../actions"
import {Jumbotron} from 'react-bootstrap'; 


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
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
        this.props.loginUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
        this.props.history.push("/tactical_packages")
    }


    render() {
        const { email, password } = this.state
        return (
            <div> 
                <center>
                <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
                    <h1>Log In</h1><br></br>
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
                        </p><br></br>
                        <p> 
                        <h2>Password</h2><br></br>
                            <input 
                                style={{width: "725px"}} 
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </p><br></br>
                        <input type="submit" value="Log In" />
                    </form> 
               </Jumbotron> 
               </center> 
            </div>
        )
    }
}


export default connect(null, { loginUser })(Login)