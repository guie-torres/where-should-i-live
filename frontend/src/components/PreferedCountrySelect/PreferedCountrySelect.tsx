import CountrySelect from "../CountrySelect/CountrySelect"

function PreferedCountrySelect(){
    return(
        <div>
            <h1>SELECT YOUR PREFERED COUNTRY</h1>
            <CountrySelect setCountry={()=>()=>{}}/>
        </div>
    )
}
export default PreferedCountrySelect