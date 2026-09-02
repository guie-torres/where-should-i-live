import type { Country } from "../../countries/countries";
import PreferedCountrySelect from "../../components/PreferedCountrySelect/PreferedCountrySelect";
import "./Selection.css"
const flagsURL = import.meta.glob("../../countries/flags/*.svg",{
    eager: true,
    query: "?url",
    import: "default"
}) as Record<string, string>;

function Selection({homeCountry, setHomeCountry, preferedCountry, setPreferedCountry}: {homeCountry: Country, setHomeCountry: (country: Country | null) => void, preferedCountry: Country|null, setPreferedCountry: (country: Country | null) => void}){
    const flag = flagsURL[`../../countries/flags/${homeCountry.code.toLowerCase()}.svg`];
    return(
        <div>
        <div className="home-country">
            <button className="home-country-button" onClick={()=>setHomeCountry(null)}>
                <img className="home-country-image" src={flag} alt={homeCountry.code}></img>
            </button>
        </div>
        <h1>{preferedCountry?.name}</h1>
        </div>
    )

}

export default Selection