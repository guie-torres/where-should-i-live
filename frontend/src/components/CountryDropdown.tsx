import type { Country } from "../countries/countries";

function CountryDropdown(
    { countries }: { countries: Country[] }
) {


const countryComponents = countries.map(country => (
    <CountryDropdownItem
        key={country.code}
        country={country}
    />
));
    
    return(
        <div>
            {countryComponents}
        </div>
    )
}

function CountryDropdownItem({ country }: { country: {code: string, name: string} }){
    return(
        <div>
            <button>{country.name}</button>
        </div>
    )
}

export default CountryDropdown