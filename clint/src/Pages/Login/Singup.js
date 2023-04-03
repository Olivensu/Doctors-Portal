import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Singup = () => {
    
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [sendEmailVerification, sending, varificationError] = useSendEmailVerification(
        auth
      );
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigate = useNavigate();
    if(user || gUser){
      console.log(user || gUser);
    }
    let signInError;
    if(error || gError || updateError || varificationError){
      signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message || varificationError?.message}</p>
    }

    if(loading || gLoading || updating || sending){
      return <Loading></Loading>
    }

    const onSubmit = async data => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      const success = await sendEmailVerification();
          if (success) {
            alert('Sent email');
          }
      console.log('update done');
      navigate('/appointment')
    };
    return (
        <div className="flex justify-center h-screen items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is required'
                    }
                  })}
                  
                />
                {errors.name?.type === 'required' && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
              </div>
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
                {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
              </div>
              {signInError}
              <input type="submit" value="Sign Up" placeholder="Type here" className="btn btn-secondary mt-5 input input-bordered w-full max-w-xs" />
            </form>
            <p className='text-sm text-center'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
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

export default Singup;