import { useState,useEffect } from 'react';
import Services from './Services';
import Message from './Message';
const App = () => {
  const [filter,setFilter]= useState('');
  const [countries,setCountries]=useState([]);
  const [origin,setOrigin]=useState([]);
  const [weather,setWeather]=useState([]);

  useEffect(()=>{
    Services.get_countries().then((response)=>{
      setOrigin(response.data);
    });
  },[])

  const handleFilter=(event)=>{
    console.log(event.target.value);
    setFilter(event.target.value);
    setCountries(origin.filter((country)=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  const selec_county=(name)=>{
    setCountries(origin.filter((country)=>country.name.common.toLowerCase()===name.toLowerCase()));
  }

  

  return(
    <div>
      <p>
        find countries <input value={filter} onChange={handleFilter}/>
      </p>
      <Message countries={countries} weather={weather} setWeather={setWeather} selec_county={selec_county}/>
    </div>
  )
}

export default App