import React, { useEffect, useState } from 'react';
import Adventure from '../../components/Adventure/Adventure';
import AdventureCard from '../../components/AdventureCard/AdventureCard';
import './AdventureScreen.css';
import { useParams } from 'react-router-dom';

function AdventureScreen() {
  const { id } = useParams();
  const [adventureData, setAdventureData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [durations, setDurations] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [filteredAdventureData, setFilteredAdventureData] = useState([]);
  
  const [categorySelected, setCategorySelected] = useState([]);
  const [durationSelected, setDurationSelected] = useState([]);
  const [budgetSelected, setBudgetSelected] = useState([]);

  const getUniqueCategories = (arr) => {
    const categories = arr.map(item => item.category);
    return [...new Set(categories)];
  };

  const getDurationIntervals = (arr) => {
    const durations = arr.map(item => item.duration);
    const ranges = durations.map((item) => {
      const rem = item % 5;
      const lowerRange = item - rem;
      const higherRange = lowerRange + 5;
      return `${lowerRange}-${higherRange}`;
    });
    const newRanges = [...new Set(ranges)];
    return newRanges.sort((curr, next) => {
      const a = parseInt(curr.split("-")[0]);
      const b = parseInt(next.split("-")[0]);
      return a > b ? 1 : -1;
    });
  };

  const getBudgetIntervals = (arr) => {
    const budgets = arr.map(item => item.costPerHead);
    const ranges = budgets.map((item) => {
      const rem = item % 2000;
      const lowerRange = item - rem;
      const higherRange = lowerRange + 2000;
      return `${lowerRange}-${higherRange}`;
    });
    const newRanges = [...new Set(ranges)];
    return newRanges.sort((curr, next) => {
      const a = parseInt(curr.split("-")[0]);
      const b = parseInt(next.split("-")[0]);
      return a > b ? 1 : -1;
    });
  };

  useEffect(() => {
    const result = adventureData.filter((item) => {
      if (categorySelected.length === 0) {
        return true;
      }
      return categorySelected.includes(item.category);
    }).filter((item) => {
      if (budgetSelected.length === 0) {
        return true;
      }
      const price = item.costPerHead;
      const rem = price % 2000;
      const lowerRange = price - rem;
      const higherRange = lowerRange + 2000;
      const range = `${lowerRange}-${higherRange}`;
      return budgetSelected.includes(range);
    }).filter((item) => {
      if (durationSelected.length === 0) {
        return true;
      }
      const duration = item.duration;
      const rem = duration % 5;
      const lowerRange = duration - rem;
      const higherRange = lowerRange + 5;
      const range = `${lowerRange}-${higherRange}`;
      return durationSelected.includes(range);
    });

    setFilteredAdventureData(result);
  }, [categorySelected, budgetSelected, durationSelected, adventureData]);

  useEffect(() => {
    const API_ENDPOINT = `https://makemytrip-backend-w2d2.onrender.com/adventures?city=${id}`;
    fetch(API_ENDPOINT)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setAdventureData(data);
        setFilteredAdventureData(data);

        const uniqueCategories = getUniqueCategories(data);
        setCategories(uniqueCategories);

        const uniqueIntervals = getDurationIntervals(data);
        setDurations(uniqueIntervals);

        const uniqueBudgets = getBudgetIntervals(data);
        setBudgets(uniqueBudgets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]); 

  return (
    <div className="adventure-container">
      <Adventure 
        categories={categories} 
        durations={durations} 
        budgets={budgets} 
        setCategorySelected={setCategorySelected} 
        setDurationSelected={setDurationSelected} 
        setBudgetSelected={setBudgetSelected}
      />
      <div className="adventure-card-container">
        {filteredAdventureData.length === 0 && <h2>No Result Found!</h2>}
        {filteredAdventureData.map((adventure) => (
          <AdventureCard adventure={adventure} key={adventure.id} />
        ))}
      </div>
    </div>
  );
}

export default AdventureScreen;
