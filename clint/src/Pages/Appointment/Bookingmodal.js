import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const Bookingmodal = ({treatment, date,setTreatment, refetch}) => {
  const [user, loading, error] = useAuthState(auth);
    const {_id,name, slots} = treatment;
    const formattedDate = format(date, "PP");
    const handleBooking = e=>{
        e.preventDefault();
        const slot = e.target.slot.value;
        
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formattedDate,
          slot,
          patientEmail: user.email,
          patientName: e.target.name.value,
          patientNumber: e.target.number.value,
        }

        fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          if(data.success){
            toast(`Appointment is set, ${formattedDate} at ${slot}`)
          }
          else{
            toast.error(`Already have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
          }
          refetch();
          setTreatment(null)
          
        })
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
                    slots?.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
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