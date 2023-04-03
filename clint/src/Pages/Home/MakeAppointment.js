import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div>
            <section style={{background: `url(${appointment})`}} className='mt-16 flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-120px]' src={doctor} alt="" />
                </div>
                <div  className='flex-1'>
                    <h3 className='text-xl text-primary'>Appointment</h3>
                    <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                    <p className='text-white'>First ever online platform for doctor appointments in Bangladesh. Find a nearby doctor or dentist and book an appointment instantly. And it's free!</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;