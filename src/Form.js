import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return(
            <form className = "demoForm">
                <h2>Sign Up</h2>

                <div className = "form-group">
                    <label htmlFor = "email">Email address</label>
                    <input type = "email" className = "form-control" name= "email"/>
                </div>

                <div className = "form-group">
                    <label htmlFor = "password">Password</label>
                    <input type = "password" className = "form-control" name = "password"/>
                </div>

                <button type = "submit" className = "btn  btn-primary">
                    SIgn up
                </button>
            </form>
        )
    }
}

export default Form