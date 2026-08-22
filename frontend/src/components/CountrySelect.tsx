import {filterCountries } from "../countries/countries"
import { useState } from "react";
function CountrySelect(){
    const [searchValue, setSearchValue] = useState("");
    
    return(
        <div>
            <input value={searchValue}     
            onChange={(event) => {setSearchValue(event.target.value); DisplayCountries(event.target.value)}}>
            </input>
        </div>
    )
}

function DisplayCountries(key: string){
    console.clear()

    const countries = filterCountries(key);

    console.log(countries.map(country => country.name))
}

export default CountrySelect