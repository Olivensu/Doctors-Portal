import React from 'react';

const Review = (props) => {
    const {name, description,location, img} = props.review;
    return (
      <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <p>{description}</p>
            <div className='flex items-center'>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mt-4 mr-5">
                  <img src={img} />
                </div>
              </div>
              <div>
                <h4 className='text-xl'>{name}</h4>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;