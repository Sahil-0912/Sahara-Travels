import React from 'react';
import loginlogo from '../assets/images/LOGO.png';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    function login(data) {
        console.log(data)
    }
    return (
        <div className="login-container">
            <div className="col-3 mx-auto p-5 shadow login mx-auto">
                <img src={loginlogo} alt="Login Logo" />
                <h4 className="my-2">Sign in to avail exciting <br /> discounts and cashback</h4>
                <form method='post' onSubmit={handleSubmit(login)}>

                    <div className="my-3">
                        <input type="number" {...register('mobile',
                            {
                                required: {
                                    value: true,
                                    message: "Enter a Mobile Number"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Enter a correct mobile number"
                                }
                            }
                        )} className="form-control" placeholder="Enter Your Mobile Number" />
                        <p className='text-danger'>{errors?.mobile?.message}</p>
                    </div>
                    <button className="btn btn-danger w-100 my-3">GENERATE OTP (One Time Password)</button>
                    <h5 className="my-2">OR, Connect using Social Accounts</h5>
                    <button className="btn btn-danger w-100">
                        <i className="fa-brands fa-google"></i> Sign in with Google
                    </button>
                </form>
                <p className="text-center my-2 text-dark">
                    By signing up, you agree to <br /> our terms & conditions and privacy policy
                </p>
            </div>
        </div>
    );
};

export default Login;
