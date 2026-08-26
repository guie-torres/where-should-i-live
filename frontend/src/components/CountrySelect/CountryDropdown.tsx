import type { Country } from "../../countries/countries";
import "./CountrySelect.css"

const flagUrls = import.meta.glob("../../countries/flags/*.svg", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

function CountryDropdown(
    { countries, setCountry }: { countries: Country[], setCountry: (country: Country) => void }
) {


const countryComponents = countries.map(country => (
    <CountryDropdownItem
        key={country.code}
        country={country}
        setCountry={setCountry}
    />
));
    
    return(
        <div className="countries">
            {countryComponents}
        </div>
    )
}

function CountryDropdownItem({ country, setCountry }: { country: Country, setCountry: (country: Country) => void}){
    const flag = flagUrls[`../../countries/flags/${country.code.toLowerCase()}.svg`];

    return(
        <button className="country-button" onClick={()=>setCountry(country)}>
        <img className="country-flag" src={flag} alt={country.code} />
        <span>{country.name}</span>
        </button>
    )
}

export default CountryDropdown