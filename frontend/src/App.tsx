import { useState } from 'react'
import HomeCountrySelect from './pages/HomeCountrySelect/HomeCountrySelect'
import Selection from './pages/Selection/Selection';
import type { Country } from './countries/countries';
function App() {
const [homeCountry, setHomeCountry] = useState<Country | null>(null);
  return(
    <div>
    {homeCountry == null ? <HomeCountrySelect setHomeCountry={setHomeCountry}/> : <Selection homeCountry={homeCountry} setHomeCountry={setHomeCountry}/>}
    </div>
  )
}

export default App 