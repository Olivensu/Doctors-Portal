import React from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
      auth
    );
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let signInError;
    if(resetError){
      signInError = <p className='text-red-500'>{resetError?.message}</p>
    }

    if(sending){
      return <Loading></Loading>
    }

    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
    };

    const onSubmit = async (data) => {
      console.log(data);
      await sendPasswordResetEmail(data.email, actionCodeSettings)
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

              {signInError}
              <input type="submit" value="Reset Password" placeholder="Type here" className="btn btn-secondary mt-5 input input-bordered w-full max-w-xs" />
            </form>
            <p className='text-sm text-center'>Ner to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
            <div className="divider">OR</div>
          </div>
        </div>
      </div>
    );
};

export default ResetPassword;