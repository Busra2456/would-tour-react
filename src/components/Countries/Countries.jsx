import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css';


const Countries = () => {
      const [countries,setCountries] = useState([]);

      const[visitedCountries,setVisitedCountries] = useState([]);

      const handelVisitedCountries = country =>{ console.log('add this to your visited country')
            const newVisitedCountries = [...visitedCountries,country];
            setVisitedCountries(newVisitedCountries);

      }

      useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all') 
        .then(res => res.json())
        .then(data =>setCountries(data))  
      },[])
      return (
            <div  >
             <h3>Countries :{countries.length} </h3> 
             <div>
                  
                  <h5>Visited countries: {visitedCountries.length} 
                        </h5>

                        <ul>
                              {visitedCountries.map(
country => <li>key={country.cca3} {country.name.common} </li>


                              )}
                        </ul>
                        
                        
                        
                        
                         </div>
              <div className="countries" > {
                  countries.map(country =><Country 
                        
                        key={country.cca3}    
                        handelVisitedCountries={handelVisitedCountries}
                        country={country} ></Country>)
               }</div> 
            </div>
      );
};

export default Countries;