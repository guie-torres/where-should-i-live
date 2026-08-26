import type { Country } from "../../countries/countries"
import CountrySelect from "../CountrySelect/CountrySelect"

function PreferedCountrySelect({setPreferedCountry}: {setPreferedCountry: (country: Country | null) => void}){
    return(
        <div>
            <h1>SELECT YOUR PREFERED COUNTRY</h1>
            <CountrySelect setCountry={setPreferedCountry}/>
        </div>
    )
}
export default PreferedCountrySelect