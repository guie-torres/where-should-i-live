import {filterCountries, type Country} from "../../countries/countries"
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import "./CountrySelect.css"

function CountrySelect({setCountry}: {setCountry: (country: Country) => void}){
    const [searchValue, setSearchValue] = useState("");
    
    return(
        <div>
            <input className="country-input" value={searchValue}     
            onChange={(event) => {setSearchValue(event.target.value)}}>
            </input>
            
            {searchValue !== "" && (<CountryDropdown countries={getDisplayedCountries(searchValue)} setCountry={setCountry}/>)}
        </div>
    )
}

function getDisplayedCountries(key: string){
    const countries = filterCountries(key);
    return countries.slice(0, 5)
}

export default CountrySelect