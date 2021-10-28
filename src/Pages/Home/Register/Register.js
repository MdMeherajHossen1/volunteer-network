import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
        reset();
    }
    return (
        <div className=" py-5">
            <div className="text-center border p-5 shadow-lg w-50 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                    <input className="border-bottom border-warning mb-2 col-10 p-2 border-0 " defaultValue={user.displayName} {...register("email", { required: true })} placeholder="UserName or Email" />
                    <input className="border-bottom border-warning mb-2 col-10 p-2 border-0 " defaultValue={user.email} {...register("name", { required: true })} placeholder="Full Name" />
                    <input className="border-bottom border-warning mb-2 col-10 p-2 border-0 " type="date" {...register("date", { required: true })} placeholder="Date" />
                    <input className="border-bottom border-warning mb-2 col-10 p-2 border-0 " {...register("disc", { required: true })} placeholder="Discription" />
                    <input className="border-bottom border-warning mb-2 col-10 p-2 border-0 " {...register("orgBooks", { required: true })} placeholder="Organize books at your library" />
                    <input className="btn btn-primary col-10 border-0" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;



{/* <div >
<div >
    <h3>Login With</h3>
    <button onClick={handleGoogleSignIn} className="btn btn-outline-secondary rounded-pill">Continue With Google</button>
    <p>Do you have an account? <Link to="/register">Create an Account</Link> </p>

</div>
</div> */}