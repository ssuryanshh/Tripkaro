import React from 'react'
import './ReservationsTable.css'
function ReservationsTable() {
  return (
    <div className='ReservationsTable-container'>
      <table>
        <thead>
            <th>TransactionID</th>
            <th>Booking Name</th>
            <th>Adventure</th>
            <th>Person(s)</th>
            <th>Date</th>
            <th>Price</th>
            <th>Booking Time</th>
            <th>Action</th>
        </thead>
        
      </table>
    </div>
  )
}

export default ReservationsTable
