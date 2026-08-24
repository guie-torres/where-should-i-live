import CountrySelect from "../../components/CountrySelect/CountrySelect"
import "./HomeCountrySelect.css"
import type { Country } from "../../countries/countries"

function HomeCountrySelect({setHomeCountry}: {setHomeCountry: (country: Country) => void}){
    return(
        <div>
        <h1>WHERE DO YOU COME FROM?</h1>
        <CountrySelect setHomeCountry={setHomeCountry}/>
        </div>
    )
}

export default HomeCountrySelect