const flagsURL = import.meta.glob("../../countries/flags/*.svg",{
    eager: true,
    query: "?url",
    import: "default"
}) as Record<string, string>;

function Selection({homeCountry}: {homeCountry: string}){
    const flag = flagsURL[`../../countries/flags/${homeCountry.toLowerCase()}.svg`];
    return(
        <div>
        <img src={flag} alt={homeCountry}></img>
        </div>
    )

}

export default Selection