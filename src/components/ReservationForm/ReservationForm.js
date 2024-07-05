import React, { useState } from "react";
import { Input, Button } from "antd";
import "./ReservationForm.css";

function ReservationForm({ details }) {
  const {
    id,
    available,
    costPerHead,
  } = details;
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [nameInput, setNameInput] = useState("");

  const convertDateFormat = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  const bookingHandler = () => {
    const formData = new FormData();
    formData.append("adventure", id);
    formData.append("name", nameInput);
    formData.append("date", convertDateFormat(date)); 
    console.log(convertDateFormat(date)) // Convert date format
    formData.append("person", guests);

    const API_URL = "https://makemytrip-backend-w2d2.onrender.com/reservations/new";

    fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="form-container">
      <p>Name</p>
      <Input
        placeholder="Enter Your Name"
        style={{ width: "100%" }}
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      <br/>
      <p>Pick a date</p>
      <input 
        onChange={(e) => { setDate(e.target.value) }} 
        style={{ fontSize: "x-large" }} 
        type="date"
      />
      <p>Number of People</p>
      <Input
        placeholder="By Default 1 Person"
        style={{ width: "100%" }}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
      />
      <p>Cost Per Person (Rs. {costPerHead})</p>
      <hr />
      <div className="total">
        <p>Total Cost</p>
        <p>Rs. {guests * costPerHead}</p>
      </div>
      <Button
        style={{ width: "100%", backgroundColor: "orange", color: "white" }}
        size="large"
        onClick={bookingHandler}
      >
        Reserve
      </Button>
    </div>
  );
}

export default ReservationForm;
