import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            location: "California",
            description: "The doctor portal site is an excellent platform for managing medical appointments and health information. Its user-friendly interface allows for easy scheduling and quick access to medical records, while its communication features enable patients to interact with their doctors in a convenient and efficient manner.",
            location: "California",
            img: people1
        },
        {
            id: 2,
            name: "Winson Herry",
            location: "California",
            description: "I found the doctor portal site to be an efficient and effective way to manage my healthcare needs. The platform offers a range of useful features, such as appointment booking, prescription requests, and online consultation, which allow me to stay on top of my health with ease and convenience.",
            location: "California",
            img: people2
        },
        {
            id: 3,
            name: "Winson Herry",
            location: "California",
            description: "The doctor portal site is a great resource for anyone looking for a more streamlined and organized approach to healthcare. With its intuitive design and comprehensive functionality, the platform provides patients with all the tools they need to manage their medical appointments and health information in one convenient location.",
            location: "California",
            img: people3
        },
    ]
    return (
        <div className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patirnts say</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;