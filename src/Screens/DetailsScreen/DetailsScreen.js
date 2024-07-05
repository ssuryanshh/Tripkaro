import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Details from '../../components/Details/Details';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import "./DetailsScreen.css"

function DetailsScreen() {
  const {id} = useParams();
  const [details, setDetails] = useState();

  useEffect(()=>{
    const API_ENDPOINT = `https://makemytrip-backend-w2d2.onrender.com/adventures/detail?adventure=${id}`;
    fetch(API_ENDPOINT).then((res)=>{
      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      return res.json();
    })
   .then((data)=>{
      setDetails(data);
    })
  },[id])

  return (
    <div className='details-screen-container'>
      <div className='details'>
        {details && <Details details={details} />}
      </div>
      <div className='reservation-form-container'>
      {details && <ReservationForm details={details} />}
        
      </div>

    </div>
  )
}

export default DetailsScreen