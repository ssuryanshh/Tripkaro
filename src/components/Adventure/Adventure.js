import React from "react";
import "./Adventure.css";
import { Select } from "antd";

function Adventure({ categories, budgets, durations, setCategorySelected, setDurationSelected, setBudgetSelected }) {
  return (
    <div className="adventures-container">
      <div className="new-section">
        <h1>Explore all adventures</h1>
        <p>Here's a list of places that you can explore in the city</p>
        <hr />
        <div className="filters">
          <div>
            <h3>Apply Filters and Save your time </h3>
          </div>
          <div className="filters-container">
            <div className="filter-box">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '300px' }}
                placeholder="Select Duration"
                onChange={setDurationSelected}
                options={durations.map((item) => ({ label: `${item} Hrs`, value: item }))}
              />
            </div>
            <div className="filter-box">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '300px' }}
                placeholder="Select Category"
                onChange={setCategorySelected}
                options={categories.map((item) => ({ label: item, value: item }))}
              />
            </div>
            <div className="filter-box">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '300px' }}
                placeholder="Select Budget"
                onChange={setBudgetSelected}
                options={budgets.map((item) => ({ label: `${item} INR`, value: item }))}
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Adventure;
