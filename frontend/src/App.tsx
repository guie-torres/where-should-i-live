import { useState } from 'react'
import HomeCountrySelect from './pages/HomeCountrySelect/HomeCountrySelect'
import Selection from './pages/Selection/Selection';

function App() {
  const [homeCountry, setHomeCountry] = useState("");
  return(
    <div>
    {homeCountry == "" ? <HomeCountrySelect /> : <Selection homeCountry={homeCountry}/>}
    </div>
  )
}

export default App 