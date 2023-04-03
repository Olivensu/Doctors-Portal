import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Bookingmodal = ({treatment, date,setTreatment}) => {
  const [user, loading, error] = useAuthState(auth);
    const {name, slots} = treatment;
    const handleBooking = e=>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot, name, )
        setTreatment(null);
    }
    return (
      <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-center text-secondary text-lg">
              Booking For: {name}
            </h3>
            <form onSubmit={handleBooking}>
              <input
                type="text"
                value={format(date, "PP")}
                disabled
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <select name='slot' className="block my-5 m-auto select select-bordered w-full max-w-sm">
                {
                    slots.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
                }
              </select>
              <input
                type="text"  name='name'
                placeholder='Name'
                value={user?.displayName || ''}
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <input
                type="text"  name='number'
                placeholder='Enter your number'
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="email" name='email'
                placeholder='Email'
                value={user?.email || ''}
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary block my-5 m-auto  w-full max-w-sm"
              />
            </form>
            {/* <div className="modal-action">
              <label for="booking-modal" className="btn">
                Yay!
              </label>
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default Bookingmodal;