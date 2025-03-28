import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa6';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';


const Login = () => {
    const axiosPublic=UseAxiosPublic()
    const navigate=useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname ;
console.log("location is state", location.state);
console.log(from);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
const {user,signIn,handleGoogleLogin}=useContext(AuthContext)


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const formInfo = { email, password };
        console.log(formInfo);
        signIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
             toast.success('user  Login successfull')
             navigate(location.state?.from || '/', { replace: true });
        })

    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };
    const GoogleLogin = (e) => {
        console.log('click')
        handleGoogleLogin()
            .then(res => {
                console.log(res);
                const userInfo={
                    email:res.user?.email,
                    name:res.user?.displayName
                }
                axiosPublic.post('/user',userInfo)
                .then(res=>{
                    console.log(res.data)
                })
                
                navigate(location.state?.from || '/', { replace: true });
            })
            .catch(error => {
                console.error("Login Error:", error);
            });
    };
    

    return (
        <>
         <Helmet>
                        <title>Bistro | Login</title>
                    </Helmet>


                    <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" required />
                            
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" required />
                            
                            <div><a className="link link-hover">Forgot password?</a></div>
                            
                            <label>
                                <LoadCanvasTemplate />
                            </label>
                            
                            <input 
                                type="text" 
                                ref={captchaRef} 
                                className="input" 
                                placeholder="Type the text above" 
                                name="captcha" 
                                required 
                            />
                            
                            <button type="button" onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">
                                Validate
                            </button>
                            
                            <input 
                                disabled={disabled} 
                                className="btn btn-outline text-white bg-[#D1A054B2] border-0 border-b-4 text-center" 
                                type="submit" 
                                value="Login" 
                            />
                        </fieldset>
                    </form>
                    <button onClick={GoogleLogin} className="btn p-4 bg-base-100"><FaGoogle/> </button>
                    <p>New Here ? please  <span className='text-yellow-500'><Link to='/register' >Reister</Link></span> </p>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
        </>
        
    );
};

export default Login;
