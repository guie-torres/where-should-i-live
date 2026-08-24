import type { Country } from "../../countries/countries";
import "./CountrySelect.css"

const flagUrls = import.meta.glob("../../countries/flags/*.svg", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

function CountryDropdown(
    { countries, setHomeCountry }: { countries: Country[], setHomeCountry: (country: Country) => void }
) {


const countryComponents = countries.map(country => (
    <CountryDropdownItem
        key={country.code}
        country={country}
        setHomeCountry={setHomeCountry}
    />
));
    
    return(
        <div className="countries">
            {countryComponents}
        </div>
    )
}

function CountryDropdownItem({ country, setHomeCountry }: { country: Country, setHomeCountry: (country: Country) => void}){
    const flag = flagUrls[`../../countries/flags/${country.code.toLowerCase()}.svg`];

    return(
        <button className="country-button" onClick={()=>setHomeCountry(country)}>
        <img className="country-flag" src={flag} alt={country.code} />
        <span>{country.name}</span>
        </button>
    )
}

export default CountryDropdown