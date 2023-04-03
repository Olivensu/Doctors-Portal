import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;