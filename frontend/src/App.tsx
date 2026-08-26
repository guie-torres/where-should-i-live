import { useState } from 'react'
import HomeCountrySelect from './pages/HomeCountrySelect/HomeCountrySelect'
import Selection from './pages/Selection/Selection';
import CountryComparision from './pages/CountryComparison/CountryComparison';
import type { Country } from './countries/countries';
function App() {
  const [homeCountry, setHomeCountry] = useState<Country | null>(null);
  const [preferedCountry, setPreferedCountry] = useState<Country | null>(null);

  if(preferedCountry && homeCountry)
    return <CountryComparision homeCountry={homeCountry} preferedCountry={preferedCountry}/>

 if(!homeCountry)
  return <HomeCountrySelect setHomeCountry={setHomeCountry}/> 

 if (!preferedCountry)
    return <Selection homeCountry={homeCountry} setHomeCountry={setHomeCountry} preferedCountry={preferedCountry} setPreferedCountry={setPreferedCountry}/>
}

export default App 