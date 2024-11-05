import Services from './Services';
const Country_details= ({country,weather,setWeather}) =>{
    
      const languages=Object.values(country.languages);
      if(weather.length==0)
        {Services.fetchWeather(country.capital,setWeather)}
      else{console.log(weather[0].name)};
    return(
        <>
        <h2>{country.name.official}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p>languages</p>
        <ul>
          {languages.map((lang)=><li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} style={{width:"150px",height:"150px"}}></img>
        <h2>weather in {country.capital}</h2>
        { weather.length>0?
        <>
        <p>temperature {weather[0].main.temp} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png`}></img>
        <p>wind {weather[0].wind.speed} m/s</p>
        </>
       
        :'notcool'}
      </>
    )
}
export default Country_details;