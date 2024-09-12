
import { useState } from 'react';
import './country.css'

const Country = ({country,handelVisitedCountries}) => {
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



            <button onClick={handelVisited} > {visited ? 'Visited' : 'Going'} </button> <br /> <br />
            {visited ? 'I have visited this country. ':'I want to visited.'}
            </div>
      );
};

export default Country;