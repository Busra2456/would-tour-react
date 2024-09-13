
import { useState } from 'react';
import './country.css'
// import CountryDetail from '../CountryDetail/CountryDetail';


const Country = ({country,handelVisitedCountries,handelVisitedFlags}) => {
      const {name,flags,population,area,cca3} = country;

      const [visited, setVisited] = useState(false);

      const handelVisited = () =>{
       setVisited(!visited);  
      }

     


      return (
            <div className={`country ${visited ? 'visited': 'non-visited'}`} >
                <h3 style={{color: visited ? 'purple':'red'}} >Name: {name.common} </h3>  
            <img src={flags.png} alt="" />            
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>code: {cca3} </small></p>

            <button onClick={ ()=> handelVisitedCountries(country)} > Mark visited</button>
<br />
<button onClick={ ()=> handelVisitedFlags(country.flags.png)} >Add flag</button>

            <button onClick={handelVisited} > {visited ? 'Visited' : 'Going'} </button> <br /> <br />
            {visited ? 'I have visited this country. ':'I want to visited.'}

            <hr />
            {/* <CountryDetail
            country={country}
            handelVisitedCountries={handelVisitedCountries}
            handelVisitedFlags={handelVisitedFlags}
            
            ></CountryDetail> */}
            </div>
      );
};

export default Country;