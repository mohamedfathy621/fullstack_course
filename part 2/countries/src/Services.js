import axios from 'axios'
const fetchWeather = async (city,setWeather) => {
    const apiKey = 'ed73e9ed1773e06705ed87616844013e'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather([data]);
        console.log(data); // Handle the weather data
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
  };
const get_countries=()=>{
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
}
export default {fetchWeather,get_countries}