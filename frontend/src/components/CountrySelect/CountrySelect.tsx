import {filterCountries} from "../../countries/countries"
import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import "./CountrySelect.css"

function CountrySelect(){
    const [searchValue, setSearchValue] = useState("");
    
    return(
        <div>
            <input className="country-input" value={searchValue}     
            onChange={(event) => {setSearchValue(event.target.value)}}>
            </input>
            
            {searchValue !== "" && (<CountryDropdown countries={getDisplayedCountries(searchValue)}/>)}
        </div>
    )
}

function getDisplayedCountries(key: string){
    const countries = filterCountries(key);
    return countries.slice(0, 5)
}

export default CountrySelect