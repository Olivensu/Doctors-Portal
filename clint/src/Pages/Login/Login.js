import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(user || gUser){
      console.log(user || gUser);
      navigate(from, {replace: true})
    }
    let signInError;
    if(error || gError){
      signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    if(loading || gLoading){
      return <Loading></Loading>
    }

    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
    };

    const onSubmit = (data) => {
      console.log(data);
       signInWithEmailAndPassword(data.email, data.password);
    };
    return (
      <div className="flex justify-center h-screen items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  placeholder="Type Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is required'
                    },
                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'error message'
                  })}
                  
                />
                {errors.email?.type === 'required' && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 Characters or longer'
                    }
                  })}
                  
                />
                <label className="label">
                  <Link to='/ResetPassword' className="text-sm text-primary label-text">Forgot Password?</Link>
                </label>
                {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
              </div>
              {signInError}
              <input type="submit" value="Login" placeholder="Type here" className="btn btn-secondary mt-5 input input-bordered w-full max-w-xs" />
            </form>
            <p className='text-sm text-center'>Ner to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-secondary"
            >
              Continue with google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;