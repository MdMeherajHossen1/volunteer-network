import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
const Login = () => {
    const { handleGoogleSignIn } = useAuth()
    return (
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <div className="text-center border p-5 shadow-lg">
                <h3>Login With</h3>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary rounded-pill">Continue With Google</button>
                <p>Do you have an account? <Link to="/register">Create an Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;