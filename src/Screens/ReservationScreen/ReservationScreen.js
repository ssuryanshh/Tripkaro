import React from 'react'

import ReservationsTable from '../../components/ReservationsTable/ReservationsTable'
import './ReservationScreen.css'
function ReservationScreen() {
  return (
    <>
    <div className='reservations-container'>
      
      <h1>Your Reservations</h1>
      <br/>
      <br/>
      <ReservationsTable/>
    </div>
    </>
  )
}

export default ReservationScreen
