import React, { useState, useEffect } from 'react'
import MealCards from './MealCards';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

 useEffect(() => {
  const fetchInitialMeals = async () => {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const json = await res.json();
      setData(json.meals || []); 
    } catch (err) {
      setMsg("Failed to load meals");
    }
  };
  fetchInitialMeals();
}, []);


  const handleInput = (event) => setSearch(event.target.value);

  const myFun = async () => {
    if (search.trim() === "") {
      setMsg("Please Enter Something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <>
      <h1 className="head">FOOD RECIPE APP</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Dish"
            onChange={handleInput}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <h4 className="msg">{msg}</h4>
        <MealCards detail={data} />
      </div>
    </>
  );
};

export default MainPage;
