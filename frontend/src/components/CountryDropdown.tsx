import type { Country } from "../countries/countries";
import "./CountryDropdown.css"

const flagUrls = import.meta.glob("../countries/flags/*.svg", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

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
    const flag = flagUrls[`../countries/flags/${country.code.toLowerCase()}.svg`];

    return(
        <div className="country-option">
            <img className="country-flag" src={flag} alt={country.code}/>
            <button>{country.name}</button>
        </div>
    )
}

export default CountryDropdown