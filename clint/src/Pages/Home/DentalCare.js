import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className='lg:m-28 md:m-20 sm:m-8'>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
            Find The Right Dentist Near You. Accredited Clinics Staffed By Caring Professionals. Improve Your Dental Health With Straighter Teeth. All Health Funds Welcome.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default DentalCare;