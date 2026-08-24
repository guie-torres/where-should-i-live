import {filterCountries, type Country} from "../../countries/countries"
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import "./CountrySelect.css"

function CountrySelect({setHomeCountry}: {setHomeCountry: (country: Country) => void}){
    const [searchValue, setSearchValue] = useState("");
    
    return(
        <div>
            <input className="country-input" value={searchValue}     
            onChange={(event) => {setSearchValue(event.target.value)}}>
            </input>
            
            {searchValue !== "" && (<CountryDropdown countries={getDisplayedCountries(searchValue)} setHomeCountry={setHomeCountry}/>)}
        </div>
    )
}

function getDisplayedCountries(key: string){
    const countries = filterCountries(key);
    return countries.slice(0, 5)
}

export default CountrySelect