import type { Country } from "../../countries/countries";

const flagsURL = import.meta.glob("../../countries/flags/*.svg",{
    eager: true,
    query: "?url",
    import: "default"
}) as Record<string, string>;

function Selection({homeCountry}: {homeCountry: Country}){
    const flag = flagsURL[`../../countries/flags/${homeCountry.code.toLowerCase()}.svg`];
    return(
        <div>
        <img src={flag} alt={homeCountry.code}></img>
        </div>
    )

}

export default Selection