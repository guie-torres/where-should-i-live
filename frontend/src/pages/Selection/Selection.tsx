import type { Country } from "../../countries/countries";
import "./Selection.css"
const flagsURL = import.meta.glob("../../countries/flags/*.svg",{
    eager: true,
    query: "?url",
    import: "default"
}) as Record<string, string>;

function Selection({homeCountry, setHomeCountry}: {homeCountry: Country, setHomeCountry: (country: Country | null) => void}){
    const flag = flagsURL[`../../countries/flags/${homeCountry.code.toLowerCase()}.svg`];
    return(
        <div className="home-country">
            <button className="home-country-button" onClick={()=>setHomeCountry(null)}>
                <img className="home-country-image" src={flag} alt={homeCountry.code}></img>
            </button>
        </div>
    )

}

export default Selection