import type { Country } from "../../countries/countries"

function CountryComparision({homeCountry, preferedCountry}:{homeCountry: Country | null, preferedCountry: Country | null}){
    return (
        <div>
            <h1>{homeCountry?.name}</h1>
            <h1>{preferedCountry?.name}</h1>
        </div>
    )
}

export default CountryComparision