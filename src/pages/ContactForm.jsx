import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    function regist(data) {
        console.log(data);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3949642109524!2d72.58642947476879!3d22.972499318195954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e858bf1abc8b3%3A0x448afc323ba7268f!2sSahara%20Travels!5e0!3m2!1sen!2sin!4v1729610584194!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-lg-6 contact">
                        <form className='shadow my-2 p-5 col-12 c-form' method='post' onSubmit={handleSubmit(regist)}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="my-3">
                                        <label htmlFor="">UserName</label>
                                        <input type='text' {...register('name',
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Enter username"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "must be 3 charcters"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "must be 10 charcters"
                                                }
                                            }
                                        )} placeholder='Enter UserName' className='form-control rounded-pill' />
                                        <p className='text-danger'>{errors?.name?.message}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="my-3">
                                        <label htmlFor="">Email</label>
                                        <input type='email' {...register('email',
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Enter Email"
                                                },
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Enter a valid email"
                                                }
                                            }
                                        )} placeholder='Enter Email' className='form-control rounded-pill ' />
                                        <p className='text-danger'>{errors?.email?.message}</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="my-3">
                                        <label htmlFor="">Mobile</label>
                                        <input type='email' {...register('mobile',
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
                                        )} placeholder='Enter Mobile' className='form-control rounded-pill' />
                                        <p className='text-danger'>{errors?.mobile?.message}</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="my-3">
                                        <label htmlFor="">Message</label>
                                        <textarea type='email' {...register('message',
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Enter a Message"
                                                },
                                                minLength: {
                                                    value: 10,
                                                    message: "must be 10 words.."
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: "must be 15 words.."
                                                }
                                            }
                                        )} placeholder='Enter Message' className='form-control rounded-pill' />
                                        <p className='text-danger'>{errors?.message?.message}</p>
                                    </div>
                                </div>
                                <button className='btn btn-danger rounded-pill'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
