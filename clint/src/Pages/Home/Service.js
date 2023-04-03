import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import SingleService from './SingleService';

const Service = () => {
    const servicesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless.',
            img : fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.”',
            img : cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!',
            img : whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>OUR SERVICES</h3>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-20'>
                {
                    servicesData.map(service => <SingleService
                        key={service.id} service = {service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;