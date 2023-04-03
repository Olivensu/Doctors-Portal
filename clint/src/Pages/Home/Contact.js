import React from 'react';
import treatment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div style={{background: `url(${treatment})`}} className='my-28 py-16 text-center'>
            <h4 className='text-xl font-bold text-primary'>Contact Us</h4>
            <h2 className='text-3xl text-white'>Stay connected with us</h2>
            <input type="text" placeholder="Type here" className="block my-5 m-auto input w-full max-w-sm" />
            <input type="text" placeholder="Type here" className="block my-5 m-auto  input w-full max-w-sm" />
            <textarea className="block textarea w-full my-5 m-auto   max-w-sm" placeholder="Bio"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default Contact;