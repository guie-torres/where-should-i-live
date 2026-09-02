import { useState } from 'react'
import HomeCountrySelect from './pages/HomeCountrySelect/HomeCountrySelect'
import Selection from './pages/Selection/Selection';
import type { Country } from './countries/countries';
function App() {
  const [homeCountry, setHomeCountry] = useState<Country | null>(null);

 if(!homeCountry)
  return <HomeCountrySelect setHomeCountry={setHomeCountry}/> 
 else
    return <Selection homeCountry={homeCountry} setHomeCountry={setHomeCountry}/>
}

export default App 