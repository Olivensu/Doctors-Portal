import React from 'react';
import { format } from 'date-fns';

const Bookingmodal = ({treatment, date,setTreatment}) => {
    const {name, slots} = treatment;
    const handleBooking = e=>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot, name, )
        setTreatment(null);
    }
    return (
      <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <label
              for="booking-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="font-bold text-center text-secondary text-lg">
              Booking For: {name}
            </h3>
            <form onSubmit={handleBooking}>
              <input
                type="text"
                value={format(date, "PP")}
                disabled
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <select name='slot' class="block my-5 m-auto select select-bordered w-full max-w-sm">
                {
                    slots.map(slot=> <option value={slot}>{slot}</option>)
                }
              </select>
              <input
                type="text"  name='name'
                placeholder="Full Name"
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <input
                type="text"  name='number'
                placeholder="Phone Number"
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="email" name='email'
                placeholder="Email"
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary block my-5 m-auto  w-full max-w-sm"
              />
            </form>
            {/* <div class="modal-action">
              <label for="booking-modal" class="btn">
                Yay!
              </label>
            </div> */}
          </div>
        </div>
      </div>
    );
};

export default Bookingmodal;