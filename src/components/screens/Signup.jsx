import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="my-card">
            <div id="auth-card" className="card">
                <h2 className="center">Sign Up</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="btn waves-effect waves-light blue darken-2 center">
                    Sign Up
                </button>
                <h5 className="center">
                    <Link to="/signin">Already Have an Account?</Link>
                </h5>
            </div>
        </div>
    );
};

export default Signup;
