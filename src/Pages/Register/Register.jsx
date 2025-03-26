import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Register = () => {
const navigate=useNavigate()
    const {user,createUser,updateUserProfile}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => 
      {
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
           const logedUser=result.user
           console.log(user)
           updateUserProfile(data.name,data.PhotoURL)
           reset()
           Swal.fire("user Register successfull!");
           navigate("/")
        })
      }

    const [disabled,setDisabled]=useState(null)
  
    return (
        <>
         <Helmet>
                        <title>Bistro |  Register</title>
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
                <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <fieldset className="fieldset">
                    <label className="fieldset-label">Name</label>
                    <input {...register("name")} name="name" type="text" className="input" placeholder="Name" required />
                        <label className="fieldset-label">Email</label>
                        <input {...register("email")} name="email" type="email" className="input" placeholder="Email" required />
                        <label className="fieldset-label">PhotoURL</label>
                        <input {...register("PhotoURL")} name="PhotoURL" type="text" className="input" placeholder="PhotoURL" required />
                        {errors.PhotoURL && <span>This field is required</span>}
                        <label className="fieldset-label">Password</label>
                        <input {...register("password", { required: true, minLength:6 })}  name="password" type="password" className="input" placeholder="Password" required />
                        {errors.password && <span>This field is required</span>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        
                       
                        <input 
                            // disabled={disabled} 
                            className="btn btn-outline text-white bg-[#D1A054B2] border-0 border-b-4 text-center" 
                            type="submit" 
                            value="Login" 
                        />
                    </fieldset>
                </form>
                <p>Already Have a Account? please <span className='text-yellow-500'><Link to='/login' >Register</Link></span> </p>
               
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
 
        </>
    );
};

export default Register;