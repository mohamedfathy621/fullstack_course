import Country_details from "./Country_details";
const Message= (props)=>{
    if(props.countries.length==0){
      if(props.weather.length>0){
        props.setWeather([]);
      }
      return <p> search for a country</p>
    }
    else if(props.countries.length>10){
      if(props.weather.length>0){
        props.setWeather([]);
      }
      return <p>too many matches,specify another filter</p>
    }
    else if(props.countries.length===1){
      return (
        <Country_details country={props.countries[0]} weather={props.weather} setWeather={props.setWeather}/>
      )
    }
    else{
      if(props.weather.length>0){
        setWeather([]);
      }
      return (
        props.countries.map((country)=><p key={country.name.common}>{country.name.common} <button onClick={()=> props.selec_county(country.name.common)}>show</button></p>)
      )
    }
  }

  export default Message;