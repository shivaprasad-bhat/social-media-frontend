import React from 'react';
import { Link } from 'react-router-dom';
const Signin = () => {
    return (
        <div className="my-card">
            <div id="auth-card" className="card input-filed">
                <h2 className="center">Sign In</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light blue darken-2 center">
                    Sign In
                </button>
                <h5 className="center">
                    <Link to="/signup">New User?</Link>
                </h5>
            </div>
        </div>
    );
};

export default Signin;
