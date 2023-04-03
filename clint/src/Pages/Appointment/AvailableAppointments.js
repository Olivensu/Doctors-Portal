import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import Bookingmodal from './Bookingmodal';

const AvailableAppointments = ({date}) => {
    const [services, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=> setService(data))
    },[])
    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    services.map(service=> <AppointmentService
                    key = {service._id}
                    service = {service}
                    setTreatment = {setTreatment}
                    >
                    </AppointmentService>)
                }
            </div>
            {treatment &&  <Bookingmodal date = {date} setTreatment = {setTreatment} treatment={treatment}></Bookingmodal>}
        </div>
    );
};

export default AvailableAppointments;