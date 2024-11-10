import React, { useEffect, useState } from 'react';
import logo from '../assets/images/LOGO 3.png';
import { NavLink } from 'react-router-dom';
import loginlogo from '../assets/images/LOGO.png';
import { useForm } from 'react-hook-form';

const Header = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    function login(data) {
        console.log(data);
    }
    const [headerColor, setHeaderColor] = useState(false);

    useEffect(() => {
        const changeHeaderColorOnScroll = () => {
            if (window.scrollY > 50) {
                setHeaderColor(true);
            } else {
                setHeaderColor(false);
            }
        };
        window.addEventListener('scroll', changeHeaderColorOnScroll);
        return () => {
            window.removeEventListener('scroll', changeHeaderColorOnScroll);
        };
    }, []);

    return (
        <div>
            <header>
                <nav
                    className={`navbar navbar-expand-lg navbar-light header p-3 ${headerColor ? 'header-scrolled' : ''
                        }`}
                    style={{ zIndex: '999999' }}
                >
                    <div className="container-fluid">
                        <img src={logo} alt="Main Logo" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active mx-3" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active mx-3" aria-current="page" to="/about">
                                        About us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active mx-3" aria-current="page" to="/service">
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active mx-3" aria-current="page" to="/contact">
                                        Contact us
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle mx-3"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-regular fa-circle-user mx-2"></i>
                                        Account
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Cancel Ticket
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Change Travel Date
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Show My Ticket
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Email/Sms
                                            </a>
                                        </li>
                                        <li>
                                            <NavLink
                                                type="button"
                                                className="btn btn-dark w-100 mt-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Login/Signup
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-3 mx-auto p-5 shadow login mx-auto">
                                    <img src={loginlogo} alt="Login Logo" />
                                    <h4 className="my-2">
                                        Sign in to avail exciting <br /> discounts and cashback
                                    </h4>
                                    <form method="post" onSubmit={handleSubmit(login)}>
                                        <div className="my-3">
                                            <input
                                                type="number" {...register('mobile',
                                                    {
                                                        required: {
                                                            value: true,
                                                            message: "Enter Mobile Number"
                                                        },
                                                        minLength: {
                                                            value: 10,
                                                            message: "Enter Correct Mobile Number"
                                                        }
                                                    }
                                                )}
                                                className="form-control"
                                                placeholder="Enter Your Mobile Number"
                                            />
                                            <p className='text-danger'>{errors?.mobile?.message}</p>
                                        </div>
                                        <button className="btn btn-danger w-100 my-3">
                                            GENERATE OTP (One Time Password)
                                        </button>
                                        <h5 className="my-2">OR, Connect using Social Accounts</h5>
                                        <button className="btn btn-danger w-100">
                                            <i className="fa-brands fa-google"></i> Sign in with Google
                                        </button>
                                    </form>
                                    <p className="text-center my-2 text-dark">
                                        By signing up, you agree to <br /> our terms & conditions and privacy
                                        policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
